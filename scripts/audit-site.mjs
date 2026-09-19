import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir, writeFile } from 'node:fs/promises';

const base = process.env.AUDIT_URL || process.argv[2] || 'http://127.0.0.1:3100';
await mkdir('artifacts', { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const findings = [];
try {
  for (const viewport of [{ width: 390, height: 844 }, { width: 1440, height: 1000 }]) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    for (const route of ['/', '/destinations', '/destination-detail', '/gallery', '/blog', '/blog-detail', '/contact']) {
      await page.goto(base + route, { waitUntil: 'networkidle' });
      const result = await new AxeBuilder({ page }).analyze();
      const violations = result.violations.map(({ id, impact, nodes }) => ({ id, impact, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) }));
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
      findings.push({ route, viewport, violations, overflow });
      console.log(JSON.stringify({ route, width: viewport.width, violations: violations.map(v => ({ id: v.id, nodes: v.nodes.length })), overflow }));
      if (route === '/') {
        const summary = page.locator('details summary').first();
        await summary.focus();
        await page.keyboard.press('Enter');
        if (!await page.locator('details').first().evaluate(e => e.open)) throw Error('FAQ did not open with keyboard');
        const panel = page.locator('[data-panel]').nth(2);
        await panel.focus();
        await page.keyboard.press('Enter');
        if (await panel.getAttribute('aria-pressed') !== 'true') throw Error('Panel keyboard activation failed');
        if (viewport.width < 768) {
          await page.locator('#menuToggle').click();
          if (await page.locator('#sidebar').evaluate(e => e.inert)) throw Error('Mobile menu stayed inert');
          await page.keyboard.press('Escape');
          if (!await page.locator('#sidebar').evaluate(e => e.inert)) throw Error('Mobile menu did not close');
        }
      }
    }
    // Exercise client navigation, where DOM-mutating icon setup must stay safe.
    await page.goto(base);
    await page.locator('a[href="/destinations"]').filter({ hasText: 'Explore Now' }).click();
    await page.waitForURL('**/destinations');
    await page.locator('#destinationGrid a').first().click();
    await page.waitForURL('**/destination-detail');
    await page.goBack();
    await page.waitForURL('**/destinations');
    if (errors.length) throw Error(errors.join('\n'));
    await context.close();
  }
  await writeFile('artifacts/accessibility.json', JSON.stringify(findings, null, 2));
  if (findings.some(f => f.violations.length || f.overflow)) process.exitCode = 1;
} finally {
  await browser.close();
}

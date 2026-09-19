import { chromium } from '@playwright/test';
import lighthouse from 'lighthouse';
import { mkdir, writeFile } from 'node:fs/promises';

const browser = await chromium.launch({
  channel: 'chrome', headless: true,
  args: ['--remote-debugging-port=9223', '--remote-debugging-address=127.0.0.1'],
});
try {
  const result = await lighthouse(process.env.AUDIT_URL || 'http://127.0.0.1:3100/', {
    port: 9223, logLevel: 'error', output: ['json', 'html'],
    onlyCategories: ['performance', 'accessibility'],
    skipAudits: ['screenshot-thumbnails', 'final-screenshot'],
  });
  if (!result || result.lhr.runtimeError) throw Error(JSON.stringify(result?.lhr.runtimeError));
  await mkdir('artifacts', { recursive: true });
  await writeFile('artifacts/lighthouse-mobile.json', result.report[0]);
  await writeFile('artifacts/lighthouse-mobile.html', result.report[1]);
  console.log('Scores:', Object.fromEntries(Object.entries(result.lhr.categories).map(([key, category]) => [key, category.score * 100])));
  for (const key of ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'render-blocking-insight', 'image-delivery-insight']) {
    const audit = result.lhr.audits[key];
    console.log(key, audit?.displayValue || audit?.score);
  }
} finally {
  await browser.close();
}

import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

// Run explicitly when changing source photos; builds/deployments need no network.
const sources = new Map();
for (const dir of ['app', 'components']) {
  for (const file of await readdir(dir, { recursive: true })) {
    if (!file.endsWith('.tsx')) continue;
    const source = await readFile(`${dir}/${file}`, 'utf8');
    for (const [match] of source.matchAll(/https:\/\/images\.unsplash\.com\/photo-[^"\s]+/g)) {
      const url = new URL(match);
      const id = url.pathname.slice(1);
      const width = Math.min(1920, Number(url.searchParams.get('w')) || 1600);
      sources.set(id, Math.max(width, sources.get(id) || 0));
    }
  }
}

const landscape = new Set([
  'photo-1502602898657-3e91760cbb34', 'photo-1507525428034-b723cf961d3e',
  'photo-1493246507139-91e8fad9978e', 'photo-1516483638261-f4dbaf036963',
  'photo-1476514525535-07fb3b4ae5f1', 'photo-1501785888041-af3ef285b470',
]);
const output = 'public/images/travel';
await mkdir(output, { recursive: true });
const manifest = {};
let bytes = 0;
for (const [id, maxWidth] of sources) {
  const response = await fetch(`https://images.unsplash.com/${id}?w=${maxWidth}&q=90&fm=webp&fit=max`);
  if (!response.ok) throw Error(`${id}: HTTP ${response.status}`);
  const original = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(original).metadata();
  const variants = { original: undefined };
  if (landscape.has(id)) variants.landscape = 1.5;
  if (id === 'photo-1464822759023-fed622ff2c3b') variants.mobile = 0.65;
  manifest[id] = {};
  for (const [variant, ratio] of Object.entries(variants)) {
    const widths = [...new Set([96, 160, 256, 384, 512, 640, 768, 1024, 1280, 1600, maxWidth])]
      .filter(w => w <= Math.min(maxWidth, metadata.width)).sort((a, b) => a - b);
    const images = [];
    for (const width of widths) {
      const height = ratio ? Math.round(width / ratio) : undefined;
      const resized = sharp(original).rotate().resize({ width, height, fit: 'cover', position: 'centre' });
      const [avif, webp] = await Promise.all([
        resized.clone().avif({ quality: 40, effort: 4 }).toBuffer(),
        resized.clone().webp({ quality: 62, effort: 4 }).toBuffer(),
      ]);
      const entry = { width };
      for (const [format, data] of Object.entries({ avif, webp })) {
        const hash = createHash('sha256').update(data).digest('hex').slice(0, 10);
        const name = `${id}-${variant}-${width}-${hash}.${format}`;
        await writeFile(`${output}/${name}`, data);
        entry[format] = `/images/travel/${name}`;
        bytes += data.length;
      }
      images.push(entry);
    }
    manifest[id][variant] = { width: metadata.width, height: ratio ? Math.round(metadata.width / ratio) : metadata.height, images };
  }
  console.log(`${id}: optimized`);
}
await writeFile('lib/travel-images.json', JSON.stringify(manifest, null, 2) + '\n');
console.log(`${sources.size} photos; ${(bytes / 1024 / 1024).toFixed(2)} MiB across all sizes/formats`);

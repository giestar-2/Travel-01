# Wanderly

Website agen perjalanan dengan Next.js App Router, TypeScript, Tailwind CSS, dan Lucide.
Semua halaman diprerender statis.

## Menjalankan

```sh
npm ci
npm run dev
```

Untuk produksi:

```sh
npm run build
npm start
```

## Performa

- Font Plus Jakarta Sans WOFF2 disajikan lokal melalui `next/font/local`.
  Lisensinya ada di `app/fonts/OFL.txt`.
- CSS kecil disertakan di HTML produksi dengan `experimental.inlineCss`.
  Ini menghilangkan request stylesheet awal, tetapi menambah ukuran HTML setiap halaman.
- `TravelImage` merender `<picture>` AVIF dengan fallback WebP, ukuran responsif,
  dimensi intrinsik, lazy loading, dan prioritas untuk gambar utama.
- Foto di `public/images/travel` sudah dikompres. Nama file mengandung hash konten
  dan memakai cache immutable. `lib/travel-images.json` memetakan URL sumber ke aset lokal.
- Animasi reveal memakai IntersectionObserver dan Web Animations API. Konten awal
  tetap langsung terlihat. Efek pin desktop memakai CSS sticky dengan ruang yang
  sudah disediakan; tidak ada spacer yang disisipkan saat hydration.
- FAQ memakai `details`/`summary` dan dapat digunakan tanpa JavaScript.
- Navbar hanya diperbarui saat melewati ambang scroll; progress artikel dibatasi
  satu pembaruan per animation frame. Preferensi reduced motion dihormati.

## Mengganti foto

URL Unsplash di markup tetap menjadi identitas sumber. Setelah menambahkan atau
mengubah sumber foto, jalankan:

```sh
npm run optimize:images
```

Script ini memerlukan internet dan membuat varian lokal memakai Sharp. Commit
aset hasilnya bersama manifest. Build/deploy biasa tidak perlu mengunduh foto atau font.
Varian crop tambahan diatur dalam `scripts/optimize-travel-assets.mjs`.

## Verifikasi

```sh
npm run typecheck
npm run check:icons
npm run build
npm run start -- --port 3100
```

Dengan server produksi tetap berjalan, jalankan dari terminal lain:

```sh
npm run audit:site
npm run audit:performance
```

Audit memerlukan Google Chrome terpasang. `AUDIT_URL` dapat mengganti alamat default
`http://127.0.0.1:3100`. Audit situs memeriksa 7 halaman pada desktop/ponsel dengan
axe, overflow, FAQ keyboard, panel keyboard, menu mobile, dan navigasi client.
Audit Lighthouse memakai emulasi mobile; hasil JSON/HTML tanpa screenshot disimpan
di `artifacts/` (tidak masuk Git). Hasil lokal bukan jaminan skor deployment.

## Struktur

- `app/`: halaman, layout, stylesheet, dan font lokal.
- `components/`: navigasi, footer, foto responsif, serta bagian bersama.
- `components/scripts/`: interaksi halaman dan cleanup listener saat pindah route.
- `lib/reveal-on-scroll.ts`: animasi ringan untuk konten yang baru masuk viewport.
- `lib/icons.ts` / `lib/brand-icons.ts`: ikon yang dipakai website.
- `scripts/`: kompresi foto dan pemeriksaan produksi.

# Wanderly — Travel Website (Next.js)

Website agen perjalanan dengan brand **Wanderly**. Sebelumnya berupa static site (HTML + Tailwind CDN),
sekarang sudah jadi project **Next.js** dengan tampilan, markup, animasi, dan perilaku yang sama.

## Stack

- **Next.js (App Router) + TypeScript** — tiap halaman lama jadi satu route, semuanya di-prerender statis.
- **Tailwind CSS** (via npm, bukan CDN) — konfigurasi tema `brand.*` dan font-nya identik dengan CDN sebelumnya.
- **GSAP + ScrollTrigger** — dipakai untuk semua animasi (`npm install gsap`, versi 3.x seperti sebelumnya).
- **Lucide** — mengubah `<i data-lucide="...">` menjadi SVG lewat `createIcons()` seperti pada versi HTML.
- **JavaScript manipulasi DOM** — semua logika lama (navbar scroll, hero, accordion, expand panel, filter,
  lightbox, progress bar, form) tetap ditulis sebagai script DOM/GSAP di dalam `useEffect`, bukan diubah
  menjadi state React. Hanya markup-nya yang sekarang dirender React.

## Struktur Proyek

```
.
├── app/
│   ├── layout.tsx                 # <html>/<head> (font), Navbar, Sidebar, LucideIcons
│   ├── globals.css                # @tailwind + CSS custom (marquee, article-body, progressBar, dll)
│   ├── page.tsx                   # /                     (dari index.html)
│   ├── destinations/page.tsx      # /destinations         (dari destinations.html)
│   ├── destination-detail/page.tsx# /destination-detail   (dari destination-detail.html)
│   ├── gallery/page.tsx           # /gallery              (dari gallery.html)
│   ├── blog/page.tsx              # /blog                 (dari blog.html)
│   ├── blog-detail/page.tsx       # /blog-detail          (dari blog-detail.html)
│   └── contact/page.tsx           # /contact              (dari contact.html)
├── components/
│   ├── Navbar.tsx                 # navbar (transparan di beranda + berubah solid saat scroll)
│   ├── Sidebar.tsx                # sidebar mobile (CTA-nya beda per halaman, sesuai aslinya)
│   ├── Footer.tsx                 # 4 varian footer sesuai halaman asalnya
│   ├── SharedSections.tsx         # "Why Wanderly" + FAQ (dulu shared-sections.js)
│   ├── LucideIcons.tsx            # pengganti panggilan lucide.createIcons()
│   ├── nav-links.ts               # daftar menu + penentuan menu aktif
│   └── scripts/                   # script DOM per halaman (dulu <script> di dalam HTML)
│       ├── HomeScripts.tsx        # hero timeline, pin hero, crossfade judul, expand panel
│       ├── DestinationsScripts.tsx
│       ├── GalleryScripts.tsx     # filter galeri + lightbox
│       ├── BlogScripts.tsx
│       ├── BlogDetailScripts.tsx  # reading progress bar
│       └── ContactScripts.tsx     # validasi + status form
├── lib/
│   ├── icons.ts                   # kumpulan ikon yang diregister ke createIcons()
│   ├── brand-icons.ts             # ikon brand (Instagram/Twitter/Facebook/YouTube)
│   └── use-isomorphic-layout-effect.ts
├── scripts/check-icons.mjs        # cek semua data-lucide terdaftar (npm run check:icons)
├── tailwind.config.ts / postcss.config.mjs / next.config.mjs / tsconfig.json
└── README.md
```

### Catatan penting soal `components/scripts/*`

Setiap script halaman **membungkus** markup halaman (`<HomeScripts>…markup…</HomeScripts>`). Ini bukan
gaya penulisan biasa, tapi wajib: React menghapus halaman lama saat pindah route (client-side navigation),
dan cleanup layout effect sebuah komponen berjalan **sebelum** React menghapus node milik komponen itu.
Kalau script-nya jadi *sibling* markup, cleanup-nya jalan terlambat — `pin-spacer` milik ScrollTrigger
belum dilepas, dan React akan error `NotFoundError: Failed to execute 'removeChild'`. Jadi jangan pindahkan
`<XxxScripts />` keluar dari pembungkusnya.

### Ikon brand

`lucide` 1.x sudah tidak menyediakan ikon brand, tapi desain memakai Instagram/Twitter/Facebook/YouTube.
Ikon-ikon itu disalin ke `lib/brand-icons.ts` (dari lucide 0.577.0) dan ikut didaftarkan di `lib/icons.ts`,
sehingga `<i data-lucide="instagram">` tetap berfungsi. Ikon lain yang tidak dipakai tidak ikut dibundel.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
```

Build produksi:

```bash
npm run build
npm start
```

Cek tambahan:

```bash
npm run typecheck     # tsc --noEmit
npm run check:icons   # pastikan semua data-lucide ada di lib/icons.ts
```

## Deploy ke Vercel

1. Push project ini ke GitHub.
2. Buka [vercel.com](https://vercel.com), login dengan akun GitHub.
3. Klik **Add New…** → **Project**, lalu pilih repository-nya.
4. **Framework Preset** — pilih **Next.js** (terdeteksi otomatis).
5. **Build Command** / **Output Directory** — biarkan default (`next build`).
6. Klik **Deploy**.

Setelah itu setiap push ke `main` akan otomatis di-deploy ulang.

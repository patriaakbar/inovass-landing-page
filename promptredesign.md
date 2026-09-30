# Prompt: Redesign Landing Page INOVASS

## Konteks
Proyek: `inovass-landing-page` (React 18 + Vite 5 + Tailwind 3 + react-router-dom 6).
INOVASS adalah konsultan sertifikasi ISO, akreditasi, dan pelatihan. Target pengunjung:
manajer mutu, instansi pemerintah, laboratorium, universitas, dan perusahaan.
Kesan yang harus muncul: kredibel, profesional, modern. Jangan terlihat seperti startup atau template AI.

## Tujuan
Buat ulang seluruh tampilan website supaya modern, animasinya halus, dan responsif penuh
di HP (360–430px), tablet (768–1024px), dan desktop (1280px ke atas).
Tanpa mengubah isi teks, URL, atau data kontak.

## Batasan wajib (jangan dilanggar)
1. Semua 27 path route tetap sama persis (SEO dan link lama harus tetap jalan).
2. Semua teks konten (ISO, manfaat, prinsip, silabus, pelatihan) dipindahkan apa adanya.
   Tidak ada penulisan ulang atau penghapusan.
3. Data kontak tetap: alamat Cibinong, +62-813-1117-3707, WhatsApp, inovass.adm@gmail.com.
4. Semua logo klien di `src/assets/collaboration/` tetap tampil.
5. Stack tetap React + Vite + Tailwind. Library baru yang boleh ditambah hanya `framer-motion`.
   Install lewat `--registry=https://registry.npmjs.org/` karena registry internal kena 429.
6. Tambahkan `react-icons` ke package.json (sekarang dipakai tapi belum dideklarasikan).
7. Perilaku form kontak (`src/formMessage/`) tetap sama. Yang diubah hanya tampilannya.

## Design system
- Warna: pertahankan brand primary `#105bab` dan navy `#004464`. Tambahkan skala netral
  (slate) untuk teks dan permukaan, plus satu aksen hangat untuk CTA.
  Semua token warna didefinisikan di `tailwind.config.js`.
- Font: Plus Jakarta Sans untuk heading dan body (menggantikan Poppins). Pakai skala fluid
  dengan `clamp()`: H1 36→72px, H2 28→44px, body 16→18px.
- Spacing dan layout: container maks 1280px, gutter 16px (HP), 24px (tablet), 32px (desktop).
  Section padding 64px (HP) sampai 120px (desktop).
- Radius 12–20px, shadow lembut berlapis. Hindari gradien ungu, glassmorphism berlebihan,
  dan emoji.
- Kontras teks minimal WCAG AA (4.5:1).

## Struktur halaman utama (`/`)
1. **Navbar**: sticky. Transparan di atas hero, lalu berubah jadi putih dengan blur dan shadow
   saat di-scroll. Desktop pakai mega menu animasi (Layanan: Pengertian ISO, Sertifikasi,
   Akreditasi, Pelatihan; Produk: Aplikasi Solid) yang bisa dibuka lewat hover maupun
   keyboard dan ditutup dengan ESC. HP/tablet pakai drawer full-screen dengan accordion
   bertingkat, body scroll terkunci selama drawer terbuka. Indikator link aktif memakai
   `NavLink` tanpa posisi hardcode.
2. **Hero**: video latar yang sudah ada, ditambah overlay gradien navy. Headline
   "The Maker of Innovation to be Comes True" muncul kata per kata dengan stagger.
   Ada 2 CTA ("Konsultasi Gratis" ke WhatsApp dan "Lihat Layanan") dan scroll indicator.
   Di HP atau saat `prefers-reduced-motion` / save-data aktif, pakai poster image
   (`banner.png`) sebagai pengganti video.
3. **Statistik**: counter animasi (misalnya jumlah klien, standar ISO yang dilayani,
   provinsi). Angkanya diisi placeholder dulu dan ditandai TODO untuk dikonfirmasi klien.
4. **Layanan**: 3 kartu (Sertifikasi Organisasi, Akreditasi Organisasi, Pelatihan).
   Hover mengangkat kartu dan menggeser ikon. Di HP deskripsi selalu tampil
   (tidak bergantung hover).
5. **Standar ISO**: grid chip/kartu berisi 18 standar (9001, 14001, 45001, 27001, 17025, dst.),
   masing-masing link ke halamannya. Bisa difilter per tab: Sertifikasi / Akreditasi.
6. **Klien**: marquee logo tak berujung dua baris berlawanan arah. Logo grayscale lalu
   berwarna saat hover, dan berhenti saat hover. Di bawahnya peta Indonesia (`map-indonesia.png`)
   dengan fade-in.
7. **Produk**: showcase Aplikasi Solid dengan layout split (gambar dan teks), sedikit
   parallax pada gambar.
8. **CTA band**: "Siap tersertifikasi ISO?" dengan tombol WhatsApp dan Kontak.
9. **Footer**: 4 kolom (Brand, Layanan, Perusahaan, Kontak) yang menumpuk jadi 1 kolom
   di HP. Tahun copyright dinamis.

## Halaman layanan (25 halaman)
- Buat satu komponen `ServicePageTemplate` plus satu `PageBanner` untuk menggantikan
  26 komponen banner yang duplikat. Konten tiap halaman dipindah ke objek data
  (`src/data/services/*.js`). Nama komponen halaman dan route tetap sama.
- Layout template: banner dengan breadcrumb, intro, section Prinsip (kartu bernomor),
  Manfaat (checklist grid 1 kolom di HP, 2 kolom di desktop), Struktur/Klausul
  (accordion atau timeline), Tahapan Implementasi (stepper vertikal), lalu CTA.
- Di desktop ada sidebar sticky "Daftar Isi". Di HP ditampilkan sebagai dropdown.
- Halaman berat (`PelatihanSertifikasi` 2100 baris, `PelatihanAkreditasi`, Silabus):
  tabel diubah jadi kartu di HP, atau diberi wrapper overflow-x dengan petunjuk geser.
- Tentang Kami, Kontak, Klien Kami, Pengertian ISO: layout khusus dengan gaya yang sama.

## Animasi (framer-motion)
- Scroll reveal: fade dan translateY 24px, stagger 60–80ms, `once: true`,
  durasi 0.5–0.7s, easing `[0.22, 1, 0.36, 1]`.
- Transisi halaman: fade dan slide ringan lewat `AnimatePresence` di `CompanyLayout`.
- Micro-interaction: hover pada tombol, kartu, dan link (underline mengalir dari kiri).
- Hanya animasikan `transform` dan `opacity`. Tidak boleh ada layout shift.
- Semua animasi dimatikan atau disederhanakan saat `prefers-reduced-motion: reduce`.

## Responsif
Uji di lebar 360, 390, 430, 768, 834, 1024, 1280, dan 1536px. Syaratnya:
- Tidak ada horizontal scroll (ganti semua `w-screen` dengan `w-full`).
- Tidak ada posisi absolut dengan angka hardcode untuk layout (misalnya `right-[763px]`
  atau `top-[500px]`).
- Tap target minimal 44×44px. Teks body minimal 16px di HP.
- Gambar memakai `loading="lazy"` dan ukuran eksplisit supaya tidak ada CLS.

## Bug yang ikut diperbaiki
- `class=` ditulis `className=` (CompanyService dan beberapa file lain).
- `<a>` bersarang di dalam `<Link>` (Footer, Product).
- Accordion "Pelatihan" di menu mobile memakai state `showLayananPengertian`
  (bentrok dengan menu Pengertian ISO).
- Link `/Sertifikasi-Organisasi` salah kapitalisasi.
- Link Aplikasi Solid beda antara desktop (`dcs.inovass.com`) dan mobile
  (`dcs.solid-iso.my.id`). Samakan ke `dcs.inovass.com`.
- Hapus `console.log` di Navbar.

## Performa, aksesibilitas, SEO
- Route di-lazy-load dengan `React.lazy` + `Suspense`.
- `<html lang="id">`, meta description, dan `<title>` per halaman.
- Fokus terlihat (focus-visible ring), atribut aria di menu dan accordion, alt text di semua logo.
- Target Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95.

## Tahapan eksekusi
1. Buat design tokens (tailwind config, font, CSS global) dan komponen dasar
   (Button, Container, Section, Reveal, PageBanner).
2. Navbar dan Footer baru.
3. Homepage per section.
4. `ServicePageTemplate` dan migrasi 25 halaman ke data.
5. Halaman khusus (Tentang, Kontak, Klien, Pelatihan, Silabus).
6. Perbaikan bug, a11y, SEO, lazy loading.
7. Verifikasi: `npm run lint`, `npm run build`, cek manual di browser pada semua
   breakpoint, dan klik semua 27 route.

## Di luar scope
Backend form, perubahan konten, dark mode, multi-bahasa, CMS.

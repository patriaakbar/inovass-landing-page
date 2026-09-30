# Prompt: Tambah Halaman "Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan"

Status: **draft prompt, belum dieksekusi**. Sumber materi: `1. DAFTAR JUDUL PELATIHAN STANDAR INTERNASIONAL ISO BIDANG PARAWISATA DAN PERHOTELAN.pdf` (root repo).

## Tujuan

Tambahkan halaman layanan pelatihan baru di landing page INOVASS untuk program **"Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan Tahun 2026 - 2027"**, mengikuti pola halaman pelatihan yang sudah ada (`PelatihanSertifikasi.jsx`, `PelatihanAkreditasi.jsx`) dan terhubung ke navbar, footer, serta routing.

## Konvensi yang harus diikuti (dari codebase saat ini)

- Halaman baru: `src/pages/servicepage/PelatihanParawisataPerhotelan.jsx`, export named `PelatihanParawisataPerhotelan`.
- Gunakan komponen `TrainingList` (`src/components/service/TrainingList.jsx`) — accordion + search box + `CtaBand`, sama seperti `PelatihanSertifikasi.jsx` dan `PelatihanAkreditasi.jsx`.
- `TrainingList` saat ini **tidak punya slot** untuk: (a) catatan/info di bawah heading, (b) section tambahan setelah daftar accordion sebelum `CtaBand`. Karena PDF sumber punya konten tambahan (kelompok peserta yang direkomendasikan per kategori + manfaat karier lulusan) yang tidak cocok dipaksakan jadi salah satu dari 12 item accordion, **perluas `TrainingList` dengan dua prop opsional**:
  - `note` (string | ReactNode, opsional) — dirender di bawah `heading`, di atas search box.
  - `afterList` (ReactNode, opsional) — dirender setelah `<ul>` daftar accordion (dan setelah pesan "tidak ada hasil"), sebelum `<CtaBand />`.
  - Pastikan tidak mengubah perilaku existing (kedua prop default `undefined`/tidak render apa-apa), jadi `PelatihanSertifikasi.jsx` dan `PelatihanAkreditasi.jsx` tetap jalan tanpa perubahan.
- Setiap item accordion: `{ title, content }` dengan `content` berupa JSX memakai struktur section yang sama seperti item lain (`<h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: ...</h3>`, lalu blok `Tujuan Pelatihan`, `Manfaat Pelatihan` / atau field sesuai data sumber, `Saran Personil yang Mengikuti Pelatihan`, `Output dari Hasil Pelatihan`, ditutup paragraf ringkasan `<span className="font-normal mb-2">`).
- Routing: tambahkan entry baru di `src/routes/index.jsx` pada object `routes`:
  ```js
  "/pelatihan-parawisata-dan-perhotelan": "servicepage/PelatihanParawisataPerhotelan",
  ```
- Menu navbar: tambahkan link baru ke group `"Pelatihan"` di `serviceMenu` (`src/data/site.js`):
  ```js
  { label: "Pelatihan Parawisata dan Perhotelan", path: "/pelatihan-parawisata-dan-perhotelan" },
  ```
- Footer: tambahkan link yang sama di array `links` kolom `"Layanan"` (`src/components/CompanyFooter.jsx`, setelah `"Pelatihan Akreditasi"`):
  ```js
  { label: "Pelatihan Parawisata dan Perhotelan", to: "/pelatihan-parawisata-dan-perhotelan" },
  ```
- `servicePaths` di `src/data/site.js` dihitung otomatis dari `serviceMenu` (`flatMap`), jadi tidak perlu diubah manual — cukup pastikan link baru sudah masuk `serviceMenu`.

## Konten halaman

### Banner
- `title`: `"Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan"`
- `subtitle`: sebutkan cakupan tahun 2026-2027 dan format `Pelatihan 2 Hari (Online/Offline)`.
- `crumbs`: `["Layanan", "Pelatihan"]` (pola sama dengan halaman pelatihan lain).

### Heading & note
- `heading`: `"Daftar Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan Tahun 2026 - 2027"`.
- `note`: catatan bahwa jadwal pelatihan dapat disesuaikan permintaan peserta, dan kontak person **Heriyanto, Hp. 081311173707**.

### 12 item accordion (dari PDF, tabel "Daftar Judul Pelatihan")

Untuk tiap item, field sumber PDF adalah: **Judul Pelatihan ISO**, **Calon Peserta Pelatihan/Profesi**, **Manfaat bagi Industri Parawisata dan Perhotelan**, **Manfaat bagi Peserta Pelatihan**. Semua pelatihan berdurasi **2 hari, online/offline**. Petakan 4 field ini ke struktur section yang dipakai halaman pelatihan lain (Tujuan Pelatihan bisa disintesis dari judul + kedua kolom manfaat; field "Calon Peserta" jadi "Saran Personil yang Mengikuti Pelatihan"; kedua kolom manfaat digabung jadi section "Manfaat Pelatihan" atau dipisah dua section "Manfaat bagi Industri" dan "Manfaat bagi Peserta").

1. **Penerapan ISO 9001:2015 — Sistem Manajemen Mutu pada Industri Parawisata dan Perhotelan**
   - Peserta: General Manager Hotel, Hotel Manager, Quality Assurance Officer, Supervisor Operasional, Front Office Manager, Dosen Hospitality, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Menjamin konsistensi kualitas pelayanan dan meningkatkan kepuasan tamu.
   - Manfaat peserta: Memahami sistem mutu dan SOP pelayanan hotel bertaraf internasional standar QMS ISO 9001:2015.

2. **Penerapan ISO 22000:2018 — Sistem Manajemen Keamanan Pangan pada Industri Parawisata dan Perhotelan**
   - Peserta: Executive Chef, Sous Chef, Kitchen Supervisor, F&B Manager, Catering Manager, Food Safety Officer, Mahasiswa Tata Boga dan Perhotelan serta Alumni dan Umum.
   - Manfaat industri: Menjamin keamanan makanan dan minuman serta mencegah keracunan pangan.
   - Manfaat peserta: Memahami pengelolaan keamanan pangan yang dibutuhkan industri hospitality berbasis ISO 22000:2018.

3. **Penerapan ISO 45001:2018 — Sistem Manajemen K3 pada Industri Parawisata dan Perhotelan**
   - Peserta: HSE Officer, HR Manager, Engineering Manager, Housekeeping Manager, Kitchen Manager, Event Manager, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Mengurangi kecelakaan kerja dan meningkatkan keselamatan karyawan serta tamu.
   - Manfaat peserta: Memahami penerapan K3 pada hotel, restoran, dan objek wisata, kegiatan event indoor & outdoor, berbasis ISO 45001:2018.

4. **Penerapan ISO 14001:2015 — Sistem Manajemen Lingkungan pada Industri Parawisata dan Perhotelan**
   - Peserta: Sustainability Manager, Resort Manager, Environmental Officer, Facility Manager, Pengelola Destinasi Wisata, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Mendukung Green Hotel dan Sustainable Tourism melalui pengelolaan lingkungan yang baik.
   - Manfaat peserta: Memahami kompetensi dalam pengelolaan wisata berkelanjutan dan tata kelola limbah perhotelan dan parawisata berbasis EMS ISO 14001:2015.

5. **Penerapan ISO 10002:2018 — Manajemen Keluhan Pelanggan pada Industri Parawisata dan Perhotelan**
   - Peserta: Front Office Manager, Guest Relation Officer, Customer Service Manager, Reservation Supervisor, Tourism Service Officer, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Meningkatkan kepuasan dan loyalitas pelanggan melalui pengelolaan keluhan yang efektif.
   - Manfaat peserta: Memahami teknik complaint handling dan service excellence secara sistematis berdasarkan standar ISO 10002:2018.

6. **Pemahaman ISO 20121:2024 — Sustainable Event Management pada Industri Parawisata dan Perhotelan**
   - Peserta: Event Manager, MICE Manager, Convention Manager, Exhibition Organizer, Wedding Organizer, Mahasiswa MICE, Alumni dan Umum.
   - Manfaat industri: Menjamin penyelenggaraan event yang efisien, ramah lingkungan, dan berkelanjutan.
   - Manfaat peserta: Membekali kompetensi pengelolaan event berstandar internasional berbasis Standar ISO 20121:2024.

7. **Penerapan ISO 21401:2018 — Sustainable Accommodation pada Industri Parawisata dan Perhotelan**
   - Peserta: Hotel Manager, Resort Manager, Villa Manager, Homestay Manager, Sustainability Officer, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Meningkatkan reputasi akomodasi wisata yang berkelanjutan dan ramah lingkungan.
   - Manfaat peserta: Memahami pengelolaan hotel berkelanjutan sesuai tren global berbasis standar internasional ISO 21401:2018.

8. **Pemahaman ISO 31000:2018 — Manajemen Risiko pada Industri Parawisata dan Perhotelan**
   - Peserta: General Manager, Risk Manager, Finance Manager, Operation Manager, Travel Agency Manager, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Mengurangi risiko operasional, finansial, keselamatan, dan reputasi bisnis.
   - Manfaat peserta: Membekali kemampuan identifikasi dan mitigasi risiko usaha pariwisata dan perhotelan berbasis standar ISO 31000:2018.

9. **Pemahaman ISO 27001:2022 — Sistem Manajemen Keamanan Informasi pada Industri Parawisata dan Perhotelan**
   - Peserta: IT Manager, Reservation Manager, Revenue Manager, Data Protection Officer, E-Tourism Manager, Mahasiswa, Alumni dan Umum.
   - Manfaat industri: Melindungi data pelanggan, sistem reservasi, dan transaksi digital.
   - Manfaat peserta: Memahami keamanan informasi dalam era digital hospitality berbasis standar ISO 27001:2022.

10. **Penerapan ISO 56002 — Sistem Manajemen Inovasi pada Industri Parawisata dan Perhotelan**
    - Peserta: Business Development Manager, Marketing Manager, Tourism Entrepreneur, Product Development Officer, Mahasiswa, Alumni dan Umum.
    - Manfaat industri: Mendorong inovasi produk wisata, layanan hotel, dan strategi pemasaran.
    - Manfaat peserta: Mengembangkan kreativitas dan inovasi bisnis pariwisata dan perhotelan berbasis standar internasional ISO 56002.

11. **Penerapan ISO 30414:2018 — Human Capital Reporting pada Industri Parawisata dan Perhotelan**
    - Peserta: HR Manager, Training Manager, Talent Development Officer, Hotel Manager, Dosen, Mahasiswa, Alumni dan Umum.
    - Manfaat industri: Membantu pengelolaan SDM yang efektif dan pengembangan kompetensi karyawan.
    - Manfaat peserta: Memahami manajemen SDM dan pengembangan karier di industri hospitality berbasis standar internasional ISO 30414:2018.

12. **Penerapan ISO 55001:2024 — Sistem Manajemen Aset pada Industri Parawisata dan Perhotelan**
    - Peserta: Engineering Manager, Facility Manager, Asset Manager, Chief Engineer Hotel, Resort Manager, Mahasiswa, Alumni dan Umum.
    - Manfaat industri: Mengoptimalkan pengelolaan aset hotel, resort, dan fasilitas wisata.
    - Manfaat peserta: Memahami pengelolaan aset dan fasilitas penunjang operasional hotel dan parawisata berbasis ISO 55001:2024.

### Section tambahan (render via `afterList` di `TrainingList`, setelah accordion, sebelum `CtaBand`)

**1. "Kelompok Peserta yang Sangat Direkomendasikan Mengikuti Pelatihan"** — tampilkan sebagai 4 grup (grid 2 kolom di desktop, mis. pakai kartu/checklist style yang konsisten dengan `ServicePageTemplate` punya, atau `<ul>` sederhana per grup dengan heading `<h3>`):

- **A. Industri Perhotelan**: General Manager Hotel, Hotel Manager, Resort Manager, Front Office Manager, Housekeeping Manager, Food & Beverage Manager, Executive Chef, Engineering Manager, Human Resources Manager, Quality Assurance Manager, Guest Relation Officer, Reservation Manager, Asset Manager, Sustainability Manager, Dosen bidang Parawisata dan Perhotelan, Mahasiswa bidang Parawisata dan Perhotelan, Alumni bidang Parawisata dan Perhotelan, Umum.
- **B. Industri Pariwisata**: Direktur Biro Perjalanan Wisata, Tour Manager, Travel Consultant, Destination Manager, Tourism Development Officer, Pengelola Desa Wisata, Pengelola Taman Wisata, Pengelola Museum dan Atraksi Wisata, Tourism Quality Assurance Officer, Dosen bidang Parawisata dan Perhotelan, Mahasiswa bidang Parawisata dan Perhotelan, Alumni bidang Parawisata dan Perhotelan, Umum.
- **C. Industri MICE (Meeting, Incentive, Convention, Exhibition)**: Event Manager, MICE Manager, Convention Manager, Exhibition Organizer, Wedding Organizer, Professional Conference Organizer (PCO), Professional Exhibition Organizer (PEO).
- **D. Akademisi dan Mahasiswa**: Dekan Fakultas Pariwisata, Ketua Program Studi Pariwisata, Ketua Program Studi Perhotelan, Dosen Pariwisata, Dosen Perhotelan, Laboran Hotel dan MICE, Mahasiswa Pariwisata, Mahasiswa Perhotelan, Mahasiswa MICE/Event Management, Mahasiswa Tata Boga dan Hospitality.

**2. "Manfaat Strategis bagi Lulusan Pariwisata dan Perhotelan"** — intro: "Dengan memahami standar ISO tersebut, lulusan / peserta pelatihan memiliki peluang berkarier sebagai:", lalu daftar profesi (tampilkan sebagai grid/checklist, konsisten dengan style `Checklist`/`Cards` di `ServicePageTemplate.jsx`):

Hotel Quality Assurance Officer, Internal Auditor Hotel, Food Safety Officer, Hospitality Risk Officer, Sustainability Officer, Guest Experience Manager, Human Capital Officer, Asset Management Officer, Event Sustainability Officer, Tourism Quality Manager, Hospitality Compliance Officer, Tourism Innovation Officer, Resort Operations Manager, Hospitality Consultant, Tourism Management Consultant.

Tutup section ini dengan paragraf: "Kompetensi berbasis ISO menjadi nilai tambah penting karena banyak hotel berbintang, resort internasional, operator wisata, dan perusahaan MICE saat ini mengarah pada penerapan **Quality Management, Sustainable Tourism, Food Safety, Risk Management, Information Security, Human Capital Management, dan Asset Management** sesuai standar internasional."

> Catatan: field "PT. Inovasi Solusindo Sukses / TTD / Ir. Heriyanto, M.Si., Direktur Utama" di akhir PDF adalah kop dokumen resmi, **tidak perlu** ditampilkan di halaman web — cukup kontak person (Heriyanto, 081311173707) yang sudah ditaruh di `note`.

## Definition of done

1. `src/components/service/TrainingList.jsx` punya prop opsional `note` dan `afterList`, backward-compatible (halaman lain tidak berubah tampilannya).
2. File baru `src/pages/servicepage/PelatihanParawisataPerhotelan.jsx` berisi 12 item accordion sesuai data di atas + section tambahan lewat `afterList`.
3. Route `/pelatihan-parawisata-dan-perhotelan` terdaftar di `src/routes/index.jsx` dan bisa diakses.
4. Link baru muncul di navbar (group "Pelatihan") dan di footer (kolom "Layanan"), mengarah ke route yang sama.
5. `npm run lint` tidak menambah error baru dibanding baseline saat ini (baseline masih punya banyak `react/prop-types` error pre-existing di file lain — jangan diperbaiki di luar scope task ini).
6. Jalankan dev server, buka halaman baru di browser, cek: accordion 12 item bisa dibuka/tutup dan searchable, dua section tambahan tampil rapi di desktop & mobile, link navbar/footer berfungsi.

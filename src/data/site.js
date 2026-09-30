export const contact = {
  phone: "+62-813-1117-3707",
  phoneHref: "tel:+6281311173707",
  whatsappHref: "https://api.whatsapp.com/send/?phone=6281311173707&text&type=phone_number&app_absent=0",
  email: "inovass.adm@gmail.com",
  address: "Jl Danau Melahayu No. 23A Pesona Telaga Cibinong Kel. Harapan Jaya, Kec. Cibinong Cibinong, Bogor",
};

export const solidAppUrl = "https://dcs.inovass.com/";

export const sertifikasiStandards = [
  { code: "ISO 9001:2015", name: "Quality Management System", path: "/quality-management-system" },
  { code: "ISO 14001:2015", name: "Sistem Manajemen Lingkungan", path: "/sistem-manajemen-lingkungan" },
  { code: "ISO 45001:2018", name: "Sistem Manajemen Keselamatan dan Kesehatan Kerja", path: "/sistem-manajemen-keselamatan-kesehatan-kerja" },
  { code: "ISO 27001:2022", name: "Sistem Manajemen Keamanan Informasi (SMKI)", path: "/sistem-manajemen-keamanan-informasi" },
  { code: "ISO 37001:2016", name: "Sistem Manajemen Anti Penyuapan (SMAP)", path: "/sistem-manajemen-anti-penyuapan" },
  { code: "ISO 22000:2018", name: "Sistem Manajemen Keamanan Pangan", path: "/sistem-manajemen-keamanan-pangan" },
  { code: "ISO 31000:2018", name: "Manajemen Risiko", path: "/manajemen-risiko" },
  { code: "ISO 21001:2018", name: "Sistem Manajemen Organisasi Pendidikan", path: "/sistem-manajemen-organisasi-pendidikan" },
  { code: "ISO 50001:2018", name: "Sistem Manajemen Energi", path: "/sistem-manajemen-energi" },
  { code: "ISO 35001:2019", name: "Standar Internasional Sistem Manajemen Biorisiko Laboratorium (SMBL)", path: "/standar-internasional-sistem-manajemen-biorisko-laboratorium" },
  { code: "ISO 26000:2010", name: "Panduan Tanggung Jawab Sosial", path: "/panduan-tanggung-jawab-sosial" },
];

export const akreditasiStandards = [
  { code: "ISO 17025:2017", name: "Persyaratan Umum untuk Kompetensi Laboratorium Pengujian dan Kalibrasi", path: "/persyaratan-umum-untuk-kompetensi-laboratorium-pengujian-dan-kalibrasi" },
  { code: "ISO 17020:2012", name: "Persyaratan Umum untuk Pengoperasian Berbagai Jenis Lembaga Inspeksi", path: "/persyaratan-umum-untuk-pengoperasian-berbagai-jenis-lembaga-inspeksi" },
  { code: "ISO 17024:2012", name: "Penilaian Kesesuaian - Persyaratan Umum untuk Badan Sertifikasi Personel", path: "/penilaian-kesesuaian-persyaratan-umum-untuk-badan-sertifikasi-personel" },
  { code: "ISO 17043:2023", name: "Penilaian Kesesuaian - Persyaratan Umum untuk Kemahiran Pengujian dan Kalibrasi Laboratorium", path: "/penilaian-kesesuaian-persyaratan-umum-untuk-kemahiran-pengujian-dan-kalibrasi-laboratorium" },
  { code: "ISO 15189:2022", name: "Persyaratan Mutu dan Kompetensi untuk Laboratorium Medis", path: "/persyaratan-mutu-dan-kompetensi-untuk-laboratorium-medis" },
];

export const serviceMenu = [
  {
    title: "Pengertian ISO",
    links: [{ label: "Pengertian ISO", path: "/pengertian-iso" }],
  },
  {
    title: "Sertifikasi Organisasi",
    links: [
      { label: "Sertifikasi Organisasi", path: "/sertifikasi-organisasi" },
      { label: "Sertifikasi Kompetensi Personel", path: "/sertifikasi-kompetensi-personel" },
      ...sertifikasiStandards.map((s) => ({ label: s.code.replace(":", " : "), path: s.path })),
    ],
  },
  {
    title: "Akreditasi Organisasi",
    links: [
      { label: "Akreditasi Organisasi", path: "/akreditasi-organisasi" },
      ...akreditasiStandards.map((s) => ({ label: s.code.replace(":", " : "), path: s.path })),
    ],
  },
  {
    title: "Pelatihan",
    links: [
      { label: "Pelatihan Sertifikasi", path: "/pelatihan-sertifikasi" },
      { label: "Pelatihan Akreditasi", path: "/pelatihan-akreditasi" },
      { label: "Pelatihan Parawisata dan Perhotelan", path: "/pelatihan-parawisata-dan-perhotelan" },
    ],
  },
];

export const servicePaths = serviceMenu.flatMap((group) => group.links.map((l) => l.path)).concat(["/silabus-iso17025-2017"]);

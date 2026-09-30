import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = [
  { title: "Meningkatkan Integritas dan Reputasi", description: "Organisasi dapat menunjukkan komitmennya terhadap anti-penyuapan dan membangun kepercayaan dengan pelanggan, mitra, dan pemangku kepentingan lainnya." },
  { title: "Mengurangi Risiko Penyuapan", description: "Organisasi dapat mengurangi risiko terkena sanksi hukum, denda, dan kerusakan reputasi akibat penyuapan." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat meningkatkan efisiensi dan efektivitas operasi dengan menerapkan kontrol anti-penyuapan yang komprehensif." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat menunjukkan komitmennya terhadap praktik bisnis yang beretika dan bertanggung jawab." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar anti-penyuapan." },
  { title: "Meningkatkan Peluang Untuk Mendapatkan Tender", description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain." },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMAP." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMAP dan memastikan bahwa SMAP diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SMAP, termasuk menetapkan tujuan anti-penyuapan dan sasaran anti-penyuapan." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SMAP, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SMAP." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SMAP dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara SMAP yang ada dengan persyaratan ISO 37001:2016." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 37001:2016, termasuk menetapkan timeline dan sumber daya." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 37001:2016." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SMAP telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau SMAP untuk memastikan bahwa SMAP masih relevan dan efektif." },
  { title: "Sertifikasi", description: "SMAP ISO 37001 : 2016." },
];

const regulations = [
  "Undang-Undang Nomor 31 Tahun 1999 tentang Pemberantasan Tindak Pidana Korupsi",
  "Peraturan Presiden Nomor 54 Tahun 2018 tentang Strategi Nasional Pencegahan Korupsi",
  "Peraturan Menteri PANRB Nomor 52 Tahun 2014 tentang Pedoman Pembangunan Zona Integritas Menuju Wilayah Bebas dari Korupsi dan Wilayah Birokrasi Bersih dan Melayani",
  "Peraturan Menteri BUMN Nomor 09/MBU/04/2021 tentang Penerapan Manajemen Risiko dan Pengendalian Gratifikasi di Badan Usaha Milik Negara",
];

export const SistemManajemenAntiPenyuapan = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 37001:2016", subtitle: "Sistem Manajemen Anti Penyuapan (SMAP)", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 37001:2016"
      intro="ISO 37001:2016 adalah standar internasional untuk Sistem Manajemen Anti Penyuapan (SMAP). Standar ini membantu organisasi dalam mencegah, mendeteksi, dan merespon penyuapan."
      sections={[
        { id: "manfaat", title: "Manfaat ISO 37001:2016", items: benefits, variant: "cards" },
        { id: "regulasi", title: "Undang-Undang, Peraturan Pemerintah, dan Peraturan Menteri Yang Mewajibkannya", items: regulations, variant: "list" },
        { id: "struktur", title: "Struktur ISO 37001:2016", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 37001:2016", lead: "Proses penerapan ISO 37001:2016 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
      ]}
    />
  );
};

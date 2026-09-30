import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kredibilitas dan reputasi organisasi.",
  "Meningkatkan kepercayaan pelanggan dan mitra.",
  "Meningkatkan efisiensi dan efektivitas operasi organisasi.",
  "Memenuhi persyaratan hukum dan peraturan.",
  "Meningkatkan daya saing di pasar global.",
  "Mendapatkan jaminan legalitas hukum dari Lembaga Akreditasi terkait.",
  "Mendapatkan jaminan kualitas sesuai lingkup akreditasi yang diasesmen oleh Lembaga Akreditasi terkait.",
];

const benefits = [
  {
    title: "Meningkatkan kredibilitas dan reputasi organisasi",
    description: "Akreditasi organisasi menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa organisasi telah berkomitmen untuk menerapkan sistem manajemen yang baik.",
  },
  { title: "Meningkatkan kepercayaan pelanggan dan mitra", description: "Akreditasi organisasi dapat meningkatkan kepercayaan pelanggan dan mitra terhadap kualitas produk atau layanan yang ditawarkan oleh organisasi." },
  { title: "Meningkatkan efisiensi dan efektivitas operasi organisasi", description: "Penerapan sistem manajemen yang baik dapat membantu organisasi dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi persyaratan hukum dan peraturan", description: "Akreditasi organisasi dapat membantu organisasi dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan daya saing di pasar global", description: "Akreditasi organisasi dapat membantu organisasi dalam meningkatkan daya saingnya di pasar global." },
];

const types = [
  { title: "Akreditasi Lembaga Sertifikasi Sistem Manajemen Mutu (ISO 9001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen mutu yang efektif untuk memastikan kualitas produk atau layanannya." },
  { title: "Akreditasi Lembaga Sertifikasi Sistem Manajemen Lingkungan (ISO 14001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen lingkungan yang efektif untuk mengendalikan dampak lingkungannya." },
  {
    title: "Akreditasi Lembaga Sertifikasi Sistem Manajemen Keselamatan dan Kesehatan Kerja (ISO 45001)",
    description: "Menunjukkan bahwa organisasi memiliki sistem manajemen keselamatan dan kesehatan kerja yang efektif untuk melindungi karyawannya dari risiko kecelakaan kerja dan penyakit akibat kerja.",
  },
  {
    title: "Akreditasi Lembaga Sertifikasi Sistem Manajemen Anti Penyuapan (ISO 37001)",
    description: "Menunjukkan bahwa organisasi memiliki sistem manajemen anti penyuapan yang efektif untuk mencegah, mendeteksi, dan merespon penyuapan.",
  },
  { title: "Akreditasi Lembaga Sertifikasi Sistem Manajemen Keamanan Informasi (ISO/IEC 27001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen keamanan informasi yang efektif untuk melindungi informasi asetnya." },
];

const processes = [
  { title: "Pengajuan Aplikasi", description: "Organisasi harus mengajukan aplikasi ke lembaga akreditasi yang terakreditasi." },
  { title: "Peninjauan Dokumentasi", description: "Lembaga akreditasi akan meninjau dokumentasi sistem manajemen organisasi." },
  { title: "Audit", description: "Lembaga akreditasi akan melakukan audit untuk memastikan bahwa organisasi telah menerapkan sistem manajemen sesuai dengan standar yang dipersyaratkan." },
  { title: "Keputusan Sertifikasi", description: "Lembaga akreditasi akan memutuskan apakah organisasi layak untuk diakreditasi." },
  { title: "Penerbitan Sertifikat", description: "Jika organisasi memenuhi persyaratan, lembaga akreditasi akan menerbitkan sertifikat akreditasi." },
  { title: "Pemeliharaan Sertifikasi", description: "Organisasi harus memelihara sistem manajemennya dan melakukan audit surveilans secara berkala untuk memastikan bahwa sertifikat akreditasinya tetap valid." },
];

const differents = [
  "Akreditasi dilakukan oleh lembaga independen yang imparsial, sedangkan sertifikasi dapat dilakukan oleh lembaga sertifikasi yang tidak selalu independen.",
  "Akreditasi lebih fokus pada penilaian dan pengakuan terhadap sistem manajemen organisasi, sedangkan sertifikasi lebih fokus pada penilaian dan pengakuan terhadap produk atau layanan organisasi.",
  "Akreditasi umumnya memiliki cakupan yang lebih luas daripada sertifikasi.",
  "Akreditasi hanya dapat dilakukan pada organisasi, sedangkan sertifikasi dapat dilakukan pada organisasi dan personel/perorangan",
];

export const AkreditasiOrganisasi = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "Akreditasi Organisasi", crumbs: ["Layanan"] }}
      heading="Akreditasi Organisasi"
      intro="Akreditasi organisasi adalah proses penilaian dan pengakuan terhadap suatu organisasi yang telah memenuhi standar Akreditasi tertentu. Standar ini dapat berupa standar internasional, nasional, atau industri tertentu."
      sections={[
        { id: "tujuan", title: "Tujuan Akreditasi Organisasi", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat Akreditasi Organisasi", items: benefits, variant: "cards" },
        { id: "jenis", title: "Jenis - Jenis Akreditasi Organisasi", items: types, variant: "list" },
        { id: "proses", title: "Proses Akreditasi Organisasi", items: processes, variant: "steps" },
        { id: "perbedaan", title: "Perbedaan Akreditasi dan Sertifikasi", items: differents, variant: "list" },
      ]}
    />
  );
};

import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kredibilitas dan reputasi organisasi.",
  "Meningkatkan kepercayaan pelanggan dan mitra.",
  "Meningkatkan efisiensi dan efektivitas operasi organisasi.",
  "Memenuhi persyaratan hukum dan peraturan.",
  "Meningkatkan daya saing di pasar global.",
];

const benefits = [
  {
    title: "Meningkatkan kredibilitas dan reputasi organisasi",
    description: "Sertifikasi organisasi menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa organisasi telah berkomitmen untuk menerapkan sistem manajemen yang baik.",
  },
  { title: "Meningkatkan kepercayaan pelanggan dan mitra", description: "Sertifikasi organisasi dapat meningkatkan kepercayaan pelanggan dan mitra terhadap kualitas produk atau layanan yang ditawarkan oleh organisasi." },
  { title: "Meningkatkan efisiensi dan efektivitas operasi organisasi", description: "Penerapan sistem manajemen yang baik dapat membantu organisasi dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi persyaratan hukum dan peraturan", description: "Sertifikasi organisasi dapat membantu organisasi dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan daya saing di pasar global", description: "Sertifikasi organisasi dapat membantu organisasi dalam meningkatkan daya saingnya di pasar global." },
];

const types = [
  { title: "Sertifikasi Sistem Manajemen Mutu (ISO 9001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen mutu yang efektif untuk memastikan kualitas produk atau layanannya." },
  { title: "Sertifikasi Sistem Manajemen Lingkungan (ISO 14001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen lingkungan yang efektif untuk mengendalikan dampak lingkungannya." },
  {
    title: "Sertifikasi Sistem Manajemen Keselamatan dan Kesehatan Kerja (ISO 45001)",
    description: "Menunjukkan bahwa organisasi memiliki sistem manajemen keselamatan dan kesehatan kerja yang efektif untuk melindungi karyawannya dari risiko kecelakaan kerja dan penyakit akibat kerja.",
  },
  { title: "Sertifikasi Sistem Manajemen Anti Penyuapan (ISO 37001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen anti penyuapan yang efektif untuk mencegah, mendeteksi, dan merespon penyuapan." },
  { title: "Sertifikasi Sistem Manajemen Keamanan Informasi (ISO/IEC 27001)", description: "Menunjukkan bahwa organisasi memiliki sistem manajemen keamanan informasi yang efektif untuk melindungi informasi asetnya." },
];

const processes = [
  { title: "Pengajuan Aplikasi", description: "Organisasi harus mengajukan aplikasi ke lembaga sertifikasi yang terakreditasi." },
  { title: "Peninjauan Dokumentasi", description: "Lembaga sertifikasi akan meninjau dokumentasi sistem manajemen organisasi." },
  { title: "Audit", description: "Lembaga sertifikasi akan melakukan audit untuk memastikan bahwa organisasi telah menerapkan sistem manajemen sesuai dengan standar yang dipersyaratkan." },
  { title: "Keputusan Sertifikasi", description: "Lembaga sertifikasi akan memutuskan apakah organisasi layak untuk disertifikasi." },
  { title: "Penerbitan Sertifikat", description: "Jika organisasi memenuhi persyaratan, lembaga sertifikasi akan menerbitkan sertifikat." },
  { title: "Pemeliharaan Sertifikasi", description: "Organisasi harus memelihara sistem manajemennya dan melakukan audit surveilans secara berkala untuk memastikan bahwa sertifikatnya tetap valid." },
];

const differents = [
  "Akreditasi dilakukan oleh lembaga independen yang imparsial, sedangkan sertifikasi dapat dilakukan oleh lembaga sertifikasi yang tidak selalu independen.",
  "Akreditasi lebih fokus pada penilaian dan pengakuan terhadap sistem manajemen organisasi, sedangkan sertifikasi lebih fokus pada penilaian dan pengakuan terhadap produk atau layanan organisasi.",
  "Akreditasi umumnya memiliki cakupan yang lebih luas daripada sertifikasi.",
  "Akreditasi hanya dapat dilakukan pada organisasi, sedangkan sertifikasi dapat dilakukan pada organisasi dan personel/perorangan",
];

export const SertifikasiOrganisasi = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "Sertifikasi Organisasi", crumbs: ["Layanan"] }}
      heading="Sertifikasi Organisasi"
      intro="Sertifikasi organisasi adalah pengakuan resmi yang diberikan kepada suatu organisasi atas penerapan sistem manajemen yang telah memenuhi standar tertentu. Standar ini dapat berupa standar internasional, nasional, atau industri tertentu."
      sections={[
        { id: "tujuan", title: "Tujuan Sertifikasi Organisasi", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat Sertifikasi Organisasi", items: benefits, variant: "cards" },
        { id: "jenis", title: "Jenis - Jenis Sertifikasi Organisasi", items: types, variant: "list" },
        { id: "proses", title: "Proses Sertifikasi Organisasi", items: processes, variant: "steps" },
        { id: "perbedaan", title: "Perbedaan Akreditasi dan Sertifikasi", items: differents, variant: "list" },
      ]}
    />
  );
};

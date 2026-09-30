import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const principles = [
  { title: "Komitmen Terhadap Perlindungan Lingkungan", description: "Organisasi harus berkomitmen untuk melindungi lingkungan dan mencegah pencemaran." },
  { title: "Kepatuhan Terhadap Peraturan", description: "Organisasi harus mematuhi semua peraturan lingkungan yang relevan." },
  { title: "Peningkatan Berkelanjutan", description: "Organisasi harus terus berusaha untuk meningkatkan kinerja lingkungannya." },
  { title: "Pendekatan Proses", description: "Organisasi harus mengidentifikasi, memahami, dan mengelola proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Keterlibatan Orang", description: "Semua orang di organisasi harus terlibat dalam SML dan memahami peran mereka dalam melindungi lingkungan." },
  { title: "Komunikasi", description: "Organisasi harus berkomunikasi secara efektif tentang SML kepada semua pemangku kepentingan." },
];

const benefits = [
  { title: "Mengurangi Dampak Lingkungan", description: "Organisasi dapat mengurangi konsumsi energi, emisi gas rumah kaca, dan limbah." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat menghemat biaya dan meningkatkan produktivitas." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat membangun kepercayaan dan kredibilitas dengan pelanggan dan mitra." },
  { title: "Meningkatkan Motivasi dan Keterlibatan Karyawan", description: "Organisasi dapat meningkatkan moral dan produktivitas karyawan." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar lingkungan." },
  { title: "Meningkatkan Peluang Untuk Mendapatkan Tender", description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain." },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SML." },
  { title: "Kepemimpinan", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SML dan memastikan bahwa SML diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SML, termasuk menetapkan tujuan lingkungan dan sasaran lingkungan." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SML, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SML." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SML dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara SML yang ada dengan persyaratan ISO 14001:2015." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 14001:2015, termasuk menetapkan timeline dan sumber daya." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan QMS, termasuk menetapkan tujuan mutu dan sasaran mutu." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 14001:2015." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SML telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau SML untuk memastikan bahwa SML masih relevan dan efektif." },
];
export const SistemManajemenLingkungan = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 14001:2015", subtitle: "Sistem Manajemen Lingkungan", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 14001:2015"
      intro="ISO 14001:2015 adalah standar internasional untuk Sistem Manajemen Lingkungan (SML). Standar ini membantu organisasi dalam mengelola dampak lingkungannya dan meningkatkan kinerja lingkungannya."
      sections={[
        { id: "prinsip", title: "Prinsip Utama ISO 14001:2015", items: principles, variant: "cards" },
        { id: "manfaat", title: "Manfaat ISO 14001:2015", items: benefits, variant: "checklist" },
        { id: "struktur", title: "Struktur ISO 14001:2015", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 14001:2015", lead: "Proses penerapan ISO 9001:2015 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
      ]}
    />
  );
};

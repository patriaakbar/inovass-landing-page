import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const principles = [
  { title: "Pendekatan K3 Yang Proaktif", description: "Organisasi harus mengidentifikasi dan mengendalikan risiko K3, serta mengambil langkah-langkah untuk mencegah terjadinya kecelakaan dan penyakit akibat kerja." },
  { title: "Konsultasi dan Partisipasi Pekerja", description: "Organisasi harus berkonsultasi dengan pekerja dan perwakilan mereka dalam pengembangan dan implementasi SMK3." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMK3 dan memastikan bahwa SMK3 diimplementasikan dan dipelihara secara efektif." },
  { title: "Peningkatan Berkelanjutan", description: "Organisasi harus terus berusaha untuk meningkatkan kinerja K3nya." },
  { title: "Pendekatan Proses", description: "Semua orang di organisasi harus terlibat dalam SML dan memahami peran mereka dalam melindungi lingkungan." },
  { title: "Komunikasi", description: "Organisasi harus mengidentifikasi, memahami, dan mengelola proses-proses yang penting untuk mencapai hasil yang diinginkan." },
];

const benefits = [
  { title: "Mengurangi Risiko Kecelakaan dan Penyakit Akibat Kerja", description: "Organisasi dapat menciptakan tempat kerja yang lebih aman dan sehat bagi para pekerjanya." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat menghemat biaya dan meningkatkan produktivitas." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat membangun kepercayaan dan kredibilitas dengan pelanggan dan mitra." },
  { title: "Meningkatkan Motivasi dan Keterlibatan Karyawan", description: "Organisasi dapat meningkatkan moral dan produktivitas karyawan." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar K3." },
  { title: "Meningkatkan Peluang Untuk Mendapatkan Tender", description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain." },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMK3." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMK3 dan memastikan bahwa SMK3 diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SMK3, termasuk menetapkan tujuan K3 dan sasaran K3." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SMK3, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SMK3." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SMK3 dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara SMK3 yang ada dengan persyaratan ISO 45001:2018." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 45001:2018, termasuk menetapkan timeline dan sumber daya." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 45001:2018." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SMK3 telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau SMK3 untuk memastikan bahwa SMK3 masih relevan dan efektif." },
];

const notes = ["Penerapan ISO 45001:2018 membutuhkan komitmen dan sumber daya dari seluruh organisasi.", "Konsultan ISO 45001:2018 dapat membantu organisasi dalam menerapkan dan memelihara SMK3."];
export const SistemManajemenKeselamatanKesehatanKerja = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 45001:2018", subtitle: "Sistem Manajemen Keselamatan dan Kesehatan Kerja", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 45001:2018"
      intro="ISO 45001:2018 adalah standar internasional untuk Sistem Manajemen Keselamatan dan Kesehatan Kerja (SMK3). Standar ini membantu organisasi dalam mengelola risiko K3 dan meningkatkan kinerja K3nya."
      sections={[
        { id: "prinsip", title: "Prinsip utama ISO 45001:2018", items: principles, variant: "cards" },
        { id: "manfaat", title: "Manfaat ISO 45001:2018", items: benefits, variant: "checklist" },
        { id: "struktur", title: "Struktur ISO 45001:2018", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 45001:2018", lead: "Proses penerapan ISO 45001:2018 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
        { id: "catatan", title: "Catatan", items: notes, variant: "checklist" },
      ]}
    />
  );
};

import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const principles = [
  { title: "Pendekatan Keamanan Informasi Yang Komprehensif", description: "Organisasi harus menerapkan kontrol keamanan informasi yang komprehensif untuk melindungi semua aset informasi mereka." },
  { title: "Pendekatan Berbasis Risiko", description: "Organisasi harus mengidentifikasi, menilai, dan mengendalikan risiko keamanan informasi mereka." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMK3 dan memastikan bahwa SMKI diimplementasikan dan dipelihara secara efektif." },
  { title: "Peningkatan Berkelanjutan", description: "Organisasi harus terus berusaha untuk meningkatkan SMKI mereka." },
  { title: "Pendekatan Proses", description: "Organisasi harus mengidentifikasi, memahami, dan mengelola proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Komitmen dan Kepemimpinan", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMKI dan memastikan bahwa SMKI diimplementasikan dan dipelihara secara efektif." },
];

const benefits = [
  { title: "Meningkatkan Keamanan Informasi", description: "Organisasi dapat melindungi aset informasi mereka dari berbagai ancaman, seperti kebocoran data, malware, dan serangan siber." },
  { title: "Meningkatkan Kepercayaan dan Kredibilitas", description: "Organisasi dapat membangun kepercayaan dan kredibilitas dengan pelanggan, mitra, dan pemangku kepentingan lainnya." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat menghemat biaya dan meningkatkan produktivitas." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat menunjukkan komitmen mereka terhadap keamanan informasi dan privasi data." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar keamanan informasi." },
  { title: "Meningkatkan Peluang Untuk Mendapatkan Tender", description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain." },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMKI." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMKI dan memastikan bahwa SMKI diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SMKI, termasuk menetapkan tujuan keamanan informasi dan sasaran keamanan informasi." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SMKI, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SMKI." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SMKI dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara SMKI yang ada dengan persyaratan ISO 27001:2022." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 27001:2022, termasuk menetapkan timeline dan sumber daya." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 27001:2022." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SMKI telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau SMKI untuk memastikan bahwa SMKI masih relevan dan efektif." },
];

const notes = ["Penerapan ISO 27001:2022 membutuhkan komitmen dan sumber daya dari seluruh organisasi.", "Konsultan ISO 27001:2022 dapat membantu organisasi dalam menerapkan dan memelihara SMKI."];
export const SistemManajemenKeamananInformasi = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 27001:2022", subtitle: "Sistem Manajemen Keamanan Informasi (SMKI)", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 27001:2022"
      intro="ISO 27001:2022 adalah standar internasional untuk Sistem Manajemen Keamanan Informasi (SMKI). Standar ini membantu organisasi dalam mengelola risiko keamanan informasi dan meningkatkan postur keamanan informasi mereka."
      sections={[
        { id: "prinsip", title: "Prinsip utama ISO 27001:2022", items: principles, variant: "cards" },
        { id: "manfaat", title: "Manfaat ISO 27001:2022", items: benefits, variant: "checklist" },
        { id: "struktur", title: "Struktur ISO 27001:2022", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 27001:2022", lead: "Proses penerapan ISO 27001:2022 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
        { id: "catatan", title: "Catatan", items: notes, variant: "checklist" },
      ]}
    />
  );
};

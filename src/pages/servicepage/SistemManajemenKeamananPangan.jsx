import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = [
  { title: "Meningkatkan Keamanan Pangan", description: "Organisasi dapat meningkatkan keamanan produk pangan dan melindungi konsumen dari bahaya yang terkait dengan makanan." },
  { title: "Meningkatkan Kepercayaan dan Reputasi", description: "Organisasi dapat menunjukkan komitmennya terhadap keamanan pangan dan membangun kepercayaan dengan pelanggan, mitra, dan pemangku kepentingan lainnya." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat meningkatkan efisiensi dan efektivitas operasi dengan menerapkan kontrol keamanan pangan yang komprehensif." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat menunjukkan komitmennya terhadap praktik bisnis yang aman dan bertanggung jawab." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar keamanan pangan." },
  { title: "Meningkatkan Peluang Untuk Mendapatkan Tender", description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain." },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMKP." },
  { title: "Kepemimpinan dan Komitmen", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap SMKP dan memastikan bahwa SMKP diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SMKP, termasuk menetapkan tujuan keamanan pangan dan sasaran keamanan pangan." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SMKP, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SMKP." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SMKP dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara SMKP yang ada dengan persyaratan ISO 22000:2018." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 22000:2018, termasuk menetapkan timeline dan sumber daya." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 22000:2018." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SMKP telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau SMKP untuk memastikan bahwa SMKP masih relevan dan efektif." },
  { title: "Sertifikasi", description: "Organisasi mengajukan sertifikasi ISO 22000:2018 pada Lembaga Sertifikasi SMKP." },
];

export const SistemManajemenKeamananPangan = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 22000:2018", subtitle: "Sistem Manajemen Keamanan Pangan", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 22000:2018"
      intro="ISO 22000:2018 adalah standar internasional untuk Sistem Manajemen Keamanan Pangan (SMKP). Standar ini membantu organisasi dalam memastikan keamanan pangan di seluruh rantai pasokan makanan."
      sections={[
        { id: "manfaat", title: "Manfaat ISO 22000:2018", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 22000:2018", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 22000:2018", lead: "Proses penerapan ISO 22000:2018 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
      ]}
    />
  );
};

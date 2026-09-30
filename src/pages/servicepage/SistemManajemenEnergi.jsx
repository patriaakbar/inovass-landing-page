import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = [
  { title: "Meningkatkan Efisiensi Energi", description: "Organisasi dapat meningkatkan efisiensi energi dengan menerapkan kontrol yang sistematis dan terukur." },
  { title: "Mengurangi Konsumsi Energi", description: "Organisasi dapat mengurangi konsumsi energi dan emisi gas rumah kaca, yang dapat membantu organisasi dalam mencapai target keberlanjutannya." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat menunjukkan komitmennya terhadap efisiensi energi dan meningkatkan daya saingnya di pasar global." },
  { title: "Meningkatkan Kepercayaan dan Reputasi", description: "Organisasi dapat membangun kepercayaan dan reputasi dengan pelanggan, mitra, dan pemangku kepentingan lainnya." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar manajemen energi." },
  {
    title: "Meningkatkan Peluang Untuk Mendapatkan Pendanaan",
    description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan organisasi lain dengan menunjukkan komitmennya terhadap efisiensi energi.",
  },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMEn." },
  { title: "Kepemimpinan dan Komitmen", description: "Pimpinan organisasi harus menunjukkan komitmen terhadap SMEn dan memastikan bahwa SMEn diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan SMEn, termasuk menetapkan tujuan energi dan sasaran energi." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk SMEn, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja SMEn." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan SMEn dan efektivitasnya." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Organisasi harus mengidentifikasi kesenjangan antara SMEn yang ada dengan persyaratan ISO 50001:2018.",
  },
  {
    title: "Perencanaan",
    description: "Organisasi harus merencanakan implementasi ISO 50001:2018, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Organisasi harus menerapkan persyaratan ISO 50001:2018.",
  },
  {
    title: "Audit Internal",
    description: "Organisasi harus melakukan audit internal untuk memastikan bahwa SMEn telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen organisasi harus meninjau SMEn untuk memastikan bahwa SMEn masih relevan dan efektif.",
  },
  {
    title: "Sertifikasi",
    description: "Organisasi dapat mengajukan sertifikasi SMEn ISO 50001 : 2018 ke Lembaga Sertifikasi SMEn untuk dilakukan sertifikasi.",
  },
];

export const SistemManajemenEnergi = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 50001:2018", subtitle: "Sistem Manajemen Energi", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 50001:2018"
      intro="ISO 50001:2018 adalah standar internasional untuk Sistem Manajemen Energi (SMEn). Standar ini membantu organisasi dalam mengelola energi secara efisien dan berkelanjutan, serta mengurangi konsumsi energi dan emisi gas rumah kaca."
      sections={[
        { id: "manfaat", title: "Manfaat ISO 50001:2018", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 50001:2018", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 50001:2018",
          lead: [
            "Organisasi untuk menerapkan ISO 50001:2018 untuk pertama kalinya harus mendapat bimbingan oleh konsultan, mengingat penerapan SMEn memerlukan kompetensi khusus bidang manajemen energi.",
            "Proses Penerapan ISO 50001:2018 Biasanya Terdiri Dari Beberapa Langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

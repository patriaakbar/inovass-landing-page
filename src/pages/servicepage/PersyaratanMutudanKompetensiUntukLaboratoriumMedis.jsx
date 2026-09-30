import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kualitas hasil pemeriksaan laboratorium medis.",
  "Meningkatkan harmonisasi persyaratan untuk laboratorium medis di seluruh dunia.",
  "Meningkatkan kepercayaan terhadap hasil pemeriksaan laboratorium medis.",
  "Meningkatkan efisiensi dan efektivitas operasi laboratorium medis.",
  "Memenuhi persyaratan hukum dan peraturan.",
];

const benefits = [
  {
    title: "Meningkatkan Kredibilitas dan Reputasi Laboratorium",
    description: "Laboratorium yang menerapkan ISO 15189:2022 menunjukkan kepada pasien, dokter, dan pemangku kepentingan lainnya bahwa mereka berkomitmen untuk menghasilkan hasil pemeriksaan yang akurat dan andal.",
  },
  { title: "Meningkatkan Kepercayaan Pasien dan Dokter", description: "Hasil pemeriksaan dari laboratorium yang menerapkan ISO 15189:2022 lebih terpercaya dan dapat diterima secara global." },
  { title: "Meningkatkan Efisiensi dan Efektivitas Operasi Laboratorium", description: "Penerapan ISO 15189:2022 dapat membantu laboratorium dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi Persyaratan Hukum dan Peraturan", description: "Laboratorium yang menerapkan ISO 15189:2022 lebih mudah dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan Daya Saing di Pasar Global", description: "Laboratorium yang menerapkan ISO 15189:2022 lebih memiliki daya saing di pasar global." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Menetapkan persyaratan umum untuk manajemen laboratorium, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Menetapkan persyaratan untuk sistem manajemen laboratorium, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Menetapkan persyaratan teknis untuk pemeriksaan laboratorium, termasuk metode pemeriksaan, peralatan, dan kalibrasi." },
  { title: "Persyaratan Pra-Analitik", description: "Menetapkan persyaratan untuk tahap pra-analitik, termasuk pengambilan sampel, penyimpanan sampel, dan transportasi sampel." },
  { title: "Persyaratan Analitik", description: "Menetapkan persyaratan untuk tahap analitik, termasuk pelaksanaan pemeriksaan dan kontrol kualitas." },
  { title: "Persyaratan Pasca-Analitik", description: "Menetapkan persyaratan untuk tahap pasca-analitik, termasuk validasi hasil pemeriksaan, pelaporan hasil pemeriksaan, dan penyimpanan data." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Laboratorium harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 15189:2022.",
  },
  {
    title: "Perencanaan",
    description: "Laboratorium harus merencanakan implementasi ISO 15189:2022, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Laboratorium harus menerapkan persyaratan ISO 15189:2022.",
  },
  {
    title: "Audit Internal",
    description: "Laboratorium harus melakukan audit internal untuk memastikan bahwa ISO 15189:2022 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen laboratorium harus meninjau ISO 15189:2022 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Akreditasi",
    description: "Laboratorium medis dapat mengajukan akreditasi ke Komite Akreditasi Nasional (KAN).",
  },
];

export const PersyaratanMutudanKompetensiUntukLaboratoriumMedis = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "ISO 15189:2022", subtitle: "Persyaratan Mutu dan Kompetensi untuk Laboratorium Medis", crumbs: ["Layanan", "Akreditasi Organisasi"] }}
      heading="ISO 15189:2022"
      intro="ISO 15189:2022 adalah standar internasional terbaru yang menetapkan persyaratan mutu dan kompetensi untuk laboratorium medis. Standar ini menggantikan ISO 15189:2012 dan memberikan panduan lebih komprehensif untuk memastikan bahwa laboratorium medis memiliki kompetensi yang diperlukan untuk menghasilkan hasil pemeriksaan yang akurat dan andal."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 15189:2022", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat Penerapan ISO 15189:2022", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 15189:2022", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 15189:2022",
          lead: [
            "Laboratorium medis dapat memilih untuk menerapkan ISO 15189:2022 secara mandiri atau dengan bantuan konsultan.",
            "Proses penerapan ISO 15189:2022 biasanya terdiri dari beberapa langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

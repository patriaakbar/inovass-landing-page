import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kepercayaan terhadap hasil pengujian dan kalibrasi yang dikeluarkan oleh laboratorium.",
  "Meningkatkan harmonisasi persyaratan untuk kemahiran pengujian dan kalibrasi laboratorium di seluruh dunia.",
  "Mendorong perdagangan internasional dengan memastikan bahwa hasil pengujian dan kalibrasi diterima secara global.",
  "Meningkatkan kualitas pengujian dan kalibrasi.",
  "Meningkatkan efisiensi dan efektivitas operasi laboratorium.",
];

const benefits = [
  {
    title: "Meningkatkan Kredibilitas dan Reputasi Laboratorium",
    description: "Laboratorium yang menerapkan ISO 17043:2023 menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa mereka berkomitmen untuk menghasilkan hasil pengujian dan kalibrasi yang akurat dan andal.",
  },
  { title: "Meningkatkan Kepercayaan Pelanggan dan Mitra", description: "Hasil pengujian dan kalibrasi dari laboratorium yang menerapkan ISO 17043:2023 lebih terpercaya dan dapat diterima secara global." },
  { title: "Meningkatkan Efisiensi dan Efektivitas Operasi Laboratorium", description: "Penerapan ISO 17043:2023 dapat membantu laboratorium dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi Persyaratan Hukum dan Peraturan", description: "Laboratorium yang menerapkan ISO 17043:2023 lebih mudah dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan Daya Saing di Pasar Global", description: "Laboratorium yang menerapkan ISO 17043:2023 lebih memiliki daya saing di pasar global." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Menetapkan persyaratan umum untuk manajemen laboratorium, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Menetapkan persyaratan untuk sistem manajemen laboratorium, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Menetapkan persyaratan teknis untuk pengujian dan kalibrasi, termasuk metode pengujian, peralatan, dan kalibrasi." },
  { title: "Persyaratan Kemahiran", description: "Menetapkan persyaratan untuk demonstrasi kemahiran laboratorium, termasuk partisipasi dalam program proficiency testing (PTP) dan penggunaan material referensi bersertifikat (CRM)." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Laboratorium harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 17043:2023.",
  },
  {
    title: "Perencanaan",
    description: "Laboratorium harus merencanakan implementasi ISO 17043:2023, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Laboratorium harus menerapkan persyaratan ISO 17043:2023.",
  },
  {
    title: "Audit Internal",
    description: "Laboratorium harus melakukan audit internal untuk memastikan bahwa ISO 17043:2023 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen laboratorium harus meninjau ISO 17043:2023 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Akreditasi",
    description: "Laboratorium dapat mengajukan akreditasi ke lembaga akreditasi yang terakreditasi, dalam hal ini ke KAN (Komite Akreditasi Nasional).",
  },
];

export const PenilaianKesesuaianPersyaratanUmumUntukKemahiranPengujiandanKalibrasiLaboratorium = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "ISO 17043:2023", subtitle: "Penilaian Kesesuaian - Persyaratan Umum untuk Kemahiran Pengujian dan Kalibrasi Laboratorium", crumbs: ["Layanan", "Akreditasi Organisasi"] }}
      heading="ISO 17043:2023"
      intro="ISO 17043:2023 adalah standar internasional terbaru yang menetapkan persyaratan umum untuk kemahiran pengujian dan kalibrasi laboratorium. Standar ini menggantikan ISO 17043:2010 dan memberikan panduan lebih komprehensif untuk memastikan bahwa laboratorium memiliki kompetensi yang diperlukan untuk menghasilkan hasil pengujian dan kalibrasi yang akurat dan andal."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 17043:2023", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat Penerapan ISO 17043:2023", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 17043:2023", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 17043:2023",
          lead: [
            "Laboratorium dapat memilih untuk menerapkan ISO 17043:2023 secara mandiri atau dengan bantuan konsultan.",
            "Proses penerapan ISO 17043:2023 biasanya terdiri dari beberapa langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

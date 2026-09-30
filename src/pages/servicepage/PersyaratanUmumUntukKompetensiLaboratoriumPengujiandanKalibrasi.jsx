import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kepercayaan terhadap hasil pengujian dan kalibrasi yang dikeluarkan oleh laboratorium.",
  "Meningkatkan harmonisasi persyaratan untuk laboratorium pengujian dan kalibrasi di seluruh dunia.",
  "Mendorong perdagangan internasional dengan memastikan bahwa hasil pengujian dan kalibrasi diterima secara global.",
  "Meningkatkan kualitas pengujian dan kalibrasi.",
  "Meningkatkan efisiensi dan efektivitas operasi laboratorium.",
];

const benefits = [
  {
    title: "Meningkatkan Kredibilitas dan Reputasi Laboratorium",
    description: "Laboratorium yang terakreditasi ISO 17025:2017 menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa mereka berkomitmen untuk melakukan pengujian dan kalibrasi secara akurat dan andal.",
  },
  { title: "Meningkatkan Kepercayaan Pelanggan dan Mitra", description: "Hasil pengujian dan kalibrasi dari laboratorium terakreditasi ISO 17025:2017 lebih terpercaya dan dapat diterima secara global." },
  { title: "Meningkatkan Efisiensi dan Efektivitas Operasi Laboratorium", description: "Penerapan ISO 17025:2017 dapat membantu laboratorium dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi Persyaratan Hukum dan Peraturan", description: "Laboratorium terakreditasi ISO 17025:2017 lebih mudah dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan Daya Saing di Pasar Global", description: "Laboratorium terakreditasi ISO 17025:2017 lebih memiliki daya saing di pasar global." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Bagian ini menetapkan persyaratan umum untuk manajemen laboratorium, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Bagian ini menetapkan persyaratan untuk sistem manajemen laboratorium, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Bagian ini menetapkan persyaratan teknis untuk pengujian dan kalibrasi, termasuk metode pengujian, peralatan, dan kalibrasi." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Laboratorium harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 17025:2017.",
  },
  {
    title: "Perencanaan",
    description: "Laboratorium harus merencanakan implementasi ISO 17025:2017, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Laboratorium harus menerapkan persyaratan ISO 17025:2017.",
  },
  {
    title: "Audit Internal",
    description: "Laboratorium harus melakukan audit internal untuk memastikan bahwa ISO 17025:2017 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen laboratorium harus meninjau ISO 17025:2017 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Akreditasi",
    description: "Laboratorium dapat mengajukan akreditasi ke lembaga akreditasi yang terakreditasi  dalam hal ini ke KAN (Komite Akreditasi Nasional)",
  },
];

export const PersyaratanUmumUntukKompetensiLaboratoriumPengujiandanKalibrasi = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "ISO 17025:2017", subtitle: "Persyaratan Umum untuk Kompetensi Laboratorium Pengujian dan Kalibrasi", crumbs: ["Layanan", "Akreditasi Organisasi"] }}
      heading="ISO 17025:2017"
      intro="ISO 17025:2017 adalah standar internasional untuk Persyaratan Umum untuk Kompetensi Laboratorium Pengujian dan Kalibrasi. Standar ini menetapkan persyaratan yang harus dipenuhi oleh laboratorium pengujian dan kalibrasi untuk menunjukkan bahwa mereka kompeten untuk melakukan pengujian dan kalibrasi secara akurat dan andal."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 17025:2017", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat ISO 17025:2017", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 17025:2017", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 17025:2017",
          lead: [
            "Laboratorium untuk menerapkan ISO 17025:2017 dengan bantuan konsultan, mengingat untuk tahapan awal membangun system diperlukan pendampingan.",
            "Proses penerapan ISO 17025:2017 biasanya terdiri dari beberapa langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

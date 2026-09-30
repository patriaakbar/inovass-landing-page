import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kepercayaan terhadap hasil inspeksi yang dikeluarkan oleh lembaga inspeksi.",
  "Meningkatkan harmonisasi persyaratan untuk lembaga inspeksi di seluruh dunia.",
  "Mendorong perdagangan internasional dengan memastikan bahwa hasil inspeksi diterima secara global.",
  "Meningkatkan kualitas inspeksi.",
  "Meningkatkan efisiensi dan efektivitas operasi lembaga inspeksi.",
];

const benefits = [
  {
    title: "Meningkatkan Kredibilitas dan Reputasi Lembaga Inspeksi",
    description: "Lembaga inspeksi yang terakreditasi ISO 17020:2012 menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa mereka berkomitmen untuk melakukan inspeksi secara akurat dan andal.",
  },
  { title: "Meningkatkan Kepercayaan Pelanggan dan Mitra", description: "Hasil inspeksi dari lembaga inspeksi terakreditasi ISO 17020:2012 lebih terpercaya dan dapat diterima secara global." },
  { title: "Meningkatkan Efisiensi dan Efektivitas Operasi Lembaga Inspeksi", description: "Penerapan ISO 17020:2012 dapat membantu lembaga inspeksi dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi Persyaratan Hukum dan Peraturan", description: "Lembaga inspeksi terakreditasi ISO 17020:2012 lebih mudah dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan Daya Saing di Pasar Global", description: "Lembaga inspeksi terakreditasi ISO 17020:2012 lebih memiliki daya saing di pasar global." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Bagian ini menetapkan persyaratan umum untuk manajemen lembaga inspeksi, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Bagian ini menetapkan persyaratan untuk sistem manajemen lembaga inspeksi, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Bagian ini menetapkan persyaratan teknis untuk inspeksi, termasuk metode inspeksi, peralatan, dan kalibrasi." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Lembaga inspeksi harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 17020:2012.",
  },
  {
    title: "Perencanaan",
    description: "Lembaga inspeksi harus merencanakan implementasi ISO 17020:2012, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Lembaga inspeksi harus menerapkan persyaratan ISO 17020:2012.",
  },
  {
    title: "Audit Internal",
    description: "Lembaga inspeksi harus melakukan audit internal untuk memastikan bahwa ISO 17020:2012 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen lembaga inspeksi harus meninjau ISO 17020:2012 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Akreditasi",
    description: "Lembaga inspeksi dapat mengajukan akreditasi ke lembaga akreditasi yang terakreditasi, dalam hal ini KAN (Komite Akreditasi Nasional).",
  },
];

export const PersyaratanUmumUntukPengoperasianBebagaiJenisLembagaInspeksi = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "ISO 17020:2012", subtitle: "Persyaratan Umum untuk Pengoperasian Berbagai Jenis Lembaga Inspeksi", crumbs: ["Layanan", "Akreditasi Organisasi"] }}
      heading="ISO 17020:2012"
      intro="ISO 17020:2012 adalah standar internasional yang menetapkan persyaratan umum untuk pengoperasian berbagai jenis lembaga inspeksi. Standar ini membantu lembaga inspeksi untuk menunjukkan bahwa mereka kompeten untuk melakukan inspeksi secara akurat dan andal."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 17020:2012", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat ISO 17020:2012", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 17020:2012", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 17020:2012",
          lead: [
            "Lembaga inspeksi untuk menerapkan pertama kali ISO 17020:2012 dibutuhkan bantuan konsultan, mengingat penyusunan system Inspeksi diperlukan pendampingan dari Konsultan.",
            "Proses penerapan ISO 17020:2012 biasanya terdiri dari beberapa langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kepercayaan terhadap sertifikat personel yang dikeluarkan oleh LSP.",
  "Meningkatkan harmonisasi persyaratan untuk LSP di seluruh dunia.",
  "Mendorong perdagangan internasional dengan memastikan bahwa sertifikat personel diterima secara global.",
  "Meningkatkan kualitas sertifikasi personel.",
  "Meningkatkan efisiensi dan efektivitas operasi LSP.",
];

const benefits = [
  {
    title: "Meningkatkan Kredibilitas dan Reputasi LSP",
    description: "LSP yang terakreditasi ISO 17024:2012 menunjukkan kepada pelanggan, mitra, dan pemangku kepentingan lainnya bahwa mereka berkomitmen untuk melakukan sertifikasi personel secara akurat dan andal.",
  },
  { title: "Meningkatkan Kepercayaan Pelanggan dan Mitra", description: "Sertifikat personel dari LSP terakreditasi ISO 17024:2012 lebih terpercaya dan dapat diterima secara global." },
  { title: "Meningkatkan Efisiensi dan Efektivitas Operasi LSP", description: "Penerapan ISO 17024:2012 dapat membantu LSP dalam meningkatkan efisiensi dan efektivitas operasinya." },
  { title: "Memenuhi Persyaratan Hukum dan Peraturan", description: "LSP terakreditasi ISO 17024:2012 lebih mudah dalam memenuhi persyaratan hukum dan peraturan yang berlaku." },
  { title: "Meningkatkan Daya Saing di Pasar Global", description: "LSP terakreditasi ISO 17024:2012 lebih memiliki daya saing di pasar global." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Bagian ini menetapkan persyaratan umum untuk manajemen LSP, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Bagian ini menetapkan persyaratan untuk sistem manajemen LSP, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Bagian ini menetapkan persyaratan teknis untuk sertifikasi personel, termasuk metode sertifikasi, peralatan, dan kalibrasi." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "LSP harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 17024:2012.",
  },
  {
    title: "Perencanaan",
    description: "LSP harus merencanakan implementasi ISO 17024:2012, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "LSP harus menerapkan persyaratan ISO 17024:2012.",
  },
  {
    title: "Audit Internal",
    description: "LSP harus melakukan audit internal untuk memastikan bahwa ISO 17024:2012 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen LSP harus meninjau ISO 17024:2012 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Akreditasi",
    description: "LSP dapat mengajukan akreditasi ke Komite Akreditasi Nasional (KAN).",
  },
];

export const PenilaianKesesuaianPersyaratanUmumUntukBadanSertifikasiPersonel = () => {
  return (
    <ServicePageTemplate
      category="akreditasi"
      banner={{ title: "ISO 17024:2012", subtitle: "Penilaian Kesesuaian - Persyaratan Umum untuk Badan Sertifikasi Personel", crumbs: ["Layanan", "Akreditasi Organisasi"] }}
      heading="ISO 17024:2012"
      intro="ISO 17024:2012 adalah standar internasional yang menetapkan persyaratan umum untuk badan sertifikasi personel (LSP). Standar ini membantu LSP untuk menunjukkan bahwa mereka kompeten untuk melakukan sertifikasi personel secara akurat dan andal."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 17024:2012", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat ISO 17024:2012", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 17024:2012", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 17024:2012",
          lead: [
            "LSP dapat memilih untuk menerapkan ISO 17024:2012 secara mandiri atau dengan bantuan konsultan.",
            "Proses penerapan ISO 17024:2012 biasanya terdiri dari beberapa langkah:",
          ],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

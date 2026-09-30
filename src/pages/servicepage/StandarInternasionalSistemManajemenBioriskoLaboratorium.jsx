import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan keselamatan dan kesehatan staf laboratorium dan masyarakat sekitar.",
  "Melindungi lingkungan dari kontaminasi bahan biologis berbahaya.",
  "Meningkatkan kualitas dan keandalan hasil pengujian laboratorium.",
  "Meningkatkan kepercayaan pelanggan dan mitra terhadap laboratorium.",
  "Memenuhi persyaratan hukum dan peraturan.",
];

const benefits = [
  { title: "Meningkatkan Keamanan dan Kesehatan", description: "Penerapan SMBL dapat membantu laboratorium dalam mengurangi risiko kecelakaan dan penyakit akibat kerja yang terkait dengan bahan biologis berbahaya." },
  { title: "Melindungi Lingkungan", description: "SMBL membantu laboratorium dalam mengelola dan membuang limbah biologis dengan cara yang aman dan ramah lingkungan." },
  { title: "Meningkatkan Kualitas dan Keandalan", description: "SMBL membantu laboratorium dalam meningkatkan kualitas dan keandalan hasil pengujian dengan memastikan bahwa semua proses dilakukan dengan benar dan terstandarisasi." },
  {
    title: "Meningkatkan Kepercayaan",
    description: "Penerapan SMBL dapat meningkatkan kepercayaan pelanggan dan mitra terhadap laboratorium karena menunjukkan bahwa laboratorium berkomitmen untuk melakukan pengujian dengan aman dan bertanggung jawab.",
  },
  { title: "Memenuhi Persyaratan", description: "SMBL membantu laboratorium dalam memenuhi persyaratan hukum dan peraturan yang terkait dengan keselamatan dan kesehatan kerja, perlindungan lingkungan, dan kualitas pengujian." },
];

const structures = [
  { title: "Persyaratan Umum", description: "Menetapkan persyaratan umum untuk manajemen laboratorium, termasuk struktur organisasi, tanggung jawab, dan kompetensi staf." },
  { title: "Persyaratan Sistem Manajemen", description: "Menetapkan persyaratan untuk sistem manajemen laboratorium, termasuk kebijakan mutu, manual mutu, prosedur, dan instruksi kerja." },
  { title: "Persyaratan Teknis", description: "Menetapkan persyaratan teknis untuk pengujian dan kalibrasi, termasuk metode pengujian, peralatan, dan kalibrasi." },
  { title: "Persyaratan Manajemen Risiko", description: "Menetapkan persyaratan untuk identifikasi, penilaian, pengendalian, dan pemantauan risiko yang terkait dengan bahan biologis berbahaya." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Laboratorium harus mengidentifikasi kesenjangan antara sistem manajemen yang ada dengan persyaratan ISO 35001:2019.",
  },
  {
    title: "Perencanaan",
    description: "Laboratorium harus merencanakan implementasi ISO 35001:2019, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Laboratorium harus menerapkan persyaratan ISO 35001:2019.",
  },
  {
    title: "Audit Internal",
    description: "Laboratorium harus melakukan audit internal untuk memastikan bahwa ISO 35001:2019 telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen laboratorium harus meninjau ISO 35001:2019 untuk memastikan bahwa masih relevan dan efektif.",
  },
  {
    title: "Sertifikasi",
    description: "Organisasi dapat mengajukan sertifikasi SMEn ISO 50001 : 2018 ke Lembaga Sertifikasi SMEn untuk dilakukan sertifikasi.",
  },
  {
    title: "Akreditasi",
    description: "Laboratorium dapat mengajukan akreditasi ke Komite Akreditasi Nasional (KAN).",
  },
];

export const StandarInternasionalSistemManajemenBioriskoLaboratorium = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 35001:2019", subtitle: "Standar Internasional Sistem Manajemen Biorisiko Laboratorium (SMBL)", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 35001:2019"
      intro="ISO 35001:2019 adalah standar internasional yang menetapkan persyaratan untuk Sistem Manajemen Biorisiko Laboratorium (SMBL). Standar ini membantu laboratorium dalam mengidentifikasi, menilai, mengendalikan, dan memantau risiko yang terkait dengan bahan biologis berbahaya."
      sections={[
        { id: "tujuan", title: "Tujuan Penerapan ISO 35001:2019", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat ISO 35001:2019", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 35001:2019", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 35001:2019",
          lead: ["Laboratorium dapat menerapkan ISO 35001:2019 dengan bantuan konsultan yang telah berpengalaman dalam menerapkan standar SMBL ini.", "Proses penerapan ISO 35001:2019 biasanya terdiri dari beberapa langkah:"],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

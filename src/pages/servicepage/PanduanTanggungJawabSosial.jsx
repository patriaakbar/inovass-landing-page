import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = [
  { title: "Meningkatkan Reputasi", description: "Organisasi dapat menunjukkan komitmennya terhadap TJSL dan membangun reputasi yang positif dengan stakeholders." },
  { title: "Meningkatkan Kepercayaan", description: "Organisasi dapat membangun kepercayaan dengan stakeholders dengan menunjukkan komitmennya terhadap operasi yang bertanggung jawab dan berkelanjutan." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat meningkatkan daya saingnya dengan menunjukkan komitmennya terhadap TJSL kepada pelanggan, mitra, dan investor." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi dapat meningkatkan efisiensi dan efektivitas operasinya dengan menerapkan praktik TJSL yang baik." },
  { title: "Meningkatkan Motivasi dan Produktivitas Karyawan", description: "Karyawan dapat lebih termotivasi dan produktif jika mereka bekerja untuk organisasi yang berkomitmen terhadap TJSL." },
  {
    title: "Meningkatkan Akses ke Pasar Baru",
    description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar TJSL.",
  },
];

const structures = [
  { title: "Pengantar", description: "Panduan ini memberikan pengantar tentang TJSL, termasuk definisi, prinsip, dan manfaatnya." },
  { title: "Memahami Tanggung Jawab Sosial", description: "Panduan ini membantu organisasi dalam memahami tanggung jawab sosialnya, termasuk konteks dan ruang lingkupnya." },
  { title: "Menerapkan Tanggung Jawab Sosial", description: "Panduan ini memberikan kerangka kerja untuk organisasi dalam menerapkan TJSL, termasuk identifikasi dan prioritas isu, tindakan, dan komunikasi." },
  { title: "Integrasi Tanggung Jawab Sosial ke Dalam Organisasi", description: "Panduan ini membantu organisasi dalam mengintegrasikan TJSL ke dalam semua aspek organisasinya, termasuk tata kelola, strategi, dan operasi." },
  { title: "Komunikasi dan Keterlibatan", description: "Panduan ini membantu organisasi dalam berkomunikasi dengan stakeholders tentang TJSL dan melibatkan mereka dalam proses pengambilan keputusan." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Organisasi harus mengidentifikasi kesenjangan antara praktik TJSL yang ada dengan persyaratan ISO 26000:2010.",
  },
  {
    title: "Perencanaan",
    description: "Organisasi harus merencanakan implementasi ISO 26000:2010, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Organisasi harus menerapkan persyaratan ISO 26000:2010",
  },
  {
    title: "Penilaian Internal",
    description: "Organisasi harus melakukan penilaian internal untuk memastikan bahwa TJSL telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen organisasi harus meninjau TJSL untuk memastikan bahwa TJSL masih relevan dan efektif.",
  },
  {
    title: "Sertifikasi",
    description: "Organisasi dapat mengajukan Sertifikasi TJSL ISO 26000 : 2010, untuk melakukan sertifikasi TJSL.",
  },
];

export const PanduanTanggungJawabSosial = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 26000:2010", subtitle: "Panduan Tanggung Jawab Sosial", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 26000:2010"
      intro="ISO 26000:2010 adalah panduan internasional untuk membantu organisasi dalam memahami dan menerapkan tanggung jawab sosial (TJSL). Panduan ini memberikan kerangka kerja untuk organisasi dalam mengidentifikasi, memprioritaskan, dan bertindak atas isu-isu TJSL."
      sections={[
        { id: "manfaat", title: "Manfaat ISO 26000:2010", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 26000:2010", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 26000:2010",
          lead: ["Organisasi dapat menerapkan ISO 26000:2010 dengan bantuan konsultan.", "Proses penerapan ISO 26000:2010 biasanya terdiri dari beberapa langkah:"],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

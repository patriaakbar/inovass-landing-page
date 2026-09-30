import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = [
  { title: "Meningkatkan Kualitas Pendidikan", description: "Organisasi pendidikan dapat meningkatkan kualitas pendidikannya dengan menerapkan kontrol yang sistematis dan terukur." },
  { title: "Meningkatkan Efisiensi dan Efektivitas", description: "Organisasi pendidikan dapat meningkatkan efisiensi dan efektivitas operasinya dengan mengoptimalkan penggunaan sumber daya." },
  { title: "Meningkatkan Daya Saing", description: "Organisasi pendidikan dapat menunjukkan komitmennya terhadap kualitas pendidikan dan meningkatkan daya saingnya di pasar global." },
  { title: "Meningkatkan Kepercayaan dan Reputasi", description: "Organisasi pendidikan dapat membangun kepercayaan dan reputasi dengan orang tua, siswa, dan pemangku kepentingan lainnya." },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi pendidikan dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar manajemen mutu pendidikan." },
  {
    title: "Meningkatkan Peluang Untuk Mendapatkan Pendanaan",
    description: "Organisasi pendidikan dapat meningkatkan peluang untuk mendapatkan pendanaan dari pemerintah dan organisasi lain dengan menunjukkan komitmennya terhadap kualitas pendidikan.",
  },
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi pendidikan harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi SMOP." },
  { title: "Kepemimpinan dan Komitmen", description: "Pimpinan organisasi pendidikan harus menunjukkan komitmen terhadap SMOP dan memastikan bahwa SMOP diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi pendidikan harus merencanakan SMOP, termasuk menetapkan tujuan mutu pendidikan dan sasaran mutu pendidikan." },
  { title: "Dukungan", description: "Organisasi pendidikan harus menyediakan sumber daya yang diperlukan untuk SMOP, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi pendidikan harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi pendidikan harus memantau, mengukur, dan menganalisis kinerja SMOP." },
  { title: "Peningkatan", description: "Organisasi pendidikan harus terus berusaha untuk meningkatkan SMOP dan efektivitasnya." },
];

const implementations = [
  {
    title: "Analisis Kesenjangan",
    description: "Organisasi pendidikan harus mengidentifikasi kesenjangan antara SMOP yang ada dengan persyaratan ISO 21001:2018.",
  },
  {
    title: "Perencanaan",
    description: "Organisasi pendidikan harus merencanakan implementasi ISO 21001:2018, termasuk menetapkan timeline dan sumber daya.",
  },
  {
    title: "Implementasi",
    description: "Organisasi pendidikan harus menerapkan persyaratan ISO 21001:2018.",
  },
  {
    title: "Audit Internal",
    description: "Organisasi pendidikan harus melakukan audit internal untuk memastikan bahwa SMOP telah diimplementasikan secara efektif.",
  },
  {
    title: "Tinjauan Manajemen",
    description: "Manajemen organisasi pendidikan harus meninjau SMOP untuk memastikan bahwa SMOP masih relevan dan efektif.",
  },
  {
    title: "Sertifikasi",
    description: "Organisasi Pendidikan/Diklat dapat mengajukan sertifikasi ISO 21001:2018 ke Lembaga Sertifikasi SMOP.",
  },
];

export const SistemManajemenOrganisasiPendidikan = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 21001:2018", subtitle: "Sistem Manajemen Organisasi Pendidikan", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 21001:2018"
      intro="ISO 21001:2018 adalah standar internasional untuk Sistem Manajemen Organisasi Pendidikan (SMOP). Standar ini membantu organisasi pendidikan dalam meningkatkan kualitas pendidikannya dan mencapai tujuannya."
      sections={[
        { id: "manfaat", title: "Manfaat ISO 21001:2018", items: benefits, variant: "cards" },
        { id: "struktur", title: "Struktur ISO 21001:2018", items: structures, variant: "list" },
        {
          id: "penerapan",
          title: "Penerapan ISO 22000:2018",
          lead: ["Organisasi Pendidikan Dapat Memilih Untuk Menerapkan ISO 21001:2018 Secara Mandiri Atau Dengan Bantuan Konsultan.", "Proses Penerapan ISO 21001:2018 Biasanya Terdiri Dari Beberapa Langkah:"],
          items: implementations,
          variant: "steps",
        },
      ]}
    />
  );
};

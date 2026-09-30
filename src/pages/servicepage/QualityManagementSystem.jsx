import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const principles = [
  { title: "Fokus pada pelanggan", description: "Organisasi harus memahami kebutuhan dan harapan pelanggan dan berusaha untuk melampauinya." },
  { title: "Kepemimpinan", description: "Pemimpin organisasi harus berkomitmen terhadap QMS dan memastikan bahwa QMS diimplementasikan dan dipelihara secara efektif." },
  { title: "Keterlibatan Orang", description: "Semua orang di organisasi harus terlibat dalam QMS dan memahami peran mereka dalam memastikan kualitas produk dan layanan." },
  { title: "Pendekatan Proses", description: "Organisasi harus mengidentifikasi, memahami, dan mengelola proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Peningkatan Berkelanjutan", description: "Organisasi harus terus berusaha untuk meningkatkan QMS dan efektivitasnya." },
  { title: "Pengambilan keputusan berdasarkan bukti", description: "Organisasi harus menggunakan data dan informasi untuk membuat keputusan yang tepat." },
];

const benefits = [
  "Pengambilan keputusan berdasarkan bukti",
  "Mempermudah akses ke pasar baru",
  "Meningkatkan kepuasan pelanggan",
  "Meningkatkan peluang untuk mendapatkan tender",
  "Meningkatkan daya saing",
  "Meningkatkan kualitas produk dan layanan",
  "Membangun kepercayaan dan kredibilitas",
  "Meminimalisir risiko dan kesalahan",
  "Meningkatkan motivasi dan keterlibatan karyawan",
  "Meningkatkan budaya mutu",
];

const structures = [
  { title: "Konteks Organisasi", description: "Organisasi harus memahami konteksnya, termasuk faktor internal dan eksternal yang dapat memengaruhi QMS." },
  { title: "Kepemimpinan", description: "Pemimpin organisasi harus menunjukkan komitmen terhadap QMS dan memastikan bahwa QMS diimplementasikan dan dipelihara secara efektif." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan QMS, termasuk menetapkan tujuan mutu dan sasaran mutu." },
  { title: "Dukungan", description: "Organisasi harus menyediakan sumber daya yang diperlukan untuk QMS, termasuk infrastruktur, sumber daya manusia, dan kompetensi." },
  { title: "Operasi", description: "Organisasi harus mengoperasikan dan mengendalikan proses-proses yang penting untuk mencapai hasil yang diinginkan." },
  { title: "Penilaian Kinerja", description: "Organisasi harus memantau, mengukur, dan menganalisis kinerja QMS." },
  { title: "Peningkatan", description: "Organisasi harus terus berusaha untuk meningkatkan QMS dan efektivitasnya." },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara QMS yang ada dengan persyaratan ISO 9001:2015." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 9001:2015, termasuk menetapkan timeline dan sumber daya." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan QMS, termasuk menetapkan tujuan mutu dan sasaran mutu." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 9001:2015." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa QMS telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau QMS untuk memastikan bahwa QMS masih relevan dan efektif." },
];
export const QualityManagementSystem = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 9001:2015", subtitle: "Quality Management System", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 9001:2015"
      intro="ISO 9001:2015 adalah Sistem Manajemen Mutu untuk organisasi (Perusahaan, Institusi, Lembaga Pendidikan, Proyek dan Tambang). ISO 9001:2015 adalah standar internasional untuk sistem manajemen mutu (QMS). Standar ini membantu organisasi dalam memenuhi kebutuhan pelanggan dan meningkatkan kepuasan mereka."
      sections={[
        { id: "prinsip", title: "Prinsip Utama ISO 9001:2015", items: principles, variant: "cards" },
        { id: "manfaat", title: "Manfaat ISO 9001:2015", items: benefits, variant: "checklist" },
        { id: "struktur", title: "Struktur ISO 9001:2015", items: structures, variant: "list" },
        { id: "penerapan", title: "Penerapan ISO 9001:2015", lead: "Proses penerapan ISO 9001:2015 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
      ]}
    />
  );
};

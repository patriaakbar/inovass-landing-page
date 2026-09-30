import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const purposes = [
  "Meningkatkan kredibilitas dan daya saing individu di pasar kerja.",
  "Memberikan bukti nyata kepada Masyarakat/Organisasi tentang kemampuan dan keterampilan individu.",
  "Meningkatkan kepercayaan diri dan profesionalisme individu.",
  "Meningkatkan kualitas dan produktivitas kerja.",
  "Memenuhi persyaratan hukum dan peraturan tertentu.",
];

const benefits = [
  {
    title: "Meningkatkan Peluang Kerja",
    description: "Memiliki sertifikat kompetensi dapat meningkatkan peluang kerja bagi individu, karena menunjukkan kepada работодателям bahwa mereka memiliki kemampuan dan keterampilan yang dibutuhkan untuk pekerjaan tersebut.",
  },
  { title: "Meningkatkan Gaji", description: "Individu dengan sertifikat kompetensi umumnya memiliki gaji yang lebih tinggi daripada yang tidak memiliki sertifikat." },
  { title: "Meningkatkan Peluang Promosi", description: "Sertifikat kompetensi dapat membantu individu dalam mendapatkan promosi di tempat kerja." },
  { title: "Meningkatkan Kesempatan Untuk Pengembangan Profesional", description: "Sertifikat kompetensi dapat membuka peluang bagi individu untuk mengikuti pelatihan dan pengembangan profesional lebih lanjut." },
];

const types = [
  {
    title: "Sertifikasi Berdasarkan Skema",
    description:
      "Skema sertifikasi adalah standar yang mendefinisikan kompetensi yang dibutuhkan untuk suatu pekerjaan tertentu. Sertifikasi berdasarkan skema biasanya diberikan oleh lembaga sertifikasi yang terakreditasi oleh Badan Nasional Sertifikasi Profesi (BNSP) atau Oleh Lembaga Akreditasi Nasional ( KAN ).",
  },
  {
    title: "Sertifikasi Berdasarkan Standar",
    description:
      "Sertifikasi berdasarkan standar mengacu pada standar kompetensi yang telah ditetapkan oleh suatu organisasi atau badan tertentu. Sertifikasi ini biasanya diberikan oleh lembaga sertifikasi yang memiliki lisensi dari organisasi atau badan tersebut.",
  },
];

const processes = [
  { title: "Pengajuan Permohonan", description: "Individu yang ingin mendapatkan sertifikasi harus mengajukan permohonan ke lembaga sertifikasi yang dipilih." },
  { title: "Pembayaran Biaya", description: "Individu harus membayar biaya sertifikasi yang telah ditetapkan oleh lembaga sertifikasi." },
  { title: "Asesmen", description: "Individu akan mengikuti proses asesmen yang meliputi tes tertulis, tes praktik, dan wawancara." },
  { title: "Penerbitan Sertifikat", description: "Jika individu dinyatakan kompeten, maka lembaga sertifikasi akan menerbitkan sertifikat kompetensi." },
];

const differents = [
  "Akreditasi dilakukan oleh lembaga independen yang imparsial, sedangkan sertifikasi dapat dilakukan oleh lembaga sertifikasi yang tidak selalu independen.",
  "Akreditasi lebih fokus pada penilaian dan pengakuan terhadap sistem manajemen organisasi, sedangkan sertifikasi lebih fokus pada penilaian dan pengakuan terhadap produk atau layanan organisasi.",
  "Akreditasi umumnya memiliki cakupan yang lebih luas daripada sertifikasi.",
  "Akreditasi hanya dapat dilakukan pada organisasi, sedangkan sertifikasi dapat dilakukan pada organisasi dan personel/perorangan",
];

export const SertifikasiKompetensiPersonel = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "Sertifikasi Kompetensi Personel", crumbs: ["Layanan"] }}
      heading="Sertifikasi Kompetensi Personel"
      intro="Sertifikasi kompetensi personel adalah sebuah pengakuan formal terhadap kemampuan dan keterampilan individu dalam suatu bidang pekerjaan tertentu. Pengakuan ini diberikan oleh lembaga yang kompeten dan terakreditasi setelah melalui proses asesmen yang objektif dan komprehensif."
      sections={[
        { id: "tujuan", title: "Tujuan Sertifikasi Kompetensi Personel", items: purposes, variant: "checklist" },
        { id: "manfaat", title: "Manfaat Sertifikasi Kompetensi Personel", items: benefits, variant: "cards" },
        { id: "jenis", title: "Jenis - Jenis Sertifikasi Kompetensi Personel", items: types, variant: "list" },
        { id: "proses", title: "Proses Sertifikasi Kompetensi Personel", items: processes, variant: "steps" },
        { id: "perbedaan", title: "Perbedaan Akreditasi dan Sertifikasi", items: differents, variant: "list" },
      ]}
    />
  );
};

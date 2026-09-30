import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const principles = [
  { title: "Nilai Terintegrasi", description: "Risiko harus diintegrasikan ke dalam proses tata kelola dan pengambilan keputusan organisasi." },
  { title: "Struktur dan Komprehensif", description: "Manajemen risiko harus terstruktur dan komprehensif, mencakup semua jenis risiko yang dihadapi organisasi." },
  { title: "Terus Menerus dan Proaktif", description: "Manajemen risiko harus dilakukan secara terus menerus dan proaktif, untuk mengidentifikasi dan mengendalikan risiko sejak dini." },
  { title: "Berdasarkan Informasi Terbaik", description: "Manajemen risiko harus didasarkan pada informasi terbaik yang tersedia, untuk memastikan bahwa keputusan yang diambil adalah tepat dan efektif." },
  { title: "Disesuaikan Dengan Organisasi", description: "Manajemen risiko harus disesuaikan dengan kebutuhan dan konteks organisasi." },
];

const benefits = [
  { title: "Meningkatkan Pengambilan Keputusan", description: "Organisasi dapat membuat keputusan yang lebih baik dan lebih terinformasi dengan memahami dan mengendalikan risikonya." },
  {
    title: "Meningkatkan Efisiensi dan Efektivitas",
    description: "Organisasi dapat meningkatkan efisiensi dan efektivitas operasi dengan mengidentifikasi dan mengendalikan risiko yang dapat menyebabkan kerugian finansial, kerusakan reputasi, atau gangguan operasional.",
  },
  { title: "Meningkatkan Daya Saing", description: "Organisasi dapat menunjukkan komitmennya terhadap manajemen risiko yang baik, yang dapat meningkatkan daya saingnya di pasar global." },
  {
    title: "Meningkatkan Kepercayaan dan Reputasi",
    description: "Organisasi dapat membangun kepercayaan dan reputasi dengan pelanggan, mitra, dan pemangku kepentingan lainnya dengan menunjukkan komitmennya terhadap manajemen risiko yang baik.",
  },
  { title: "Mempermudah Akses ke Pasar Baru", description: "Organisasi dapat memasuki pasar baru yang mensyaratkan kepatuhan terhadap standar manajemen risiko." },
  {
    title: "Meningkatkan Peluang Untuk Mendapatkan Tender",
    description: "Organisasi dapat meningkatkan peluang untuk memenangkan tender dari pemerintah dan perusahaan lain dengan menunjukkan komitmennya terhadap manajemen risiko yang baik.",
  },
];

const structures = [
  {
    title: "Prinsip-Prinsip Manajemen Risiko",
    description: "Panduan ini menguraikan lima prinsip utama manajemen risiko: nilai terintegrasi, struktur dan komprehensif, terus menerus dan proaktif, berdasarkan informasi terbaik, dan disesuaikan dengan organisasi.",
  },
  {
    title: "Kerangka Kerja Manajemen Risiko",
    description: "Panduan ini menyediakan kerangka kerja untuk mengimplementasikan manajemen risiko, yang terdiri dari:",
    items: ["Konteks organisasi", "Kepemimpinan dan komitmen", "Perencanaan", "Dukungan", "Operasi", "Penilaian kinerja", "Peningkatan"],
  },
  {
    title: "Proses Manajemen Risiko",
    description: "Panduan ini menjelaskan proses manajemen risiko, yang terdiri dari:",
    items: ["Identifikasi risiko", "Analisis risiko", "Penilaian risiko", "Pengolahan risiko", "Pemantauan dan tinjauan"],
  },
];

const implementations = [
  { title: "Analisis Kesenjangan", description: "Organisasi harus mengidentifikasi kesenjangan antara praktik manajemen risiko yang ada dengan persyaratan ISO 31000:2018." },
  { title: "Perencanaan", description: "Organisasi harus merencanakan implementasi ISO 31000:2018, termasuk menetapkan timeline dan sumber daya." },
  { title: "Implementasi", description: "Organisasi harus menerapkan persyaratan ISO 31000:2018." },
  { title: "Audit Internal", description: "Organisasi harus melakukan audit internal untuk memastikan bahwa manajemen risiko telah diimplementasikan secara efektif." },
  { title: "Tinjauan Manajemen", description: "Manajemen organisasi harus meninjau manajemen risiko untuk memastikan bahwa manajemen risiko masih relevan dan efektif." },
  { title: "Sertifikasi", description: "Organisasi dapat mengajukan sertifikasi ISO 31000 : 2018 kepada Lembaga Sertifikasi Manajemen Risiko." },
];

const structureContent = (
  <ol className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
    {structures.map((item, i) => (
      <li key={i} className="flex gap-4 p-5 md:gap-6 md:p-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold tabular-nums text-primary">{i + 1}</span>
        <div className="pt-1">
          <p className="font-semibold text-slate-900">{item.title}</p>
          <p className="mt-1 text-slate-600">{item.description}</p>
          {item.items && (
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {item.items.map((sub, idx) => (
                <li key={idx} className="flex items-center gap-2 text-slate-700">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {sub}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export const ManajemenRisiko = () => {
  return (
    <ServicePageTemplate
      category="sertifikasi"
      banner={{ title: "ISO 31000:2018", subtitle: "Manajemen Risiko", crumbs: ["Layanan", "Sertifikasi Organisasi"] }}
      heading="ISO 31000:2018"
      intro="ISO 31000:2018 adalah panduan internasional untuk manajemen risiko. Panduan ini membantu organisasi dalam mengidentifikasi, menilai, dan mengendalikan risiko yang dihadapinya."
      sections={[
        { id: "prinsip", title: "Prinsip utama ISO 31000:2018", items: principles, variant: "cards" },
        { id: "manfaat", title: "Manfaat ISO 31000:2018", items: benefits, variant: "checklist" },
        { id: "struktur", title: "Struktur ISO 31000:2018", items: structures, content: structureContent },
        { id: "penerapan", title: "Penerapan ISO 31000:2018", lead: "Proses penerapan ISO 31000:2018 biasanya terdiri dari beberapa langkah:", items: implementations, variant: "steps" },
      ]}
    />
  );
};

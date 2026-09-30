import { CalendarDaysIcon, CheckCircleIcon, ClockIcon, CreditCardIcon, GiftIcon, StarIcon, UserGroupIcon, UserIcon } from "@heroicons/react/24/solid";
import { PageBanner } from "../../components/ui/PageBanner";
import { Reveal } from "../../components/ui/Reveal";
import { CtaBand } from "../../components/CtaBand";

const schedule = [
  {
    time: "09.00 - 09.15",
    topic: "Pembukaan dan Pengantar Pelatihan",
    method: "Presentasi",
    details: [],
  },
  {
    time: "09.15 - 10.00",
    topic: "Overview Persyaratan Akreditasi Lab ISO/SNI 17025:2017 & Persyaratan KAN",
    method: "Presentasi & Diskusi",
    details: ["Identifikasi Lingkup Akreditasi Laboratorium", "Identifikasi Persyaratan ISO/SNI 17025:2017", "Identifikasi Persyaratan manajemen dan teknis Laboratorium"],
  },
  {
    time: "10.00 - 10.45",
    topic: "Metode Self-Assessment Akreditasi",
    method: "Studi Kasus & Simulasi",
    details: ["Pelaksanaan Gap Analisis Laboratorium", "Teknik Evaluasi dan Dokumentasi"],
  },
  {
    time: "10.45 - 11.00",
    topic: "Istirahat",
    method: "",
    details: [],
  },
  {
    time: "11.00 - 11.45",
    topic: "Strategi Perbaikan & Tindak Lanjut",
    method: "Diskusi",
    details: ["Penyusunan rencana tindakan perbaikan", "Persiapan audit internal dan eksternal Lab"],
  },
  {
    time: "11.45 - 12.00",
    topic: "Tanya Jawab & Kesimpulan",
    method: "Interaktif",
    details: [],
  },
];

export const SilabusAkreditasiLabPengujian = () => {
  return (
    <>
      <PageBanner title="Silabus Pelatihan ISO/SNI 17025:2017" crumbs={["Layanan", "Pelatihan dan Pendampingan Sertifikasi"]} />

      <div className="bg-slate-50 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <h2 className="mb-4 text-h2 font-bold text-primary">SILABUS PELATIHAN ONLINE</h2>
            <p className="mb-4 text-lg font-semibold text-slate-700">Self Assessment Persiapan Akreditasi Laboratorium oleh KAN berdasarkan ISO/SNI 17025:2017</p>

            <div className="flex items-center gap-2 text-slate-600">
              <ClockIcon className="w-5 h-5 flex-shrink-0 text-primary" />
              <span>09.00 - 12.00 WIB (termasuk istirahat 15 menit)</span>
            </div>
          </Reveal>

          {/* Training Details */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Date Info */}
            <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CalendarDaysIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Tanggal Pelatihan</h3>
              </div>
              <p className="text-slate-700">3 Februari 2025</p>
            </Reveal>

            {/* Price Info */}
            <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCardIcon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold">Biaya Pelatihan</h3>
              </div>
              <p className="text-slate-700">Rp. 500.000,- /Peserta</p>
              <p className="text-slate-700">
                Nomor Rekening: <strong>133.00.2616.880.7</strong> atas nama <strong>PT. Inovasi Solusindo Sukses </strong> (Bank Mandiri)
              </p>
            </Reveal>
          </div>

          {/* Schedule Table */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <h3 className="text-xl font-semibold mb-4">Jadwal Pelatihan</h3>
            <div className="-mx-6 overflow-x-auto px-6 md:mx-0 md:px-0">
              <p className="mb-3 text-xs text-slate-400 md:hidden">Geser tabel ke samping untuk melihat semua kolom &rarr;</p>
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-32">Waktu</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Materi Pelatihan</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider w-40">Metode</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {schedule.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{item.time}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-slate-900 font-medium mb-2">{item.topic}</div>
                        {item.details.length > 0 && (
                          <ul className="list-disc list-inside text-sm text-slate-600 pl-4 space-y-1">
                            {item.details.map((detail, idx) => (
                              <li key={idx} className="text-slate-600">
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-500">{item.method}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Tujuan Pelatihan */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <StarIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Tujuan Pelatihan</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Memahami persyaratan utama ISO/SNI 17025:2017 dalam konteks akreditasi laboratorium oleh KAN</li>
              <li>Menilai kesiapan laboratorium melalui metode self-assessment</li>
              <li>Mengidentifikasi gap antara kondisi laboratorium saat ini dengan persyaratan akreditasi serta regulasi dari KAN ( Komiter Akreditasi Nasional )</li>
              <li>Menyusun rencana tindak lanjut untuk pemenuhan standar akreditasi</li>
            </ul>
          </Reveal>

          {/* Peserta Pelatihan */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <UserGroupIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Peserta Pelatihan</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Kepala Labolatorium</li>
              <li>Manajer Mutu & Manajer Teknis Laboratorium</li>
              <li>Teknisi dan Analis Laboratorium</li>
              <li>Auditor Internal Laboratorium</li>
              <li>Personel yang terlibat dalam persiapan akreditasi</li>
              <li>Dosen/Mahasiswa/Laboran</li>
              <li>Umum</li>
            </ul>
          </Reveal>

          {/* Facilitator Info */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <UserIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Narasumber</h3>
            </div>
            <p className="text-slate-700 font-semibold mb-2">Ir. Heriyanto, M.Si.</p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>
                Konsultan, Auditor, Pengajar dan Praktisi Sistem Manajemen Mutu, K3 dan Lingukngan, QHSE Perusahaan. (SNI ISO 17025, ISO 30301 : 2019, ISO/SNI 50001, ISO 55001,SNI ISO 15189, SNI ISO 9001, SNI ISO 14001, SNI ISO 45001,SNI
                ISO 22000, SMK3, SNI ISO 17020, SNI ISO 17024, SNI ISO 21001, dll)
              </li>
              <li>Kepala Litbang, SDM, Standarisasi, Kompetensi dan Regulasi FK Perwata Kepolisian RI</li>
              <li>Tenaga Ahli Pusat Mutu dan Profesi SKSG UI</li>
              <li>Tenaga Ahli PT. Makara Mas Universitas Indonesia</li>
              <li>Konsultan dan Tenaga Ahli Penyusunan, penerapan,evaluasi dan peningkatan sitem mutu, K3 dan Lingkungan Kampus, Laboratorium, Sekolah, Balai, Lembaga Diklat dan Perusahaan</li>
            </ul>
          </Reveal>

          {/* Output Pelatihan */}
          <Reveal className="mb-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircleIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Output Pelatihan</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Pemahaman menyeluruh tentang persyaratan ISO/SNI 17025:2017</li>
              <li>Checklist Self-Assessment untuk persiapan akreditasi Laboratorium</li>
              <li>Memahami Rencana tindakan perbaikan berdasarkan hasil self-assessment</li>
              <li>Pemahaman mengenai langkah-langkah menghadapi audit KAN</li>
            </ul>
          </Reveal>

          {/* Facilities */}
          <Reveal className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <GiftIcon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">Fasilitas Pelatihan</h3>
            </div>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>Materi presentasi dalam bentuk PDF</li>
              <li>Template Checklist Self-Assessment</li>
              <li>Sertifikat Pelatihan (E-Certificate)</li>
              <li>Rekaman pelatihan (jika diperlukan)</li>
            </ul>
          </Reveal>
        </div>
      </div>
      <CtaBand title="Daftar pelatihan ini?" text="Hubungi kami untuk pendaftaran dan informasi jadwal pelatihan berikutnya." />
    </>
  );
};

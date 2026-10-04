import { TrainingList } from "../../components/service/TrainingList";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";

const recommendedGroups = [
  {
    title: "A. Industri Perhotelan",
    items: [
      "General Manager Hotel",
      "Hotel Manager",
      "Resort Manager",
      "Front Office Manager",
      "Housekeeping Manager",
      "Food & Beverage Manager",
      "Executive Chef",
      "Engineering Manager",
      "Human Resources Manager",
      "Quality Assurance Manager",
      "Guest Relation Officer",
      "Reservation Manager",
      "Asset Manager",
      "Sustainability Manager",
      "Dosen bidang Parawisata dan Perhotelan",
      "Mahasiswa bidang Parawisata dan Perhotelan",
      "Alumni bidang Parawisata dan Perhotelan",
      "Umum",
    ],
  },
  {
    title: "B. Industri Pariwisata",
    items: [
      "Direktur Biro Perjalanan Wisata",
      "Tour Manager",
      "Travel Consultant",
      "Destination Manager",
      "Tourism Development Officer",
      "Pengelola Desa Wisata",
      "Pengelola Taman Wisata",
      "Pengelola Museum dan Atraksi Wisata",
      "Tourism Quality Assurance Officer",
      "Dosen bidang Parawisata dan Perhotelan",
      "Mahasiswa bidang Parawisata dan Perhotelan",
      "Alumni bidang Parawisata dan Perhotelan",
      "Umum",
    ],
  },
  {
    title: "C. Industri MICE (Meeting, Incentive, Convention, Exhibition)",
    items: ["Event Manager", "MICE Manager", "Convention Manager", "Exhibition Organizer", "Wedding Organizer", "Professional Conference Organizer (PCO)", "Professional Exhibition Organizer (PEO)"],
  },
  {
    title: "D. Akademisi dan Mahasiswa",
    items: [
      "Dekan Fakultas Pariwisata",
      "Ketua Program Studi Pariwisata",
      "Ketua Program Studi Perhotelan",
      "Dosen Pariwisata",
      "Dosen Perhotelan",
      "Laboran Hotel dan MICE",
      "Mahasiswa Pariwisata",
      "Mahasiswa Perhotelan",
      "Mahasiswa MICE/Event Management",
      "Mahasiswa Tata Boga dan Hospitality",
    ],
  },
];

const careerPaths = [
  "Hotel Quality Assurance Officer",
  "Internal Auditor Hotel",
  "Food Safety Officer",
  "Hospitality Risk Officer",
  "Sustainability Officer",
  "Guest Experience Manager",
  "Human Capital Officer",
  "Asset Management Officer",
  "Event Sustainability Officer",
  "Tourism Quality Manager",
  "Hospitality Compliance Officer",
  "Tourism Innovation Officer",
  "Resort Operations Manager",
  "Hospitality Consultant",
  "Tourism Management Consultant",
];

const PersonilList = ({ items }) => (
  <ul className="list-decimal space-y-1 pl-5">
    {items.map((item) => (
      <li key={item}>
        <span className="font-normal">{item}</span>
      </li>
    ))}
  </ul>
);

const AccordionContent = ({ tujuan, manfaatIndustri, manfaatPeserta, personil }) => (
  <div className="space-y-4">
    <div>
      <h3 className="mb-2 font-semibold text-brand">Durasi Pelatihan: 2 Hari (Online/Offline)</h3>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Tujuan Pelatihan:</h3>
      <p className="text-gray-600">{tujuan}</p>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Manfaat bagi Industri Parawisata dan Perhotelan:</h3>
      <p className="text-gray-600">{manfaatIndustri}</p>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Manfaat bagi Peserta Pelatihan:</h3>
      <p className="text-gray-600">{manfaatPeserta}</p>
    </div>
    <div>
      <h3 className="mb-2 font-semibold">Saran Personil yang Mengikuti Pelatihan:</h3>
      <PersonilList items={personil} />
    </div>
  </div>
);

export const PelatihanParawisataPerhotelan = () => {
  const accordionData = [
    {
      title: "Penerapan ISO 9001:2015 — Sistem Manajemen Mutu pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman dan kemampuan penerapan Sistem Manajemen Mutu ISO 9001:2015 pada industri parawisata dan perhotelan, sehingga konsistensi kualitas pelayanan terjaga dan kepuasan tamu meningkat."
          manfaatIndustri="Menjamin konsistensi kualitas pelayanan dan meningkatkan kepuasan tamu."
          manfaatPeserta="Memahami sistem mutu dan SOP pelayanan hotel bertaraf internasional standar QMS ISO 9001:2015."
          personil={["General Manager Hotel", "Hotel Manager", "Quality Assurance Officer", "Supervisor Operasional", "Front Office Manager", "Dosen Hospitality", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 22000:2018 — Sistem Manajemen Keamanan Pangan pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman dan kemampuan penerapan Sistem Manajemen Keamanan Pangan ISO 22000:2018 pada industri parawisata dan perhotelan, sehingga keamanan makanan dan minuman terjamin serta risiko keracunan pangan dapat dicegah."
          manfaatIndustri="Menjamin keamanan makanan dan minuman serta mencegah keracunan pangan."
          manfaatPeserta="Memahami pengelolaan keamanan pangan yang dibutuhkan industri hospitality berbasis ISO 22000:2018."
          personil={["Executive Chef", "Sous Chef", "Kitchen Supervisor", "F&B Manager", "Catering Manager", "Food Safety Officer", "Mahasiswa Tata Boga dan Perhotelan serta Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 45001:2018 — Sistem Manajemen K3 pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman dan kemampuan penerapan Sistem Manajemen Keselamatan dan Kesehatan Kerja ISO 45001:2018 pada industri parawisata dan perhotelan, sehingga kecelakaan kerja berkurang dan keselamatan karyawan serta tamu meningkat."
          manfaatIndustri="Mengurangi kecelakaan kerja dan meningkatkan keselamatan karyawan serta tamu."
          manfaatPeserta="Memahami penerapan K3 pada hotel, restoran, dan objek wisata, kegiatan event indoor & outdoor, berbasis ISO 45001:2018."
          personil={["HSE Officer", "HR Manager", "Engineering Manager", "Housekeeping Manager", "Kitchen Manager", "Event Manager", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 14001:2015 — Sistem Manajemen Lingkungan pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman dan kemampuan penerapan Sistem Manajemen Lingkungan ISO 14001:2015 pada industri parawisata dan perhotelan, guna mendukung Green Hotel dan Sustainable Tourism melalui pengelolaan lingkungan yang baik."
          manfaatIndustri="Mendukung Green Hotel dan Sustainable Tourism melalui pengelolaan lingkungan yang baik."
          manfaatPeserta="Memahami kompetensi dalam pengelolaan wisata berkelanjutan dan tata kelola limbah perhotelan dan parawisata berbasis EMS ISO 14001:2015."
          personil={["Sustainability Manager", "Resort Manager", "Environmental Officer", "Facility Manager", "Pengelola Destinasi Wisata", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 10002:2018 — Manajemen Keluhan Pelanggan pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan teknik manajemen keluhan pelanggan berbasis ISO 10002:2018 pada industri parawisata dan perhotelan, sehingga kepuasan dan loyalitas pelanggan meningkat melalui pengelolaan keluhan yang efektif."
          manfaatIndustri="Meningkatkan kepuasan dan loyalitas pelanggan melalui pengelolaan keluhan yang efektif."
          manfaatPeserta="Memahami teknik complaint handling dan service excellence secara sistematis berdasarkan standar ISO 10002:2018."
          personil={["Front Office Manager", "Guest Relation Officer", "Customer Service Manager", "Reservation Supervisor", "Tourism Service Officer", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Pemahaman ISO 20121:2024 — Sustainable Event Management pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman Sustainable Event Management berbasis ISO 20121:2024 pada industri parawisata dan perhotelan, guna menjamin penyelenggaraan event yang efisien, ramah lingkungan, dan berkelanjutan."
          manfaatIndustri="Menjamin penyelenggaraan event yang efisien, ramah lingkungan, dan berkelanjutan."
          manfaatPeserta="Membekali kompetensi pengelolaan event berstandar internasional berbasis Standar ISO 20121:2024."
          personil={["Event Manager", "MICE Manager", "Convention Manager", "Exhibition Organizer", "Wedding Organizer", "Mahasiswa MICE", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 21401:2018 — Sustainable Accommodation pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman dan kemampuan penerapan Sustainable Accommodation ISO 21401:2018 pada industri parawisata dan perhotelan, guna meningkatkan reputasi akomodasi wisata yang berkelanjutan dan ramah lingkungan."
          manfaatIndustri="Meningkatkan reputasi akomodasi wisata yang berkelanjutan dan ramah lingkungan."
          manfaatPeserta="Memahami pengelolaan hotel berkelanjutan sesuai tren global berbasis standar internasional ISO 21401:2018."
          personil={["Hotel Manager", "Resort Manager", "Villa Manager", "Homestay Manager", "Sustainability Officer", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Pemahaman ISO 31000:2018 — Manajemen Risiko pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan kemampuan identifikasi dan mitigasi risiko berbasis ISO 31000:2018 pada industri parawisata dan perhotelan, guna mengurangi risiko operasional, finansial, keselamatan, dan reputasi bisnis."
          manfaatIndustri="Mengurangi risiko operasional, finansial, keselamatan, dan reputasi bisnis."
          manfaatPeserta="Membekali kemampuan identifikasi dan mitigasi risiko usaha pariwisata dan perhotelan berbasis standar ISO 31000:2018."
          personil={["General Manager", "Risk Manager", "Finance Manager", "Operation Manager", "Travel Agency Manager", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Pemahaman ISO 27001:2022 — Sistem Manajemen Keamanan Informasi pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman Sistem Manajemen Keamanan Informasi ISO 27001:2022 pada industri parawisata dan perhotelan, guna melindungi data pelanggan, sistem reservasi, dan transaksi digital."
          manfaatIndustri="Melindungi data pelanggan, sistem reservasi, dan transaksi digital."
          manfaatPeserta="Memahami keamanan informasi dalam era digital hospitality berbasis standar ISO 27001:2022."
          personil={["IT Manager", "Reservation Manager", "Revenue Manager", "Data Protection Officer", "E-Tourism Manager", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 56002 — Sistem Manajemen Inovasi pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman Sistem Manajemen Inovasi ISO 56002 pada industri parawisata dan perhotelan, guna mendorong inovasi produk wisata, layanan hotel, dan strategi pemasaran."
          manfaatIndustri="Mendorong inovasi produk wisata, layanan hotel, dan strategi pemasaran."
          manfaatPeserta="Mengembangkan kreativitas dan inovasi bisnis pariwisata dan perhotelan berbasis standar internasional ISO 56002."
          personil={["Business Development Manager", "Marketing Manager", "Tourism Entrepreneur", "Product Development Officer", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 30414:2018 — Human Capital Reporting pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman Human Capital Reporting ISO 30414:2018 pada industri parawisata dan perhotelan, guna membantu pengelolaan SDM yang efektif dan pengembangan kompetensi karyawan."
          manfaatIndustri="Membantu pengelolaan SDM yang efektif dan pengembangan kompetensi karyawan."
          manfaatPeserta="Memahami manajemen SDM dan pengembangan karier di industri hospitality berbasis standar internasional ISO 30414:2018."
          personil={["HR Manager", "Training Manager", "Talent Development Officer", "Hotel Manager", "Dosen", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
    {
      title: "Penerapan ISO 55001:2024 — Sistem Manajemen Aset pada Industri Parawisata dan Perhotelan",
      content: (
        <AccordionContent
          tujuan="Pelatihan ini bertujuan membekali peserta dengan pemahaman Sistem Manajemen Aset ISO 55001:2024 pada industri parawisata dan perhotelan, guna mengoptimalkan pengelolaan aset hotel, resort, dan fasilitas wisata."
          manfaatIndustri="Mengoptimalkan pengelolaan aset hotel, resort, dan fasilitas wisata."
          manfaatPeserta="Memahami pengelolaan aset dan fasilitas penunjang operasional hotel dan parawisata berbasis ISO 55001:2024."
          personil={["Engineering Manager", "Facility Manager", "Asset Manager", "Chief Engineer Hotel", "Resort Manager", "Mahasiswa", "Alumni dan Umum"]}
        />
      ),
    },
  ];

  const note = (
    <>
      <p>Catatan: tanggal pelatihan dapat disesuaikan dengan permintaan calon peserta pelatihan.</p>
      <p className="mt-1">
        Kontak Person: <span className="font-semibold text-slate-800">Heriyanto</span> &mdash; Hp.{" "}
        <a href="tel:+6281311173707" className="font-semibold text-brand hover:underline">
          081311173707
        </a>
        .
      </p>
    </>
  );

  const afterList = (
    <>
      <Reveal>
        <h2 className="text-h2 font-bold">Kelompok Peserta yang Sangat Direkomendasikan Mengikuti Pelatihan</h2>
      </Reveal>
      <Stagger className="mt-8 grid gap-6 sm:grid-cols-2">
        {recommendedGroups.map((group) => (
          <StaggerItem key={group.title} className="rounded-2xl border border-slate-200 bg-surface p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-brand">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-16">
        <h2 className="text-h2 font-bold">Manfaat Strategis bagi Lulusan Pariwisata dan Perhotelan</h2>
        <p className="mt-4 max-w-3xl text-slate-600">Dengan memahami standar ISO tersebut, lulusan / peserta pelatihan memiliki peluang berkarier sebagai:</p>
      </Reveal>
      <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {careerPaths.map((role) => (
          <StaggerItem key={role} className="flex items-start gap-2 rounded-xl border border-slate-200 bg-surface px-4 py-3 text-sm font-medium text-slate-800">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
            <span>{role}</span>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal className="mt-8 max-w-3xl">
        <p className="text-slate-600">
          Kompetensi berbasis ISO menjadi nilai tambah penting karena banyak hotel berbintang, resort internasional, operator wisata, dan perusahaan MICE saat ini mengarah pada penerapan{" "}
          <strong className="font-semibold text-slate-900">
            Quality Management, Sustainable Tourism, Food Safety, Risk Management, Information Security, Human Capital Management, dan Asset Management
          </strong>{" "}
          sesuai standar internasional.
        </p>
      </Reveal>
    </>
  );

  return (
    <TrainingList
      banner={{
        title: "Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan",
        subtitle: "Daftar judul pelatihan standar internasional ISO bidang parawisata dan perhotelan tahun 2026 - 2027. Pelatihan berdurasi 2 hari, online atau offline.",
        crumbs: ["Layanan", "Pelatihan"],
      }}
      heading="Daftar Pelatihan Standar Internasional ISO Bidang Parawisata dan Perhotelan Tahun 2026 - 2027"
      note={note}
      items={accordionData}
      afterList={afterList}
    />
  );
};

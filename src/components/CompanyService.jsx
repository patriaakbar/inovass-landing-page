import { Link } from "react-router-dom";
import { AcademicCapIcon, CheckBadgeIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Reveal, Stagger, StaggerItem } from "./ui/Reveal";
import { ArrowIcon } from "./ui/Button";

const services = [
  {
    icon: CheckBadgeIcon,
    subtitle: "Sertifikasi Organisasi",
    description: "Pengakuan resmi yang diberikan kepada suatu organisasi atas penerapan sistem manajemen yang telah memenuhi standar tertentu.",
    to: "/sertifikasi-organisasi",
  },
  {
    icon: ShieldCheckIcon,
    subtitle: "Akreditasi Organisasi",
    description: "Proses penilaian dan pengakuan terhadap suatu organisasi yang telah memenuhi standar yang telah memenuhi standar Akreditasi tertentu",
    to: "/akreditasi-organisasi",
  },
  {
    icon: AcademicCapIcon,
    subtitle: "Pelatihan",
    description: "Kami menyediakan berbagai program pelatihan yang dirancang untuk meningkatkan keterampilan dan pengetahuan karyawan Anda di berbagai bidang",
    to: "/pelatihan-sertifikasi",
  },
];

export const CompanyService = () => {
  return (
    <section id="layanan" className="section scroll-mt-20">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Layanan</p>
          <h2 className="mt-4 text-h2 font-bold">Pendampingan menyeluruh menuju standar internasional</h2>
          <p className="mt-4 text-lead text-slate-600">Anda ingin mengetahui lebih lanjut tentang layanan kami? Pilih layanan yang sesuai dengan kebutuhan organisasi Anda.</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, subtitle, description, to }) => (
            <StaggerItem key={subtitle}>
              <Link
                to={to}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-surface p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift md:p-8"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary to-mint transition-transform duration-500 group-hover:scale-x-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-brand transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                </span>
                <p className="mt-6 text-sm font-medium text-slate-500">Layanan</p>
                <h3 className="mt-1 text-h3 font-bold">{subtitle}</h3>
                <p className="mt-3 flex-1 text-slate-600">{description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Selengkapnya
                  <ArrowIcon />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

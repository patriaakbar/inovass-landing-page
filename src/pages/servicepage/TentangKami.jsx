import { PageBanner } from "../../components/ui/PageBanner";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import { CtaBand } from "../../components/CtaBand";
import advantageCompany from "../../assets/company/advantage-company.png";
import service_satu from "../../assets/company/service-1.png";
import service_dua from "../../assets/company/service-2.png";
import service_tiga from "../../assets/company/service-3.png";

export const TentangKami = () => {
  const features = [
    {
      image: service_satu,
      text: "Pelatihan",
      description: "Kami menyediakan berbagai program pelatihan yang dirancang untuk meningkatkan keterampilan dan pengetahuan karyawan Anda di berbagai bidang",
    },
    {
      image: service_dua,
      text: "Konsultan Manajemen",
      description: "Kami membantu organisasi Anda dalam mengembangkan kompetensi personal dalam bidang pelatihan dan pendampingan menerapkan sistem manajemen yang, cepat, mudah dan efektif",
    },
    {
      image: service_tiga,
      text: "ISO Digital",
      description: "Kami menawarkan solusi ISO Digital yang menggunakan aplikasi software untuk membantu organisasi Anda dalam menerapkan standar ISO dengan lebih mudah, efisien, cepat dan tepat.",
    },
  ];

  const advantages = [
    {
      number: "01",
      title: "Tim yang berpengalaman dan profesional",
      description: "Kami memiliki tim yang terdiri dari para ahli di bidang pelatihan, konsultan manajemen, dan teknologi informasi yang memiliki pengalaman luas dalam membantu organisasi dari berbagai sektor",
    },
    {
      number: "02",
      title: "Solusi yang inovatif dan efektif",
      description: "Kami menawarkan solusi yang dirancang khusus untuk memenuhi kebutuhan organisasi Anda dan membantu Anda mencapai tujuan Anda.",
    },
    {
      number: "03",
      title: "Komitmen terhadap kualitas",
      description: "Kami berkomitmen untuk memberikan layanan terbaik bagi klien kami dan memastikan bahwa mereka puas dengan solusi yang kami berikan.",
    },
  ];

  return (
    <>
      <PageBanner title="Tentang Kami" subtitle="Inovass Consulting" />

      <section className="container-page py-14 md:py-20">
        <Reveal className="max-w-4xl">
          <h2 className="text-h2 font-bold">Inovass Consulting : Solusi Tepat untuk Kebutuhan Pelatihan, Konsultan Manajemen, Konsultan ISO, dan Informasi Teknologi Anda</h2>
          <p className="mt-6 text-lead text-slate-600">
            PT. Inovass Consulting adalah perusahaan yang bergerak di bidang Jasa Pelatihan, Konsultan Manajemen, Konsultan ISO, dan Informasi Teknologi. Kami berkomitmen untuk membantu organisasi Anda mencapai tujuan dan meningkatkan
            kinerja melalui solusi yang inovatif dan efektif. Sebagai konsultan ISO terpercaya, kami menyediakan layanan konsultasi, pelatihan, dan pendampingan yang dirancang untuk membantu bisnis Anda memenuhi standar internasional dan
            meningkatkan daya saing di pasar global.
          </p>
        </Reveal>
      </section>

      <section className="section bg-slate-50">
        <div className="container-page">
          <Reveal>
            <h2 className="text-h2 font-bold">Jasa yang Kami Tawarkan</h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {features.map(({ image, text, description }) => (
              <StaggerItem key={text} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 transition-transform duration-300 group-hover:scale-105">
                  <img src={image} alt="" className="h-10 w-10" loading="lazy" />
                </span>
                <h3 className="mt-6 text-h3 font-bold">{text}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-last lg:order-first">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img src={advantageCompany} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <Reveal>
              <h2 className="text-h2 font-bold">Keunggulan PT Inovass</h2>
            </Reveal>
            <Stagger as="ol" className="mt-10 space-y-8">
              {advantages.map((advantage) => (
                <StaggerItem as="li" key={advantage.number} className="flex gap-5 md:gap-6">
                  <span className="text-3xl font-bold tabular-nums text-primary md:text-4xl">{advantage.number}</span>
                  <div className="border-l border-slate-200 pl-5 md:pl-6">
                    <h3 className="text-lg font-semibold md:text-xl">{advantage.title}</h3>
                    <p className="mt-2 text-slate-600">{advantage.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
};

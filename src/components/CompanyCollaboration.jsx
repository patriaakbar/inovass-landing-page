import companyMap from "../assets/company/map-indonesia.png";
import { clientLogos } from "../data/clients";
import { Reveal } from "./ui/Reveal";
import { ArrowIcon, Button } from "./ui/Button";

const half = Math.ceil(clientLogos.length / 2);
const rows = [clientLogos.slice(0, half), clientLogos.slice(half)];

const MarqueeRow = ({ logos, reverse }) => (
  <div className="group flex overflow-hidden mask-fade-x" style={{ "--marquee-duration": `${logos.length * 2.4}s` }}>
    {[0, 1].map((copy) => (
      <ul
        key={copy}
        aria-hidden={copy === 1 ? "true" : undefined}
        className={`flex shrink-0 items-center gap-4 pr-4 group-hover:paused ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {logos.map((logo) => (
          <li key={logo.src} className="flex h-20 w-36 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 md:h-24 md:w-44">
            <img
              src={logo.src}
              alt={copy === 0 ? logo.name : ""}
              loading="lazy"
              className="max-h-14 w-auto max-w-full object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0 md:max-h-16"
            />
          </li>
        ))}
      </ul>
    ))}
  </div>
);

export const CompanyCollaboration = () => {
  return (
    <section className="section overflow-hidden">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Klien Kami</p>
          <h2 className="mt-4 text-h2 font-bold">Menjangkau Kebutuhan Khusus Secara Nasional</h2>
          <p className="mt-4 text-lead text-slate-600">
            Inovass telah menjadi mitra terpercaya bagi berbagai entitas bisnis di berbagai sektor industri. Kami berkomitmen memberikan solusi inovatif dan terdepan yang memenuhi kebutuhan unik setiap klien. Dengan fokus pada
            kolaborasi dan keunggulan, kami hadir untuk menghasilkan dampak positif yang signifikan bagi pertumbuhan dan keberhasilan bisnis klien kami.
          </p>
        </Reveal>

        <Reveal delay={0.1} y={40} className="mx-auto mt-10 max-w-5xl">
          <img src={companyMap} alt="Peta sebaran klien INOVASS di Indonesia" loading="lazy" width="1296" height="656" className="h-auto w-full mix-blend-multiply" />
        </Reveal>
      </div>

      <Reveal className="mt-6 space-y-4">
        {rows.map((logos, i) => (
          <MarqueeRow key={i} logos={logos} reverse={i === 1} />
        ))}
      </Reveal>

      <div className="container-page mt-10 flex justify-center">
        <Button to="/klien-kami" variant="outline">
          Lihat Lebih Banyak
          <ArrowIcon />
        </Button>
      </div>
    </section>
  );
};

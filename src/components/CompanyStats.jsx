import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { clientLogos } from "../data/clients";
import { akreditasiStandards, sertifikasiStandards } from "../data/site";
import { Stagger, StaggerItem } from "./ui/Reveal";

// TODO: konfirmasi angka final ke tim INOVASS (saat ini dihitung dari aset & data situs).
const stats = [
  { value: clientLogos.length, suffix: "+", label: "Klien & mitra dari berbagai sektor" },
  { value: sertifikasiStandards.length + akreditasiStandards.length, suffix: "", label: "Standar ISO sertifikasi & akreditasi" },
  { value: 36, suffix: "", label: "Program pelatihan & pendampingan" },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setDisplay(Math.round(v)) });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
};

export const CompanyStats = () => {
  return (
    <section aria-label="Statistik" className="relative z-10 -mt-14 md:-mt-16">
      <div className="container-page">
        <Stagger className="grid grid-cols-3 divide-x divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lift">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="px-3 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
              <p className="text-2xl font-bold tracking-tight text-navy-900 sm:text-4xl md:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs leading-snug text-slate-600 sm:mt-2 sm:text-sm md:text-base">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
};

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import aplikasiSolid from "../assets/company/product-dcs.png";
import { solidAppUrl } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { ArrowIcon, Button } from "./ui/Button";

const highlights = ["Integrasi dokumen ISO", "Pengendalian dokumen terpusat", "Selaras dengan standar internasional"];

export const CompanyProduct = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="section overflow-hidden bg-slate-50">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">Produk Kami</p>
          <h2 className="mt-4 text-h2 font-bold">Aplikasi Solid</h2>
          <p className="mt-5 text-lead text-slate-600">
            Aplikasi SOLID merupakan sebuah platform inovatif yang dirancang untuk mengelola dan mengontrol dokumen-dokumen dengan efisiensi. Salah satu fitur unggulannya adalah kemampuan untuk mengintegrasikan dokumen ISO,
            memungkinkan organisasi untuk dengan mudah menyelaraskan dan mematuhi standar internasional yang relevan.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 font-medium text-slate-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-mint/15 text-mint-600" aria-hidden="true">
                  <svg viewBox="0 0 20 20" className="h-4 w-4">
                    <path d="m5.5 10.2 3 3L14.5 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {h}
              </li>
            ))}
          </ul>
          <Button href={solidAppUrl} variant="primary" className="mt-8">
            Buka Aplikasi Solid
            <ArrowIcon />
          </Button>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <div aria-hidden="true" className="absolute -inset-6 -z-0 rounded-[2rem] bg-gradient-to-br from-primary/15 via-transparent to-mint/15 blur-2xl" />
          <motion.a
            href={solidAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ y }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative block overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-lift"
          >
            <div className="flex items-center gap-1.5 px-3 pb-2 pt-1" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            </div>
            <img src={aplikasiSolid} alt="Tampilan Aplikasi Solid: Document Control System" loading="lazy" width="450" height="200" className="h-auto w-full rounded-xl" />
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
};

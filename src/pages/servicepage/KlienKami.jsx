import { motion } from "framer-motion";
import { PageBanner } from "../../components/ui/PageBanner";
import { Reveal } from "../../components/ui/Reveal";
import { ease } from "../../components/ui/motion";
import { CtaBand } from "../../components/CtaBand";
import { clientLogos } from "../../data/clients";

export const KlienKami = () => {
  return (
    <>
      <PageBanner title="Klien Kami" subtitle="Inovass telah menjadi mitra terpercaya bagi berbagai entitas bisnis di berbagai sektor industri." />

      <section className="container-page py-14 md:py-20">
        <Reveal className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-h2 font-bold">Klien Kami</h2>
          <p className="text-slate-500">
            <span className="font-semibold tabular-nums text-slate-900">{clientLogos.length}</span> organisasi
          </p>
        </Reveal>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clientLogos.map((logo, i) => (
            <motion.li
              key={logo.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -5% 0px" }}
              transition={{ duration: 0.45, delay: (i % 6) * 0.04, ease }}
              className="group flex aspect-[3/2] items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 transition-[box-shadow,border-color] duration-300 hover:border-primary/30 hover:shadow-lift"
            >
              <img src={logo.src} alt={logo.name} loading="lazy" className="max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105" />
            </motion.li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
};

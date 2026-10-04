import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { akreditasiStandards, sertifikasiStandards } from "../data/site";
import { Reveal } from "./ui/Reveal";
import { ease } from "./ui/motion";

const tabs = [
  { key: "sertifikasi", label: "Sertifikasi", items: sertifikasiStandards },
  { key: "akreditasi", label: "Akreditasi", items: akreditasiStandards },
];

export const CompanyStandards = () => {
  const [active, setActive] = useState("sertifikasi");
  const current = tabs.find((t) => t.key === active);

  return (
    <section className="section bg-slate-50">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Standar ISO</p>
            <h2 className="mt-4 text-h2 font-bold">Standar yang kami dampingi</h2>
            <p className="mt-4 text-lead text-slate-600">Pelajari persyaratan, manfaat, dan tahapan penerapan setiap standar.</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div role="tablist" aria-label="Kategori standar" className="inline-flex rounded-full border border-slate-200 bg-surface p-1 shadow-soft">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  type="button"
                  aria-selected={active === t.key}
                  aria-controls="standards-panel"
                  onClick={() => setActive(t.key)}
                  className={`relative min-h-[44px] rounded-full px-5 text-sm font-semibold transition-colors ${active === t.key ? "text-white" : "text-slate-600 hover:text-slate-900"}`}
                >
                  {active === t.key && <motion.span layoutId="standards-tab" className="absolute inset-0 rounded-full bg-navy-900" transition={{ duration: 0.35, ease }} />}
                  <span className="relative">
                    {t.label} <span className="tabular-nums opacity-60">({t.items.length})</span>
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div id="standards-panel" role="tabpanel" className="mt-10">
          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
            >
              {current.items.map((s) => (
                <motion.li key={s.path} variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } }}>
                  <Link
                    to={s.path}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-surface p-5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
                  >
                    <span className="flex-1">
                      <span className="block text-lg font-bold text-slate-900 group-hover:text-brand">{s.code}</span>
                      <span className="mt-1 block text-sm text-slate-600">{s.name}</span>
                    </span>
                    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-slate-300 transition-[transform,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand">
                      <path d="M6 14 14 6m0 0H7.5M14 6v6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

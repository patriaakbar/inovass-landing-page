import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PageBanner } from "../ui/PageBanner";
import { Reveal } from "../ui/Reveal";
import { ease } from "../ui/motion";
import { CtaBand } from "../CtaBand";

const TrainingItem = ({ index, item, open, onToggle }) => {
  const id = useId();
  return (
    <li className={`overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-300 ${open ? "border-primary/40 shadow-lift" : "border-slate-200 hover:border-slate-300"}`}>
      <h3>
        <button type="button" aria-expanded={open} aria-controls={id} onClick={onToggle} className="flex w-full items-start gap-4 p-5 text-left md:gap-5 md:p-6">
          <span
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold tabular-nums transition-colors ${open ? "bg-primary text-white" : "bg-primary-50 text-brand"}`}
          >
            {index + 1}
          </span>
          <span className="flex-1 pt-1.5 font-semibold text-slate-900 md:text-lg">{item.title}</span>
          <svg viewBox="0 0 20 20" aria-hidden="true" className={`mt-2 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${open ? "rotate-180 text-brand" : ""}`}>
            <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={id} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease }} className="overflow-hidden">
            <div className="prose-training border-t border-slate-100 px-5 pb-6 pt-5 leading-relaxed md:px-6 md:pl-[4.75rem]">{item.content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export const TrainingList = ({ banner, heading, items, note, afterList }) => {
  const [active, setActive] = useState(null);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const filtered = items.map((item, index) => ({ item, index })).filter(({ item }) => !q || item.title.toLowerCase().includes(q));

  return (
    <>
      <PageBanner {...banner} />

      <section className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="text-h2 font-bold text-brand">{heading}</h2>
            {note && <div className="mt-4 max-w-3xl text-slate-600">{note}</div>}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <label className="relative block w-full sm:max-w-sm">
                <span className="sr-only">Cari pelatihan</span>
                <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Cari pelatihan, mis. ISO 9001"
                  className="block min-h-[48px] w-full rounded-full border border-slate-300 bg-surface pl-11 pr-4 text-base placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15"
                />
              </label>
              <p className="text-sm text-slate-500" aria-live="polite">
                <span className="font-semibold tabular-nums text-slate-900">{filtered.length}</span> dari {items.length} program
              </p>
            </div>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {filtered.map(({ item, index }) => (
              <TrainingItem key={item.title} index={index} item={item} open={active === index} onToggle={() => setActive(active === index ? null : index)} />
            ))}
          </ul>
          {filtered.length === 0 && <p className="mt-8 rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-500">Tidak ada pelatihan yang cocok dengan &ldquo;{query}&rdquo;.</p>}

          {afterList && <div className="mt-16">{afterList}</div>}
        </div>
      </section>

      <CtaBand title="Butuh pelatihan untuk tim Anda?" text="Hubungi kami untuk jadwal, materi, dan penawaran pelatihan maupun pendampingan yang sesuai kebutuhan organisasi Anda." />
    </>
  );
};

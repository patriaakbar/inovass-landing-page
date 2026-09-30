import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PageBanner } from "../ui/PageBanner";
import { Reveal, Stagger, StaggerItem } from "../ui/Reveal";
import { CtaBand } from "../CtaBand";
import { akreditasiStandards, sertifikasiStandards } from "../../data/site";

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-mint-600">
    <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
    <path d="m6 10.2 2.6 2.6L14 7.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const itemTitle = (item) => (typeof item === "string" ? null : item.title);
const itemBody = (item) => (typeof item === "string" ? item : item.description);

const Cards = ({ items }) => (
  <Stagger className="grid gap-4 sm:grid-cols-2">
    {items.map((item, i) => (
      <StaggerItem key={i} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
        <span className="text-sm font-bold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
        {itemTitle(item) && <h3 className="mt-3 text-lg font-semibold">{itemTitle(item)}</h3>}
        {itemBody(item) && <p className={itemTitle(item) ? "mt-2 text-slate-600" : "mt-3 text-slate-700"}>{itemBody(item)}</p>}
      </StaggerItem>
    ))}
  </Stagger>
);

const Checklist = ({ items }) => (
  <Stagger as="ul" className="grid gap-x-8 gap-y-4 md:grid-cols-2">
    {items.map((item, i) => (
      <StaggerItem as="li" key={i} className="flex gap-3">
        <CheckIcon />
        <div>
          {itemTitle(item) && <p className="font-semibold text-slate-900">{itemTitle(item)}</p>}
          {itemBody(item) && <p className={itemTitle(item) ? "mt-1 text-slate-600" : "text-slate-700"}>{itemBody(item)}</p>}
        </div>
      </StaggerItem>
    ))}
  </Stagger>
);

const List = ({ items }) => (
  <Stagger as="ol" className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
    {items.map((item, i) => (
      <StaggerItem as="li" key={i} className="flex gap-4 p-5 transition-colors hover:bg-slate-50 md:gap-6 md:p-6">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-sm font-bold tabular-nums text-primary">{i + 1}</span>
        <div className="pt-1">
          {itemTitle(item) && <p className="font-semibold text-slate-900">{itemTitle(item)}</p>}
          {itemBody(item) && <p className={itemTitle(item) ? "mt-1 text-slate-600" : "text-slate-700"}>{itemBody(item)}</p>}
        </div>
      </StaggerItem>
    ))}
  </Stagger>
);

const Steps = ({ items }) => (
  <Stagger as="ol" className="relative space-y-6 before:absolute before:bottom-4 before:left-[1.1rem] before:top-4 before:w-px before:bg-gradient-to-b before:from-primary before:to-primary/10">
    {items.map((item, i) => (
      <StaggerItem as="li" key={i} className="relative flex gap-5">
        <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold tabular-nums text-white ring-4 ring-white">{i + 1}</span>
        <div className="pt-1.5">
          {itemTitle(item) && <p className="font-semibold text-slate-900">{itemTitle(item)}</p>}
          {itemBody(item) && <p className={itemTitle(item) ? "mt-1 text-slate-600" : "text-slate-700"}>{itemBody(item)}</p>}
        </div>
      </StaggerItem>
    ))}
  </Stagger>
);

const variants = { cards: Cards, checklist: Checklist, list: List, steps: Steps };

const Paragraphs = ({ value, className }) => {
  if (!value) return null;
  const list = Array.isArray(value) ? value : [value];
  return list.map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ));
};

const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join("|");
  useEffect(() => {
    const ids = key.split("|");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);
  return active;
};

const TableOfContents = ({ sections, active }) => (
  <nav aria-label="Daftar isi" className="sticky top-28 hidden lg:block">
    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Daftar Isi</p>
    <ul className="mt-4 space-y-1 border-l border-slate-200">
      {sections.map((s) => (
        <li key={s.id}>
          <a
            href={`#${s.id}`}
            aria-current={active === s.id ? "true" : undefined}
            className={`-ml-px block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
              active === s.id ? "border-primary font-semibold text-primary" : "border-transparent text-slate-600 hover:border-slate-400 hover:text-slate-900"
            }`}
          >
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const MobileToc = ({ sections }) => (
  <details className="group mb-10 rounded-2xl border border-slate-200 bg-slate-50 lg:hidden">
    <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between px-5 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
      Daftar Isi
      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-5 w-5 transition-transform group-open:rotate-180">
        <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </summary>
    <ul className="space-y-1 px-5 pb-4">
      {sections.map((s) => (
        <li key={s.id}>
          <a href={`#${s.id}`} className="block py-2 text-slate-600 hover:text-primary">
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  </details>
);

const RelatedStandards = ({ category }) => {
  const { pathname: currentPath } = useLocation();
  const list = category === "akreditasi" ? akreditasiStandards : category === "sertifikasi" ? sertifikasiStandards : null;
  if (!list) return null;
  const related = list.filter((s) => s.path !== currentPath);
  return (
    <Reveal className="mt-20 border-t border-slate-200 pt-12">
      <h2 className="text-h3 font-bold">Standar {category === "akreditasi" ? "akreditasi" : "sertifikasi"} lainnya</h2>
      <div className="mt-6 flex flex-wrap gap-2">
        {related.map((s) => (
          <Link
            key={s.path}
            to={s.path}
            title={s.name}
            className="inline-flex min-h-[40px] items-center rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 transition-colors hover:border-primary hover:bg-primary-50 hover:text-primary"
          >
            {s.code}
          </Link>
        ))}
      </div>
    </Reveal>
  );
};

export const ServicePageTemplate = ({ banner, heading, intro, sections, category }) => {
  const ids = sections.map((s) => s.id);
  const active = useActiveSection(ids);

  return (
    <>
      <PageBanner {...banner} />

      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_18rem]">
          <article className="min-w-0">
            <Reveal className="max-w-3xl">
              {heading && <h2 className="text-h2 font-bold text-primary">{heading}</h2>}
              <div className="mt-5 space-y-4">
                <Paragraphs value={intro} className="text-lead text-slate-600" />
              </div>
            </Reveal>

            <div className="mt-12">
              <MobileToc sections={sections} />
            </div>

            <div className="space-y-16 md:space-y-20">
              {sections.map((section) => {
                const Variant = variants[section.variant ?? "list"];
                return (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <Reveal>
                      <h2 className="text-h2 font-bold">{section.title}</h2>
                      {section.lead && (
                        <div className="mt-4 max-w-3xl space-y-3">
                          <Paragraphs value={section.lead} className="text-slate-600" />
                        </div>
                      )}
                    </Reveal>
                    <div className="mt-8">{section.content ?? <Variant items={section.items} />}</div>
                    {section.footer && (
                      <Reveal className="mt-6 max-w-3xl space-y-3">
                        <Paragraphs value={section.footer} className="text-slate-600" />
                      </Reveal>
                    )}
                  </section>
                );
              })}
            </div>

            <RelatedStandards category={category} />
          </article>

          <aside>
            <TableOfContents sections={sections} active={active} />
          </aside>
        </div>
      </div>

      <CtaBand />
    </>
  );
};

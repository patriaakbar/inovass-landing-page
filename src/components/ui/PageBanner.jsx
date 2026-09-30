import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ease } from "./motion";
import { usePageMeta } from "../../hooks/usePageMeta";

export const PageBanner = ({ title, subtitle, crumbs = [], description }) => {
  usePageMeta(subtitle ? `${title} ${subtitle}` : title, description);

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 pb-14 pt-32 text-white md:pb-20 md:pt-40">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-primary/40 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-navy/80 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      </div>

      <div className="container-page">
        <motion.nav aria-label="Breadcrumb" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease }}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-white/70">
            <li>
              <Link to="/" className="link-underline hover:text-white">
                Beranda
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <span>{crumb}</span>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              <span aria-current="page" className="font-medium text-white">
                {title}
              </span>
            </li>
          </ol>
        </motion.nav>

        <motion.h1
          className="mt-5 max-w-4xl text-display font-bold text-white"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="mt-4 max-w-3xl text-lead text-white/80"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

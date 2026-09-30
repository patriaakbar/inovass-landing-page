import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import companyBanner from "../assets/company/banner.png";
import companyVideoBanner from "../assets/company/company-banner-video.webm";
import { ArrowIcon, Button } from "./ui/Button";
import { ease } from "./ui/motion";
import { contact } from "../data/site";

const lines = ["The Maker of Innovation", "to be Comes True"];

const useCanPlayVideo = () => {
  const [canPlay, setCanPlay] = useState(false);
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 768px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setCanPlay(wide.matches && !reduced.matches && !navigator.connection?.saveData);
    update();
    wide.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      wide.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);
  return canPlay;
};

export const CompanyBanner = () => {
  const canPlayVideo = useCanPlayVideo();
  let wordIndex = 0;

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <img src={companyBanner} alt="" className="h-full w-full object-cover" />
        {canPlayVideo && <video muted autoPlay playsInline loop disablePictureInPicture poster={companyBanner} src={companyVideoBanner} className="absolute inset-0 h-full w-full object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/75 to-navy-900/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" />
      </div>

      <div className="container-page pb-24 pt-32 md:pb-32 md:pt-40">
        <motion.p className="eyebrow !text-accent" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
          Konsultan ISO &middot; Akreditasi &middot; Pelatihan
        </motion.p>

        <h1 className="mt-6 max-w-4xl text-display font-bold text-white">
          {lines.map((line) => (
            <span key={line} className="block">
              {line.split(" ").map((word) => {
                const delay = 0.15 + wordIndex++ * 0.07;
                return (
                  <span key={word + delay} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
                    <motion.span className="inline-block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay, ease }}>
                      {word}&nbsp;
                    </motion.span>
                  </span>
                );
              })}
            </span>
          ))}
          <span className="inline-flex gap-1.5 align-middle" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="inline-block h-2.5 w-2.5 rounded-full bg-accent md:h-3.5 md:w-3.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ duration: 1.4, delay: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </span>
        </h1>

        <motion.p className="mt-6 max-w-2xl text-lead text-white/80" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7, ease }}>
          Solusi Tepat untuk Kebutuhan Pelatihan, Konsultan Manajemen, Konsultan ISO, dan Informasi Teknologi Anda
        </motion.p>

        <motion.div className="mt-10 flex flex-col gap-3 sm:flex-row" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.85, ease }}>
          <Button href={contact.whatsappHref} variant="accent">
            Konsultasi Gratis
            <ArrowIcon />
          </Button>
          <Button to="/#layanan" variant="ghost" onClick={(e) => {
            const el = document.getElementById("layanan");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}>
            Lihat Layanan
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#layanan"
        aria-label="Gulir ke layanan"
        className="absolute bottom-6 left-1/2 hidden h-11 w-7 -translate-x-1/2 items-start justify-center rounded-full border border-white/40 p-1.5 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.span className="h-2 w-1 rounded-full bg-white" animate={{ y: [0, 14, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
      </motion.a>
    </section>
  );
};

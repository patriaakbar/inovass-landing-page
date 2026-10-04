import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import companyLogo from "../assets/company/logo-full.png";
import { contact, serviceMenu, servicePaths, solidAppUrl } from "../data/site";
import { ease } from "./ui/motion";
import { ThemeToggle } from "./ui/ThemeToggle";

const Chevron = ({ open, className = "" }) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}>
    <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItemClass = (active) =>
  `relative inline-flex h-11 items-center gap-1.5 rounded-full px-4 text-[15px] font-medium transition-colors ${
    active ? "text-white" : "text-white/75 hover:text-white"
  }`;

const ActiveDot = () => <motion.span layoutId="nav-active" className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent" transition={{ duration: 0.35, ease }} />;

const Dropdown = ({ label, active, open, onOpen, onClose, onToggle, children, panelClassName = "" }) => {
  const panelId = useId();
  const closeTimer = useRef();

  const enter = () => {
    clearTimeout(closeTimer.current);
    onOpen();
  };
  const leave = () => {
    closeTimer.current = setTimeout(onClose, 120);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  return (
    <div className="relative" onPointerEnter={(e) => e.pointerType === "mouse" && enter()} onPointerLeave={(e) => e.pointerType === "mouse" && leave()}>
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={onToggle} className={navItemClass(active || open)}>
        {label}
        <Chevron open={open} />
        {active && <ActiveDot />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute top-full z-50 pt-3 ${panelClassName}`}
          >
            <motion.div
              initial={{ y: 8, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 8, scale: 0.98 }}
              transition={{ duration: 0.22, ease }}
              className="origin-top overflow-hidden rounded-2xl border border-slate-200/80 bg-surface text-slate-700 shadow-lift"
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuLink = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? "bg-primary-50 font-semibold text-brand" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`
    }
  >
    {children}
  </NavLink>
);

const ServicesPanel = () => {
  const [pengertian, sertifikasi, akreditasi, pelatihan] = serviceMenu;
  const heading = "px-3 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400";
  return (
    <div className="grid w-[min(62rem,calc(100vw-4rem))] grid-cols-[1fr_1.9fr_1.2fr] gap-2 p-5">
      <div className="space-y-6">
        {[pengertian, pelatihan].map((group) => (
          <div key={group.title}>
            <p className={heading}>{group.title}</p>
            {group.links.map((l) => (
              <MenuLink key={l.path} to={l.path}>
                {l.label}
              </MenuLink>
            ))}
          </div>
        ))}
        <div className="rounded-xl bg-navy-900 p-4 text-white">
          <p className="text-sm font-semibold">Butuh arahan?</p>
          <p className="mt-1 text-xs text-white/70">Konsultasikan kebutuhan sertifikasi Anda.</p>
          <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-sm font-semibold text-accent hover:underline">
            Chat WhatsApp
          </a>
        </div>
      </div>
      <div>
        <p className={heading}>{sertifikasi.title}</p>
        <div className="grid grid-cols-2">
          {sertifikasi.links.map((l) => (
            <MenuLink key={l.path} to={l.path}>
              {l.label}
            </MenuLink>
          ))}
        </div>
      </div>
      <div>
        <p className={heading}>{akreditasi.title}</p>
        {akreditasi.links.map((l) => (
          <MenuLink key={l.path} to={l.path}>
            {l.label}
          </MenuLink>
        ))}
      </div>
    </div>
  );
};

const ProductPanel = () => (
  <div className="w-72 p-3">
    <a href={solidAppUrl} target="_blank" rel="noopener noreferrer" className="group block rounded-xl p-3 transition-colors hover:bg-slate-50">
      <p className="font-semibold text-slate-900 group-hover:text-brand">Aplikasi Solid</p>
      <p className="mt-1 text-sm text-slate-500">Platform pengendalian dokumen dan integrasi dokumen ISO.</p>
    </a>
  </div>
);

const MobileGroup = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="flex min-h-[52px] w-full items-center justify-between text-left text-lg font-medium text-white">
        {title}
        <Chevron open={open} className="h-5 w-5" />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease }} className="overflow-hidden">
            <div className="pb-4 pl-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const mobileLinkClass = ({ isActive }) => `block py-2.5 text-[15px] ${isActive ? "font-semibold text-accent" : "text-white/70 hover:text-white"}`;

const MobileMenu = ({ onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi"
      className="fixed inset-0 z-[60] lg:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm" onClick={onClose} />
      <motion.div
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-navy-900 shadow-2xl"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease }}
      >
        <div className="flex h-20 shrink-0 items-center justify-between px-5 sm:px-6">
          <Link to="/" aria-label="INOVASS beranda">
            <img src={companyLogo} alt="INOVASS" className="h-8 w-auto" />
          </Link>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Tutup menu" className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 pb-8 sm:px-6">
          <NavLink to="/" end className="flex min-h-[52px] items-center border-b border-white/10 text-lg font-medium text-white">
            Beranda
          </NavLink>
          <MobileGroup title="Produk">
            <a href={solidAppUrl} target="_blank" rel="noopener noreferrer" className="block py-2.5 text-[15px] text-white/70 hover:text-white">
              Aplikasi Solid
            </a>
          </MobileGroup>
          <MobileGroup title="Layanan">
            {serviceMenu.map((group) => (
              <div key={group.title} className="mb-3">
                <p className="pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/40">{group.title}</p>
                <div className={group.links.length > 4 ? "grid grid-cols-2 gap-x-4" : undefined}>
                  {group.links.map((l) => (
                    <NavLink key={l.path} to={l.path} className={mobileLinkClass}>
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </MobileGroup>
          <NavLink to="/tentang-kami" className="flex min-h-[52px] items-center border-b border-white/10 text-lg font-medium text-white">
            Tentang Kami
          </NavLink>
          <NavLink to="/kontak-inovass" className="flex min-h-[52px] items-center border-b border-white/10 text-lg font-medium text-white">
            Kontak
          </NavLink>
        </nav>

        <div className="shrink-0 border-t border-white/10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:px-6">
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[48px] items-center justify-center rounded-full bg-accent font-semibold text-navy-950 transition-colors hover:bg-accent-600"
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CompanyNavbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClickOutside);
    };
  }, []);

  const solid = scrolled || openMenu !== null;
  const servicesActive = servicePaths.includes(pathname);
  const dropdownProps = (name) => ({
    open: openMenu === name,
    onOpen: () => setOpenMenu(name),
    onClose: () => setOpenMenu((current) => (current === name ? null : current)),
    onToggle: () => setOpenMenu((current) => (current === name ? null : name)),
  });

  return (
    <>
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid ? "bg-navy-900/90 shadow-[0_1px_0_rgb(255_255_255/0.06),0_8px_24px_-12px_rgb(0_0_0/0.4)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <a href="#main" className="sr-only rounded-full bg-accent px-4 py-2 font-semibold text-navy-950 focus:not-sr-only focus:absolute focus:left-4 focus:top-4">
          Lewati ke konten
        </a>
        <div className={`container-page flex items-center justify-between transition-[height] duration-300 ${scrolled ? "h-16 lg:h-[72px]" : "h-20 lg:h-24"}`}>
          <Link to="/" aria-label="INOVASS beranda" className="shrink-0">
            <img src={companyLogo} alt="INOVASS" className="h-8 w-auto lg:h-10" />
          </Link>

          <nav aria-label="Navigasi utama" className="hidden items-center gap-1 lg:flex">
            <NavLink to="/" end className={({ isActive }) => navItemClass(isActive)}>
              {({ isActive }) => (
                <>
                  Beranda
                  {isActive && <ActiveDot />}
                </>
              )}
            </NavLink>
            <Dropdown label="Produk" {...dropdownProps("produk")} panelClassName="left-0">
              <ProductPanel />
            </Dropdown>
            <Dropdown label="Layanan" active={servicesActive} {...dropdownProps("layanan")} panelClassName="left-1/2 -translate-x-1/2">
              <ServicesPanel />
            </Dropdown>
            {[
              { to: "/tentang-kami", label: "Tentang Kami" },
              { to: "/kontak-inovass", label: "Kontak" },
            ].map((item) => (
              <NavLink key={item.to} to={item.to} className={({ isActive }) => navItemClass(isActive)}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <ActiveDot />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-[44px] items-center rounded-full bg-accent px-5 text-sm font-semibold text-navy-950 transition-colors hover:bg-accent-600 sm:inline-flex"
            >
              Konsultasi Gratis
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Buka menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="flex h-11 w-11 items-center justify-center rounded-full text-white hover:bg-white/10 lg:hidden"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
                <path d="M4 7h16M4 12h16M10 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>{mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}</AnimatePresence>
    </>
  );
};

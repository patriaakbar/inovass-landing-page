import { Link } from "react-router-dom";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import logo from "../assets/company/logo-full.png";
import contactWhatsApp from "../assets/company/contact-wa.svg";
import { contact, solidAppUrl } from "../data/site";

const columns = [
  {
    title: "Layanan",
    links: [
      { label: "Pengertian ISO", to: "/pengertian-iso" },
      { label: "Sertifikasi Organisasi", to: "/sertifikasi-organisasi" },
      { label: "Sertifikasi Kompetensi Personel", to: "/sertifikasi-kompetensi-personel" },
      { label: "Akreditasi Organisasi", to: "/akreditasi-organisasi" },
      { label: "Pelatihan Sertifikasi", to: "/pelatihan-sertifikasi" },
      { label: "Pelatihan Akreditasi", to: "/pelatihan-akreditasi" },
      { label: "Pelatihan Parawisata dan Perhotelan", to: "/pelatihan-parawisata-dan-perhotelan" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Tentang Kami", to: "/tentang-kami" },
      { label: "Klien Kami", to: "/klien-kami" },
      { label: "Kontak", to: "/kontak-inovass" },
      { label: "Aplikasi Solid", href: solidAppUrl },
    ],
  },
];

export const CompanyFooter = () => {
  return (
    <footer id="contact" className="bg-navy-950 text-white/70">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-12 py-16 md:py-20 lg:grid-cols-[1.3fr_1fr_1fr_1.4fr]">
        <div className="col-span-2 lg:col-span-1">
          <Link to="/" aria-label="INOVASS beranda">
            <img src={logo} alt="INOVASS" className="h-10 w-auto" loading="lazy" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">Solusi tepat untuk kebutuhan pelatihan, konsultan manajemen, konsultan ISO, dan informasi teknologi Anda.</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-4 space-y-1">
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center text-sm transition-colors hover:text-white">
                      {l.label}
                    </a>
                  ) : (
                    <Link to={l.to} className="inline-flex min-h-[36px] items-center text-sm transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="col-span-2 lg:col-span-1">
          <h2 className="text-sm font-semibold text-white">Office</h2>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="leading-relaxed">{contact.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a href={contact.phoneHref} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <img src={contactWhatsApp} alt="" className="h-5 w-5 shrink-0" loading="lazy" />
              <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <EnvelopeIcon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} INOVASS All rights reserved.</span>
          <span>Konsultan ISO &middot; Akreditasi &middot; Pelatihan</span>
        </div>
      </div>
    </footer>
  );
};

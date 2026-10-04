import { useState } from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { PageBanner } from "../../components/ui/PageBanner";
import { Reveal } from "../../components/ui/Reveal";
import KontakForm from "../../formMessage/kontakForm";
import { ModalSuccessError } from "../../formMessage/ModalSuccessError";
import contactWhatsApp from "../../assets/company/contact-wa.svg";
import { contact } from "../../data/site";

const channels = [
  { icon: <PhoneIcon className="h-5 w-5" aria-hidden="true" />, label: "Telepon", value: contact.phone, href: contact.phoneHref },
  { icon: <img src={contactWhatsApp} alt="" className="h-5 w-5" />, label: "WhatsApp", value: contact.phone, href: contact.whatsappHref, external: true },
  { icon: <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: <MapPinIcon className="h-5 w-5" aria-hidden="true" />, label: "Office", value: contact.address },
];

export const KontakInovass = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Pesan dari ${formData.name} - Website INOVASS`;
    const body = `Nama: ${formData.name}\nEmail: ${formData.email}\nNomor Handphone: ${formData.number}\n\nPesan:\n${formData.message}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setModalMessage("Aplikasi email Anda akan terbuka dengan pesan yang sudah terisi. Silakan klik kirim di sana.");
    setIsSuccessModalOpen(true);
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };

  return (
    <>
      <PageBanner title="Kontak Inovass" subtitle="Jika Anda ingin mengetahui lebih lanjut tentang layanan kami, silakan hubungi kami dibawah ini." />

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h2 className="text-h2 font-bold">Hubungi kami</h2>
            <ul className="mt-8 space-y-3">
              {channels.map((c) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-brand">{c.icon}</span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">{c.label}</span>
                      <span className="mt-0.5 block break-words font-medium text-slate-800">{c.value}</span>
                    </span>
                  </>
                );
                const className = "flex items-start gap-4 rounded-2xl border border-slate-200 p-4 transition-colors";
                return (
                  <li key={c.label}>
                    {c.href ? (
                      <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} className={`${className} hover:border-primary/40 hover:bg-primary-50/50`}>
                        {body}
                      </a>
                    ) : (
                      <div className={className}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-slate-200 bg-surface p-6 shadow-lift sm:p-8 md:p-10">
            <h2 className="text-h3 font-bold">Kirim pesan</h2>
            <div className="mt-6">
              <KontakForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
          </Reveal>
        </div>

        <ModalSuccessError
          isSuccess={isSuccessModalOpen}
          isError={isErrorModalOpen}
          closeModal={() => {
            setIsSuccessModalOpen(false);
            setIsErrorModalOpen(false);
          }}
          successMessage={modalMessage}
          errorMessage={modalMessage}
        />
      </section>
    </>
  );
};

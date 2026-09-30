import { Reveal } from "./ui/Reveal";
import { ArrowIcon, Button } from "./ui/Button";
import { contact } from "../data/site";

export const CtaBand = ({ title = "Siap tersertifikasi ISO?", text = "Anda ingin mengetahui lebih lanjut tentang layanan kami? Tim INOVASS siap membantu dari analisis kesenjangan hingga audit." }) => {
  return (
    <section className="container-page py-16 md:py-24">
      <Reveal className="relative isolate overflow-hidden rounded-3xl bg-navy-900 px-6 py-12 text-white sm:px-10 md:px-16 md:py-16">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-primary/50 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-h2 font-bold text-white">{title}</h2>
            <p className="mt-4 text-lead text-white/75">{text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
            <Button href={contact.whatsappHref} variant="accent">
              Konsultasi via WhatsApp
              <ArrowIcon />
            </Button>
            <Button to="/kontak-inovass" variant="ghost">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

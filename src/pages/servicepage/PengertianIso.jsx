import { ServicePageTemplate } from "../../components/service/ServicePageTemplate";

const benefits = ["Memastikan kualitas dan keamanan produk dan layanan.", "Memfasilitasi perdagangan internasional.", "Mendorong inovasi dan efisiensi.", "Melindungi konsumen dan lingkungan."];

const examples = ["ISO 9001: Sistem Manajemen Mutu.", "ISO 14001: Sistem Manajemen Lingkungan.", "ISO 27001: Sistem Manajemen Keamanan Informasi.", "ISO 45001: Sistem Manajemen Keselamatan dan Kesehatan Kerja."];

const fields = ["Teknologi", "Keselamatan", "Kualitas", "Efisiensi", "Keberlanjutan"];

const facts = [
  <>
    <strong className="font-semibold text-slate-900">Organisasi nirlaba internasional</strong> yang berfokus pada pengembangan standar internasional.
  </>,
  <>
    <strong className="font-semibold text-slate-900">Didirikan pada tahun 1947</strong> di Jenewa, Swiss.
  </>,
  <>
    <strong className="font-semibold text-slate-900">Beranggotakan lebih dari 160 badan standardisasi nasional</strong> dari seluruh dunia.
  </>,
];

const isoContent = (
  <div className="grid gap-4 sm:grid-cols-2">
    {facts.map((fact, i) => (
      <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <span className="text-sm font-bold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
        <p className="mt-3 text-slate-600">{fact}</p>
      </div>
    ))}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <span className="text-sm font-bold tabular-nums text-primary">04</span>
      <p className="mt-3 text-slate-600">
        <strong className="font-semibold text-slate-900">Mengembangkan standar untuk berbagai bidang,</strong> seperti:
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {fields.map((f) => (
          <li key={f} className="rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary">
            {f}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const PengertianIso = () => {
  return (
    <ServicePageTemplate
      banner={{ title: "Pengertian ISO", subtitle: "International Organization for Standardization", crumbs: ["Layanan"] }}
      heading="PENGERTIAN ISO"
      intro="ISO adalah singkatan dari International Organization for Standardization."
      sections={[
        { id: "iso", title: "ISO", content: isoContent },
        { id: "manfaat", title: "Manfaat ISO", items: benefits, variant: "checklist" },
        { id: "contoh", title: "Contoh Standar ISO", items: examples, variant: "list" },
      ]}
    />
  );
};

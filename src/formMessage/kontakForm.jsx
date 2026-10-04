const inputClass =
  "block w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 transition-colors focus:border-primary focus:bg-surface focus:outline-none focus:ring-4 focus:ring-primary/15";
const labelClass = "mb-2 block text-sm font-semibold text-slate-800";

const KontakForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <label htmlFor="contact-name" className={labelClass}>
          Nama
        </label>
        <input type="text" id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Nama Lengkap" />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input type="email" id="contact-email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="Email" required />
      </div>
      <div>
        <label htmlFor="contact-number" className={labelClass}>
          Nomor Handphone
        </label>
        <input
          type="tel"
          id="contact-number"
          name="number"
          autoComplete="tel"
          inputMode="numeric"
          value={formData.number}
          onChange={handleChange}
          required
          pattern="[0-9]*"
          title="Nomor handphone hanya boleh berisi angka."
          className={inputClass}
          placeholder="Nomor Handphone"
        />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="contact-message" className={labelClass}>
          Informasi terkait INOVASS
        </label>
        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows="6" className={`${inputClass} resize-y`} placeholder="Masukkan pesan anda"></textarea>
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-primary px-8 font-semibold text-white transition-colors hover:bg-primary-600 sm:w-auto"
        >
          Kirim Pesan Anda
        </button>
      </div>
    </form>
  );
};

export default KontakForm;

import { createBrowserRouter } from "react-router-dom";
import { CompanyPage } from "../pages/CompanyPage";
import { CompanyLayout } from "../layouts/CompanyLayout";

const pages = import.meta.glob(["../pages/servicepage/*.jsx", "../pages/Silabus/*.jsx"]);

const page = (file, name = file.split("/").pop()) => ({
  lazy: async () => {
    const mod = await pages[`../pages/${file}.jsx`]();
    return { Component: mod[name] };
  },
});

const routes = {
  "/quality-management-system": "servicepage/QualityManagementSystem",
  "/sistem-manajemen-lingkungan": "servicepage/SistemManajemenLingkungan",
  "/sistem-manajemen-keselamatan-kesehatan-kerja": "servicepage/SistemManajemenKeselamatanKesehatanKerja",
  "/sistem-manajemen-keamanan-informasi": "servicepage/SistemManajemenKeamananInformasi",
  "/sistem-manajemen-anti-penyuapan": "servicepage/SistemManajemenAntiPenyuapan",
  "/sistem-manajemen-keamanan-pangan": "servicepage/SistemManajemenKeamananPangan",
  "/manajemen-risiko": "servicepage/ManajemenRisiko",
  "/sistem-manajemen-organisasi-pendidikan": "servicepage/SistemManajemenOrganisasiPendidikan",
  "/sistem-manajemen-energi": "servicepage/SistemManajemenEnergi",
  "/standar-internasional-sistem-manajemen-biorisko-laboratorium": "servicepage/StandarInternasionalSistemManajemenBioriskoLaboratorium",
  "/panduan-tanggung-jawab-sosial": "servicepage/PanduanTanggungJawabSosial",
  "/sertifikasi-organisasi": "servicepage/SertifikasiOrganisasi",
  "/sertifikasi-kompetensi-personel": "servicepage/SertifikasiKompetensiPersonel",
  "/akreditasi-organisasi": "servicepage/AkreditasiOrganisasi",
  "/persyaratan-umum-untuk-kompetensi-laboratorium-pengujian-dan-kalibrasi": "servicepage/PersyaratanUmumUntukKompetensiLaboratoriumPengujiandanKalibrasi",
  "/persyaratan-umum-untuk-pengoperasian-berbagai-jenis-lembaga-inspeksi": "servicepage/PersyaratanUmumUntukPengoperasianBebagaiJenisLembagaInspeksi",
  "/penilaian-kesesuaian-persyaratan-umum-untuk-badan-sertifikasi-personel": "servicepage/PenilaianKesesuaianPersyaratanUmumUntukBadanSertifikasiPersonel",
  "/penilaian-kesesuaian-persyaratan-umum-untuk-kemahiran-pengujian-dan-kalibrasi-laboratorium": "servicepage/PenilaianKesesuaianPersyaratanUmumUntukKemahiranPengujiandanKalibrasiLaboratorium",
  "/persyaratan-mutu-dan-kompetensi-untuk-laboratorium-medis": "servicepage/PersyaratanMutudanKompetensiUntukLaboratoriumMedis",
  "/pelatihan-sertifikasi": "servicepage/PelatihanSertifikasi",
  "/pelatihan-akreditasi": "servicepage/PelatihanAkreditasi",
  "/pelatihan-parawisata-dan-perhotelan": "servicepage/PelatihanParawisataPerhotelan",
  "/silabus-iso17025-2017": "Silabus/SilabusAkreditasiLabPengujian",
  "/pengertian-iso": "servicepage/PengertianIso",
  "/tentang-kami": "servicepage/TentangKami",
  "/kontak-inovass": "servicepage/KontakInovass",
  "/klien-kami": "servicepage/KlienKami",
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CompanyLayout />,
    children: [{ path: "/", element: <CompanyPage /> }, ...Object.entries(routes).map(([path, file]) => ({ path, ...page(file) }))],
  },
]);

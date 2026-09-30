import { Link } from "react-router-dom";
import { TrainingList } from "../../components/service/TrainingList";

export const PelatihanAkreditasi = () => {
  const accordionData = [
    // 1. PELATIHAN ISO/SNI 17025 : 2017, STANDAR AKREDITASI LABORATORIUM PENGUJIAN, SAMPLING DAN KALIBRASI BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM.
    {
      title: "Pelatihan ISO/SNI 17025:2017 Standar Akreditasi Laboratorium Pengujian, Sampling, dan Kalibrasi Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <Link to="/silabus-iso17025-2017" className="text-blue-500 underline">
              <span>Silabus atau Rencana Pelatihan ISO/SNI 17025:2017</span>
            </Link>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman komprehensif mengenai standar ISO/SNI 17025:2017, yang merupakan standar internasional bagi laboratorium pengujian dan kalibrasi. Dengan pemahaman standar ini, laboratorium
              dapat mencapai akreditasi yang menunjukkan kompetensi teknis dan validitas hasil uji atau kalibrasi yang terpercaya. Selain itu, pelatihan ini juga bertujuan untuk melatih peserta dalam implementasi Document & Digital Filling
              System, sebuah sistem digital untuk pengelolaan dokumen yang memudahkan akses, pelacakan, serta penyimpanan dokumen secara efisien.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kompetensi dan Kepercayaan</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Dokumentasi</span>
              </li>
              <li>
                <span className="font-normal">Kepatuhan terhadap Persyaratan Akreditasi</span>
              </li>
              <li>
                <span className="font-normal">Meningkatkan Peluang Bisnis</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer laboratorium dan kepala bagian pengujian atau kalibrasi</span>
              </li>
              <li>
                <span className="font-normal">Personil yang terlibat dalam kegiatan pengujian, sampling, dan kalibrasi di laboratorium</span>
              </li>
              <li>
                <span className="font-normal">Staf dokumentasi yang bertugas dalam pengelolaan dan penyimpanan dokumen</span>
              </li>
              <li>
                <span className="font-normal">Tim manajemen mutu yang bertanggung jawab dalam memastikan kepatuhan laboratorium terhadap standar ISO/SNI 17025</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Menerapkan standar ISO/SNI 17025:2017 dalam operasional laboratorium, mencakup prosedur pengujian, sampling, dan kalibrasi yang sesuai standar akreditasi</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumen laboratorium dengan Document & Digital Filling System, sehingga dokumentasi hasil uji dan kalibrasi lebih teratur dan efisien</span>
              </li>
              <li>
                <span className="font-normal">Menyusun dan memperbarui prosedur laboratorium yang sesuai dengan prinsip standar, memastikan konsistensi dan validitas dalam hasil uji atau kalibrasi</span>
              </li>
              <li>
                <span className="font-normal">Mengidentifikasi area yang perlu ditingkatkan dalam rangka mempertahankan akreditasi ISO/SNI 17025:2017</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Dengan pelatihan ini, laboratorium akan lebih siap dalam menjalankan operasional yang sesuai standar, memberikan hasil uji dan kalibrasi yang dapat dipercaya, serta meningkatkan efisiensi dalam pengelolaan dokumen
              laboratorium.
            </span>
          </div>
        </div>
      ),
    },
    //2. PELATIHAN ISO 17020 : 2012, STANDAR AKREDITASI LEMBAGA INSPEKSI BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan ISO 17020:2012 Standar Akreditasi Lembaga Inspeksi Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman yang mendalam tentang standar ISO 17020:2012, yang merupakan acuan bagi akreditasi lembaga inspeksi. Standar ini memastikan bahwa lembaga inspeksi memiliki kompetensi,
              ketidakberpihakan, dan konsistensi dalam operasionalnya. Selain itu, pelatihan ini juga bertujuan untuk melatih peserta dalam penerapan Document & Digital Filling System, yang akan meningkatkan efisiensi dan akurasi dalam
              pengelolaan dokumen dan pelaporan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kepercayaan Klien</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Pengelolaan Dokumen</span>
              </li>
              <li>
                <span className="font-normal">Peningkatan Kualitas Layanan</span>
              </li>
              <li>
                <span className="font-normal">Kepatuhan Terhadap Regulasi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer dan kepala bagian inspeksi yang bertanggung jawab atas kualitas dan hasil inspeksi</span>
              </li>
              <li>
                <span className="font-normal">Staf inspeksi yang terlibat langsung dalam proses evaluasi, penilaian, dan pelaporan hasil inspeksi</span>
              </li>
              <li>
                <span className="font-normal">Tim manajemen mutu atau dokumentasi yang mengelola dokumen dan proses akreditasi</span>
              </li>
              <li>
                <span className="font-normal">Personil administrasi yang bertugas dalam penyimpanan, pengarsipan, dan pelacakan dokumen inspeksi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Memahami dan menerapkan standar ISO 17020:2012 dalam operasional lembaga inspeksi, yang mencakup aspek ketidakberpihakan, kompetensi teknis, dan manajemen kualitas</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumen dan catatan inspeksi dengan Document & Digital Filling System, memungkinkan akses cepat dan keamanan dokumen yang lebih baik</span>
              </li>
              <li>
                <span className="font-normal">Menyusun prosedur operasional yang sesuai dengan prinsip standar ISO 17020:2012, memastikan bahwa seluruh kegiatan inspeksi dilakukan secara konsisten dan terstruktur</span>
              </li>
              <li>
                <span className="font-normal">Mengidentifikasi peluang perbaikan dalam rangka mempertahankan akreditasi, memperkuat proses inspeksi, dan mendukung peningkatan kepuasan klien</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Dengan pelatihan ini, lembaga inspeksi akan lebih siap dalam menjalankan fungsinya sesuai standar internasional, meningkatkan kepercayaan klien, dan menciptakan sistem dokumentasi yang modern serta efisien.
            </span>
          </div>
        </div>
      ),
    },
    //3. PELATIHAN ISO 17024 : 2012 STANDAR AKREDITASI LEMBAGA SERTIFIKASI PERSONEL BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan ISO 17024:2012 Standar Akreditasi Lembaga Sertifikasi Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk membantu lembaga sertifikasi memahami dan menerapkan standar ISO 17024:2012 dalam proses sertifikasi personel. Standar ini mengatur persyaratan yang harus dipenuhi lembaga sertifikasi untuk
              memastikan kredibilitas dan kualitas sertifikasi yang mereka berikan. Selain itu, pelatihan ini juga mengajarkan penggunaan Document & Digital Filling System untuk menyusun, menyimpan, dan mengelola dokumen sertifikasi
              personel secara lebih efisien.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Meningkatkan Kepercayaan Publik</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Pengelolaan Dokumen</span>
              </li>
              <li>
                <span className="font-normal">Memastikan Kualitas Sertifikasi Personel</span>
              </li>
              <li>
                <span className="font-normal">Kepatuhan Terhadap Persyaratan Hukum</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer atau kepala bagian sertifikasi yang bertanggung jawab atas proses dan kebijakan sertifikasi personel</span>
              </li>
              <li>
                <span className="font-normal">Staf yang terlibat dalam verifikasi dan evaluasi sertifikasi personel</span>
              </li>
              <li>
                <span className="font-normal">Tim manajemen mutu atau dokumentasi yang mengelola rekam jejak dan arsip sertifikasi</span>
              </li>
              <li>
                <span className="font-normal">Personil IT atau administrasi yang bertugas dalam pengelolaan Document & Digital Filling System untuk dokumentasi sertifikasi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Menerapkan persyaratan ISO 17024:2012 untuk memperkuat integritas dan kredibilitas sertifikasi personel</span>
              </li>
              <li>
                <span className="font-normal">Mengimplementasikan Document & Digital Filling System, memungkinkan pengelolaan dokumen yang lebih aman, mudah diakses, dan terstruktur</span>
              </li>
              <li>
                <span className="font-normal">Menyusun kebijakan dan prosedur sertifikasi personel sesuai dengan standar internasional yang diakui</span>
              </li>
              <li>
                <span className="font-normal">Menjamin kepatuhan lembaga terhadap standar dan meningkatkan kepuasan klien melalui layanan sertifikasi yang berkualitas</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini membantu lembaga sertifikasi untuk menjadi lebih profesional dan andal, serta mendukung upaya peningkatan kualitas sertifikasi personel melalui sistem pengarsipan dokumen yang modern dan efisien.
            </span>
          </div>
        </div>
      ),
    },
    //4. PELATIHAN ISO 17043:2023 STANDAR AKREDITASI LEMBAGA PENYELENGGARA UJI PROFISIENSI BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan ISO 17043:2023 Standar Akreditasi Lembaga Penyelenggara Uji Profisiensi Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman mendalam mengenai persyaratan standar ISO 17043:2023, yang khusus ditujukan bagi lembaga penyelenggara uji profisiensi. Standar ini bertujuan untuk memastikan bahwa lembaga
              uji profisiensi memenuhi persyaratan internasional dalam menyelenggarakan dan mengelola program uji yang kredibel dan objektif. Selain itu, pelatihan ini juga melatih peserta untuk menerapkan sistem Document & Digital Filling
              System yang membantu dalam pengelolaan dan pengarsipan dokumen terkait uji profisiensi dengan lebih terstruktur dan efisien.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kualitas Pengelolaan Uji Profisiensi</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Dokumentasi</span>
              </li>
              <li>
                <span className="font-normal">Memperkuat Kepercayaan Klien dan Pemangku Kepentingan</span>
              </li>
              <li>
                <span className="font-normal">Memastikan Kepatuhan terhadap Standar Internasional</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer atau pimpinan lembaga penyelenggara uji profisiensi yang bertanggung jawab atas kebijakan dan prosedur uji</span>
              </li>
              <li>
                <span className="font-normal">Personil yang terlibat langsung dalam pelaksanaan dan pengawasan uji profisiensi</span>
              </li>
              <li>
                <span className="font-normal">Staf bagian administrasi atau dokumentasi yang menangani pengarsipan dokumen uji</span>
              </li>
              <li>
                <span className="font-normal">Personil TI yang bertugas dalam pengelolaan sistem pengarsipan digital dan keamanan data</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Menerapkan standar ISO 17043:2023 dalam prosedur dan kebijakan uji profisiensi yang kredibel dan terpercaya</span>
              </li>
              <li>
                <span className="font-normal">Mengimplementasikan Document & Digital Filling System untuk pengarsipan dokumen uji profisiensi yang aman, mudah diakses, dan efisien</span>
              </li>
              <li>
                <span className="font-normal">Menjamin kepatuhan lembaga terhadap standar internasional, sehingga meningkatkan kredibilitas dan reputasi di mata klien dan regulator</span>
              </li>
              <li>
                <span className="font-normal">Mengoptimalkan proses manajemen data dan dokumentasi yang terintegrasi, mengurangi kesalahan, dan memastikan data selalu tersedia saat dibutuhkan</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini membantu lembaga penyelenggara uji profisiensi untuk memaksimalkan kualitas dan efisiensi pengelolaan dokumen mereka, serta memberikan nilai tambah dalam membangun kepercayaan dan kredibilitas di tingkat nasional
              dan internasional.
            </span>
          </div>
        </div>
      ),
    },
    //5. PELATIHAN SNI ISO/IEC 17029:2019, (Penilaian Kesesuaian - Prinsip dan Persyaratan Umum bagi Lembaga Validasi dan Verifikasi) BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan SNI ISO/IEC 17029:2019 (Penilaian Kesesuaian - Prinsip dan Persyaratan Umum bagi Lembaga Validasi dan Verifikasi) Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman komprehensif tentang standar SNI ISO/IEC 17029:2019 yang mengatur prinsip dan persyaratan umum bagi lembaga validasi dan verifikasi. Dengan mengikuti pelatihan ini, peserta
              akan memahami cara penerapan standar ini dalam berbagai proses validasi dan verifikasi, memastikan bahwa lembaga mereka dapat menjalankan fungsi penilaian kesesuaian secara efektif dan sesuai standar internasional. Sistem
              Document & Digital Filling System yang diterapkan dalam pelatihan ini bertujuan untuk meningkatkan efisiensi pengelolaan dokumentasi, mempermudah akses, dan menjaga keamanan data.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kualitas Validasi dan Verifikasi</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi dalam Pengelolaan Dokumentasi</span>
              </li>
              <li>
                <span className="font-normal">Membangun Kepercayaan Klien</span>
              </li>
              <li>
                <span className="font-normal">Kepatuhan terhadap Standar Internasional</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer dan pimpinan lembaga yang terlibat dalam kegiatan validasi dan verifikasi</span>
              </li>
              <li>
                <span className="font-normal">Staf operasional yang terlibat langsung dalam proses validasi dan verifikasi</span>
              </li>
              <li>
                <span className="font-normal">Personil bagian administrasi atau pengelola dokumentasi yang menangani pengarsipan dokumen</span>
              </li>
              <li>
                <span className="font-normal">Personil teknologi informasi yang bertanggung jawab atas pengelolaan sistem digital filling dan keamanan data</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Menerapkan standar SNI ISO/IEC 17029:2019 dalam proses validasi dan verifikasi untuk mencapai hasil yang andal dan sesuai standar</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumen dengan sistem digital yang aman dan mudah diakses menggunakan Document & Digital Filling System</span>
              </li>
              <li>
                <span className="font-normal">Memastikan kepatuhan lembaga terhadap persyaratan internasional, meningkatkan kredibilitas dan kemampuan bersaing di pasar global</span>
              </li>
              <li>
                <span className="font-normal">Mengoptimalkan efektivitas pengelolaan data dan dokumentasi, sehingga memudahkan akses, mempercepat proses validasi, dan mengurangi potensi kesalahan</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini tidak hanya membantu dalam pemenuhan standar internasional tetapi juga mendukung efisiensi kerja di lembaga validasi dan verifikasi, sehingga semakin meningkatkan mutu, keamanan, dan kecepatan proses operasional
              lembaga.
            </span>
          </div>
        </div>
      ),
    },
    //6. PELATIHAN ISO 17034:2016 (Persyaratan Umum Kompetensi Produsen Bahan Acuan) BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan ISO 17034:2016 (Persyaratan Umum Kompetensi Produsen Bahan Acuan) Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman yang mendalam mengenai standar ISO 17034:2016 yang mencakup persyaratan kompetensi untuk produsen bahan acuan. Peserta akan belajar cara memastikan bahwa produk acuan yang
              dihasilkan memenuhi standar internasional, mulai dari proses produksi hingga pengelolaan dokumentasi secara digital. Melalui Document & Digital Filling System, pelatihan ini juga bertujuan untuk meningkatkan efisiensi
              pengelolaan dokumen produksi dan mendukung akses yang mudah dan cepat terhadap informasi bahan acuan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Kepatuhan terhadap Standar Internasional</span>
              </li>
              <li>
                <span className="font-normal">Pengelolaan Dokumentasi yang Efisien</span>
              </li>
              <li>
                <span className="font-normal">Peningkatan Kualitas Produk</span>
              </li>
              <li>
                <span className="font-normal">Kepercayaan Pelanggan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer produksi dan kualitas di perusahaan produsen bahan acuan</span>
              </li>
              <li>
                <span className="font-normal">Staf teknis yang terlibat langsung dalam pembuatan dan pengujian bahan acuan</span>
              </li>
              <li>
                <span className="font-normal">Personil bagian dokumentasi dan administrasi yang menangani pengelolaan dokumen produksi</span>
              </li>
              <li>
                <span className="font-normal">Spesialis TI yang bertanggung jawab atas pengembangan dan pemeliharaan sistem digital filling</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Memahami dan menerapkan standar ISO 17034:2016 dalam proses produksi bahan acuan</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumentasi produk dengan Document & Digital Filling System untuk meningkatkan efisiensi dan keamanan data</span>
              </li>
              <li>
                <span className="font-normal">Menjamin kualitas produk bahan acuan yang sesuai standar, serta memastikan bahwa produk tersebut dapat diandalkan untuk kebutuhan pengujian, kalibrasi, atau riset ilmiah</span>
              </li>
              <li>
                <span className="font-normal">Menyusun prosedur yang mematuhi standar internasional, sehingga lembaga dapat meningkatkan kredibilitasnya di tingkat global</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini membantu produsen bahan acuan dalam mencapai standar kualitas yang tinggi, dengan dukungan teknologi yang memudahkan pengelolaan dokumen dan menjamin akses informasi yang cepat dan aman.
            </span>
          </div>
        </div>
      ),
    },
    //7. PELATIHAN SNI ISO/IEC 17065:2012 (Penilaian kesesuaian - Persyaratan untuk lembaga sertifikasi produk, proses, dan jasa ) BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM
    {
      title: "Pelatihan SNI ISO/IEC 17065:2012 (Penilaian kesesuaian - Persyaratan untuk lembaga sertifikasi produk, proses, dan jasa) Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memberikan pemahaman mendalam mengenai standar SNI ISO/IEC 17065:2012, yang mencakup persyaratan bagi lembaga sertifikasi dalam memastikan kesesuaian produk, proses, dan jasa dengan standar yang
              ditetapkan. Peserta akan belajar bagaimana mengelola dokumen sertifikasi secara efisien melalui sistem pengarsipan digital (Document & Digital Filling System), serta bagaimana menjalankan proses penilaian kesesuaian secara
              sistematis dan akurat.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Memastikan Kualitas dan Kepatuhan</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Pengelolaan Dokumen</span>
              </li>
              <li>
                <span className="font-normal">Meningkatkan Profesionalitas</span>
              </li>
              <li>
                <span className="font-normal">Meminimalkan Risiko Kesalahan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Auditor dan manajer yang bekerja di lembaga sertifikasi produk, proses, atau jasa</span>
              </li>
              <li>
                <span className="font-normal">Staf teknis yang bertanggung jawab dalam penilaian kesesuaian dan pengelolaan dokumen sertifikasi</span>
              </li>
              <li>
                <span className="font-normal">Personil bagian dokumentasi dan administrasi yang mengelola arsip sertifikasi</span>
              </li>
              <li>
                <span className="font-normal">Tim teknologi informasi yang mengelola Document & Digital Filling System untuk pengarsipan dokumen sertifikasi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Memahami dan mengimplementasikan standar SNI ISO/IEC 17065:2012 dalam kegiatan sertifikasi</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumen sertifikasi dengan menggunakan Document & Digital Filling System, sehingga seluruh arsip dapat diakses secara cepat dan aman</span>
              </li>
              <li>
                <span className="font-normal">Menjalankan prosedur penilaian kesesuaian yang sesuai standar internasional, meningkatkan kepercayaan pelanggan terhadap proses sertifikasi</span>
              </li>
              <li>
                <span className="font-normal">Membuat sistem pemantauan yang terstruktur untuk menjaga kualitas produk, proses, atau jasa yang disertifikasi</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini memastikan lembaga sertifikasi memiliki sistem pengelolaan dokumen yang modern dan efektif, sehingga mampu mempertahankan integritas dan kredibilitas lembaga dalam penilaian kesesuaian terhadap produk, proses,
              atau jasa yang mereka sertifikasi.
            </span>
          </div>
        </div>
      ),
    },
    //8. PELATIHAN ISO 15189:2012, BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM (standar internasional yang menetapkan persyaratan khusus untuk kualitas dan kompetensi laboratorium medis)
    {
      title: "Pelatihan ISO 15189:2012 (standar internasional yang menetapkan persyaratan khusus untuk kualitas dan kompetensi laboratorium medis) Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini bertujuan untuk memperkenalkan persyaratan ISO 15189:2012, yang merupakan standar internasional bagi laboratorium medis untuk menjamin kualitas dan kompetensi dalam operasionalnya. Peserta akan belajar menerapkan
              standar ini secara efektif dengan bantuan sistem pengelolaan dokumen digital, yang memfasilitasi pemenuhan persyaratan dokumentasi secara efisien dan akurat. Pelatihan ini juga membantu laboratorium medis memastikan hasil
              pengujian yang andal dan berkualitas tinggi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kualitas Pelayanan</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi Pengelolaan Dokumen</span>
              </li>
              <li>
                <span className="font-normal">Memperkuat Kepercayaan Pasien dan Mitra</span>
              </li>
              <li>
                <span className="font-normal">Kompetensi Personil yang Tinggi</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer dan kepala laboratorium medis yang bertanggung jawab atas sistem manajemen mutu</span>
              </li>
              <li>
                <span className="font-normal">Petugas teknis dan analis laboratorium yang terlibat dalam pengujian, validasi, dan pemantauan kualitas hasil</span>
              </li>
              <li>
                <span className="font-normal">Tim dokumentasi dan administrasi yang menangani pengarsipan dokumen dan pencatatan hasil pengujian</span>
              </li>
              <li>
                <span className="font-normal">Personil IT yang bertugas mengelola Document & Digital Filling System untuk mendukung dokumentasi laboratorium</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Mengimplementasikan persyaratan ISO 15189:2012 di laboratorium medis sesuai prosedur yang terstandarisasi</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumentasi laboratorium menggunakan Document & Digital Filling System, sehingga lebih terstruktur, aman, dan mudah diakses</span>
              </li>
              <li>
                <span className="font-normal">Menjamin hasil uji laboratorium yang akurat dan berkualitas tinggi, serta mematuhi peraturan yang berlaku</span>
              </li>
              <li>
                <span className="font-normal">Menyusun sistem audit internal yang efektif untuk memantau dan meningkatkan kualitas layanan laboratorium</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">Dengan pelatihan ini, laboratorium medis dapat menunjukkan komitmen pada kualitas dan kompetensi yang unggul, serta meningkatkan kepercayaan publik dan daya saing institusi.</span>
          </div>
        </div>
      ),
    },
    //9. PELATIHAN ISO/IEC 20387:2018, BERBASIS DOCUMENT & DIGITAL FILLING SYSTEM (standar internasional yang menetapkan persyaratan untuk kompetensi dan konsistensi operasi biobank)
    {
      title: "Pelatihan ISO/IEC 20387:2018 (standar internasional yang menetapkan persyaratan untuk kompetensi dan konsistensi operasi biobank) Berbasis Document & Digital Filling System",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-primary">Durasi Pelatihan: 2 Hari</h3>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Tujuan Pelatihan:</h3>
            <p className="text-gray-600">
              Pelatihan ini dirancang untuk memberikan pemahaman mendalam tentang ISO/IEC 20387:2018, yang merupakan standar internasional yang menetapkan persyaratan bagi biobank agar dapat beroperasi secara konsisten dan kompeten. Dengan
              basis Document & Digital Filling System, pelatihan ini membantu peserta untuk mempelajari cara mengelola dokumentasi dengan lebih terstruktur, mengamankan data, dan memastikan kesesuaian operasional dengan standar
              internasional.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Manfaat Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-2">
              <li>
                <span className="font-normal">Peningkatan Kompetensi Biobank</span>
              </li>
              <li>
                <span className="font-normal">Efisiensi dalam Pengelolaan Data</span>
              </li>
              <li>
                <span className="font-normal">Konsistensi Operasional</span>
              </li>
              <li>
                <span className="font-normal">Meningkatkan Reputasi dan Kepercayaan Stakeholder</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Saran Personil yang Mengikuti Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Manajer biobank dan kepala laboratorium yang bertanggung jawab atas sistem manajemen biobank</span>
              </li>
              <li>
                <span className="font-normal">Staf teknis yang terlibat dalam pengumpulan, pengujian, dan penyimpanan sampel</span>
              </li>
              <li>
                <span className="font-normal">Personil administrasi yang bertugas mengelola dokumentasi dan pencatatan data biobank</span>
              </li>
              <li>
                <span className="font-normal">Tim IT yang mengelola Document & Digital Filling System untuk memastikan integritas dan keamanan data</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Output dari Hasil Pelatihan:</h3>
            <ul className="list-decimal pl-5 space-y-1">
              <li>
                <span className="font-normal">Mengimplementasikan ISO/IEC 20387:2018 di biobank untuk memenuhi standar kompetensi dan konsistensi operasional</span>
              </li>
              <li>
                <span className="font-normal">Mengelola dokumen dengan sistem digital, sehingga data lebih terstruktur, terlacak, dan mudah diakses saat diperlukan</span>
              </li>
              <li>
                <span className="font-normal">Meningkatkan akurasi dalam pengelolaan data biologi, dari pengumpulan hingga penyimpanan</span>
              </li>
              <li>
                <span className="font-normal">Menyusun dan menerapkan sistem audit untuk mengawasi kesesuaian dan keberlanjutan operasional biobank sesuai standar</span>
              </li>
            </ul>
          </div>
          <div>
            <span className="font-normal mb-2">
              Pelatihan ini diharapkan dapat membantu biobank menjalankan operasional yang profesional, terstandarisasi, dan memenuhi persyaratan internasional, sehingga dapat memberikan layanan yang lebih andal dan terpercaya.
            </span>
          </div>
        </div>
      ),
    },
  ];
  return <TrainingList banner={{ title: "Pelatihan dan Pendampingan Akreditasi", crumbs: ["Layanan", "Pelatihan"] }} heading="Daftar Pelatihan dan Pendampingan Akreditasi PT. INOVASS Tahun 2024-2025" items={accordionData} />;
};

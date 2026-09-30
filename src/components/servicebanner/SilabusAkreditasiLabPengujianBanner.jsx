import { ChevronRightIcon } from "@heroicons/react/24/solid";
import companyVideoBanner from "../../assets/company/company-banner-video.webm";

export const SilabusAkreditasiLabPengujianBanner = () => {
  return (
    <div className="relative w-screen h-full overflow-hidden">
      <video muted autoPlay playsInline loop disablePictureInPicture src={companyVideoBanner} className="object-cover h-[297px] min-w-full"></video>
      <div className="flex flex-col">
        <div className="absolute bottom-28 left-4 md:left-14 flex items-center justify-start w-screen ">
          <div className="flex flex-col gap-2 text-left text-white">
            <h1 className="font-semibold text-lg md:text-2xl">Silabus Pelatihan ISO/SNI 17025:2017</h1>
            <div className="flex flex-row gap-1">
              <span className="text-sm font-thin">Layanan</span>
              <ChevronRightIcon className="h-4" />
              <span className="text-sm font-semibold">Pelatihan dan Pendampingan Sertifikasi</span>
              <ChevronRightIcon className="h-4" />
              <span className="text-sm font-semibold">Silabus ISO/SNI 17025:2017 </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

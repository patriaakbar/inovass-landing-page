import { useEffect } from "react";

const SITE = "INOVASS Consulting";
const DEFAULT_DESCRIPTION =
  "INOVASS Consulting: konsultan sertifikasi ISO, akreditasi laboratorium, dan pelatihan sistem manajemen untuk organisasi di seluruh Indonesia.";

export const usePageMeta = (title, description = DEFAULT_DESCRIPTION) => {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Konsultan ISO, Akreditasi & Pelatihan`;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [title, description]);
};

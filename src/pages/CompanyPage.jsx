import { CompanyBanner } from "../components/CompanyBanner";
import { CompanyStats } from "../components/CompanyStats";
import { CompanyService } from "../components/CompanyService";
import { CompanyStandards } from "../components/CompanyStandards";
import { CompanyCollaboration } from "../components/CompanyCollaboration";
import { CompanyProduct } from "../components/CompanyProduct";
import { CtaBand } from "../components/CtaBand";
import { usePageMeta } from "../hooks/usePageMeta";

export const CompanyPage = () => {
  usePageMeta();
  return (
    <>
      <CompanyBanner />
      <CompanyStats />
      <CompanyService />
      <CompanyStandards />
      <CompanyCollaboration />
      <CompanyProduct />
      <CtaBand />
    </>
  );
};

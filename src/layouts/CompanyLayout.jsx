import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CompanyNavbar } from "../components/CompanyNavbar";
import { CompanyFooter } from "../components/CompanyFooter";

export const CompanyLayout = () => {
  const { pathname } = useLocation();
  const outlet = useOutlet();

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <CompanyNavbar />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.main
          id="main"
          key={pathname}
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <CompanyFooter />
    </div>
  );
};

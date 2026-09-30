import { motion } from "framer-motion";
import { ease } from "./motion";

export const Reveal = ({ as = "div", delay = 0, y = 24, className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </Component>
  );
};

const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const Stagger = ({ as = "div", className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -10% 0px" }} className={className} {...rest}>
      {children}
    </Component>
  );
};

export const StaggerItem = ({ as = "div", className, children, ...rest }) => {
  const Component = motion[as];
  return (
    <Component variants={staggerItem} className={className} {...rest}>
      {children}
    </Component>
  );
};

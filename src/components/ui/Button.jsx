import { Link } from "react-router-dom";

const variants = {
  accent: "bg-accent text-navy-950 hover:bg-accent-600 shadow-[0_8px_24px_-8px_rgb(245_197_24/0.6)]",
  primary: "bg-primary text-white hover:bg-primary-600",
  ghost: "bg-white/10 text-white ring-1 ring-inset ring-white/30 hover:bg-white/20 backdrop-blur",
  outline: "bg-surface text-slate-900 ring-1 ring-inset ring-slate-300 hover:ring-slate-400 hover:bg-slate-50",
};

const base =
  "group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-[background-color,box-shadow,transform] duration-200 active:scale-[0.98] sm:text-base";

export const Button = ({ to, href, variant = "primary", className = "", children, ...rest }) => {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...rest}>
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export const ArrowIcon = ({ className = "" }) => (
  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}>
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

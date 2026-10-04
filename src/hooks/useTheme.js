import { useCallback, useSyncExternalStore } from "react";

const STORAGE_KEY = "theme";
const listeners = new Set();
const systemQuery = typeof window !== "undefined" ? window.matchMedia("(prefers-color-scheme: dark)") : null;

const readStored = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
};

const getTheme = () => (document.documentElement.classList.contains("dark") ? "dark" : "light");

const applyTheme = (theme, { animate = false } = {}) => {
  const root = document.documentElement;
  if (animate && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    root.classList.add("theme-anim");
    window.setTimeout(() => root.classList.remove("theme-anim"), 350);
  }
  root.classList.toggle("dark", theme === "dark");
  listeners.forEach((notify) => notify());
};

systemQuery?.addEventListener("change", (event) => {
  if (!readStored()) applyTheme(event.matches ? "dark" : "light", { animate: true });
});

const subscribe = (notify) => {
  listeners.add(notify);
  return () => listeners.delete(notify);
};

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");

  const toggle = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // storage blocked: theme still applies for this visit
    }
    applyTheme(next, { animate: true });
  }, []);

  return { theme, toggle };
};

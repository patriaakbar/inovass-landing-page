const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;
const scale = (name, steps) => Object.fromEntries(steps.map((step) => [step, token(`${name}-${step}`)]));
const neutral = scale("slate", [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]);

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        canvas: token("canvas"),
        surface: token("surface"),
        brand: token("brand"),
        slate: neutral,
        gray: neutral,
        primary: {
          50: token("primary-50"),
          100: "#cfdeee",
          200: "#9fbddd",
          300: "#709dcd",
          400: "#407cbc",
          DEFAULT: "#105bab",
          600: "#0d4989",
          700: "#0a3767",
          800: "#062444",
          900: "#031222",
        },
        navy: {
          DEFAULT: "#004464",
          50: "#eef4f8",
          100: "#d5e3ec",
          600: "#0a3a5c",
          700: "#082f4b",
          800: "#07243b",
          900: "#051a2c",
          950: "#03101c",
        },
        accent: {
          50: "#fff9e1",
          100: "#fff0b3",
          DEFAULT: "#f5c518",
          500: "#f5c518",
          600: "#d9a90a",
          700: "#a88105",
        },
        mint: {
          DEFAULT: "#2fd69a",
          600: "#1fb07c",
        },
        secondary: {
          100: "#f9fcff",
          200: "#f3f9ff",
          300: "#edf6ff",
          400: "#e7f3ff",
          DEFAULT: "#e1f0ff",
          600: "#b4c0cc",
          700: "#879099",
          800: "#5a6066",
          900: "#2d3033",
        },
        warning: {
          100: "#fff3cd",
          200: "#ffe69c",
          300: "#ffda6a",
          400: "#ffcd39",
          DEFAULT: "#ffc107",
          600: "#cc9a06",
          700: "#997404",
          800: "#664d03",
          900: "#332701",
        },
        danger: {
          100: "#fcdcdc",
          200: "#f9baba",
          300: "#f69797",
          400: "#f37575",
          DEFAULT: "#f05252",
          600: "#c04242",
          700: "#903131",
          800: "#602121",
          900: "#301010",
        },
        green: {
          100: "#dcefdd",
          200: "#b9dfbb",
          300: "#96d098",
          400: "#73c076",
          DEFAULT: "#50b054",
          600: "#408d43",
          700: "#306a32",
          800: "#204622",
          900: "#102311",
        },
      },
      fontSize: {
        "display": ["clamp(2.25rem, 1.4rem + 3.6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "h2": ["clamp(1.75rem, 1.35rem + 1.7vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "h3": ["clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "lead": ["clamp(1rem, 0.95rem + 0.3vw, 1.175rem)", { lineHeight: "1.7" }],
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(var(--shadow) / var(--shadow-a1)), 0 4px 12px rgb(var(--shadow) / var(--shadow-a2))",
        lift: "0 2px 4px rgb(var(--shadow) / var(--shadow-a1)), 0 12px 32px -4px rgb(var(--shadow) / var(--shadow-a3))",
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 60s) linear infinite",
        "marquee-reverse": "marquee var(--marquee-duration, 60s) linear infinite reverse",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

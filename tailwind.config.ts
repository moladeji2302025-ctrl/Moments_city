import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#050505",
          secondary: "#111111",
          tertiary: "#0a0a0a",
        },
        text: {
          primary: "#F5F5F5",
          secondary: "#A0A0A0",
          muted: "#E0E0E0",
          crimson: "#F5F0F0",
        },
        crimson: {
          core: "#6B0F1A",
          glow: "#A41C2E",
          mist: "#3A080E",
        },
        surface: "#111111",
        border: "#2a2a2a",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        inter: ["var(--font-inter)", "system-ui", "sans-serif"],
        "space-grotesk": ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.02em",
        wide: "0.1em",
        wider: "0.2em",
      },
      lineHeight: {
        relaxed: "1.6",
        loose: "1.7",
      },
    },
  },
  plugins: [],
};
export default config;

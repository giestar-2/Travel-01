import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#B83B0A",
          dark: "#0F172A",
          gray: "#526176",
          light: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

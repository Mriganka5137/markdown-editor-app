import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        "roboto-mono": ["var(--font-roboto-mono)"],
        "roboto-slab": ["var(--font-roboto-slab)"],
      },
      colors: {
        "color-1000": "hsl(var(--color-1000))",
        "color-900": "hsl(var(--color-900))",
        "color-800": "hsl(var(--color-800))",
        "color-700": "hsl(var(--color-700))",
        "color-600": "hsl(var(--color-600))",
        "color-500": "hsl(var(--color-500))",
        "color-400": "hsl(var(--color-400))",
        "color-300": "hsl(var(--color-300))",
        "color-200": "hsl(var(--color-200))",
        "color-100": "hsl(var(--color-100))",
        "color-orange": "hsl(var(--color-orange))",
        "color-orange-hover": "hsl(var(--color-orange-hover))",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;

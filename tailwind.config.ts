import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        hsm: {
          raw: `(min-height: 900px) and (min-width: 375px)`,
        },
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
} satisfies Config;
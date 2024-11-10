import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
};
export default config;

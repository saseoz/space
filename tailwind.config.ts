import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        barlowCon: ['"Barlow Condensed"', 'sans-serif'],
        belle: ['"Bellefair"', 'serif'],
        barlow: ['"Barlow"', 'sans-serif'],
      },
      screens: {
        'xs': '550px',         // mobile
      },
      colors: {
        blueDark: "var(--blue-900)",
        blueLight: "var(--blue-300)",
      },
    },
  },
  plugins: [],
};
export default config;

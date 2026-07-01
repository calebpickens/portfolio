import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "#01200F",
        background: "#F1E7ED",
        primary: "#0D2766",
        secondary: "#1A5F7F",
        accent: "#C4CCD5",
      },
    },
  },
  plugins: [],
};

export default config;

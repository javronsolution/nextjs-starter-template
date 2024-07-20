import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('/images/hero-image.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          800: "#085A35",
          600: "#0C7847",
          400: "#1A985F",
          50: "#EFFFF7",
        },
        text: {
          900: "#000000",
          800: "#333333",
          600: "#3E3E3E",
          400: "#A6A6A6",
          200: "#EDEDED",
        },
        secondary: "#F5EFE6"
      },
    },
  },
  plugins: [],
};
export default config;

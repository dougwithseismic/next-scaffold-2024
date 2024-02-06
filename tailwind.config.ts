import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        outreach: {
          50: "#F0F0FF",
          100: "#DDDBFF",
          200: "#BAB8FF",
          300: "#9D9AFE",
          400: "#7B76FE",
          500: "#5952FE",
          600: "#1911FE",
          700: "#0801CB",
          800: "#050184",
          900: "#030042",
          950: "#010024",
        },
        cyan: {
          50: "#E5FBFF",
          100: "#C7F6FF",
          200: "#94EDFF",
          300: "#5CE4FF",
          400: "#24DAFF",
          500: "#00C5ED",
          600: "#009DBD",
          700: "#00778F",
          800: "#005161",
          900: "#00262E",
          950: "#001519",
        },
        teal: {
          50: "#EBEBFF",
          100: "#D2D2FE",
          200: "#A6A4FE",
          300: "#7E7CFD",
          400: "#524FFD",
          500: "#2522FC",
          600: "#0703E2",
          700: "#0502AB",
          800: "#03026F",
          900: "#020137",
          950: "#01001E",
        },
        foreground: {
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#FAFAFA",
          300: "#FAFAFA",
          400: "#F7F7F7",
          500: "#F5F5F5",
          600: "#C4C4C4",
          700: "#949494",
          800: "#616161",
          900: "#303030",
          950: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
export default config;

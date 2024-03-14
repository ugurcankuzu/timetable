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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-purple":
          "linear-gradient(0deg, rgba(226,226,226,1) 0%, rgba(92,22,78,1) 100%);",
      },
      colors: {
        "snow-white": "#F7F7F7",
        "plum": "#9B287B",
        "palatinate": "#5C164E",
        "dark-purple": "#402039",
        "dried-flower": "#170F11",
      },
    },
  },
  plugins: [],
};
export default config;

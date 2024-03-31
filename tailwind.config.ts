import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        "product": "#8FB2F5",
        "base": {
          "900": "#13131A",
          "800": "#16161F",
          "700": "#1C1C27",
          "600": "#22222F",
          "500": "#3B3B54",
          "400": "#7F7F98",
          "300": "#ABABC4",
          "200": "#BFBFD4",
          "100": "#FAFAFA",
          "white": "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        product: "#8FB2F5",
        base: {
          "900": "#13131A",
          "800": "#16161F",
          "700": "#1C1C27",
          "600": "#22222F",
          "500": "#3B3B54",
          "400": "#7F7F98",
          "300": "#ABABC4",
          "200": "#BFBFD4",
          "100": "#FAFAFA",
          white: "#FFFFFF",
        },
      },
    },
    fontSize: {
      'xs': [
        "12px",
        {
          lineHeight: "16.8px",
          fontWeight: "400",
        },
      ],
      'sm': [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: "400",
        },
      ],
      'md': [
        "16px",
        {
          lineHeight: "22.4px",
        },
      ],
      'lg': [
        "20 px",
        {
          lineHeight: "%140",
        },
      ],
      "heading-hg": [
        "96px",
        {
          lineHeight: "100%",
          fontWeight: "800",
        },
      ],
      "heading-xl": [
        "48px",
        {
          lineHeight: "57.6px",
          fontWeight: "800",
        },
      ],
      "heading-lg": [
        "32px",
        {
          lineHeight: "38.4px",
          fontWeight: "700",
        },
      ],
      "heading-md": [
        "20px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      "heading-sm": [
        "16px",
        {
          lineHeight: "22.4px",
          fontWeight: "700",
        },
      ],
      "heading-xs": [
        "14px",
        {
          lineHeight: "19.6px",
          fontWeight: "700",
        },
      ],
    },
  },
  plugins: [],
};
export default config;

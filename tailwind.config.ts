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
      fontSize: {
        22: "22px",
        24: "24px",
        32: "32px",
        48: "48px",
        80: "80px",
      },
      fontFamily: {
        onest: ["var(--onest)"],
        baiJamjure: ["var(--baijamjure)"],
      },
      colors: {
        myGray: "#E1DEDE",
        myDarkGray: "#5B5757",
        mySmoothGray: "#F6F6F6",
        myBlack: "#161413",
        myOrange: "#FFB93B",
        myBrokenWhite: "#F7F4EE",
      },
      aspectRatio: {
        "16/7": "16 / 7",
        "16/10": "16 / 10",
        "10/9": "10 / 9",
      },
      lineHeight: {
        superThin: "0.9",
      },
      screens: {
        sxl: "2536px",
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
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
} satisfies Config;

export default config;

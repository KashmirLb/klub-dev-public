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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "xs": "calc(385px + 5rem)"
      },
      fontFamily: {
        geistMono: "var(--font-geist-mono)",
        geistSans: "var(--font-geist-sans)",
        spaceMono: "var(--font-space-mono)",
      },
      boxShadow: {
        "projects-card" : "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
      },
      backgroundImage: {
        "grad-1" : "linear-gradient(40deg, #F87874 33%, #FF9769 66%, #FFBB60)",
        "grad-2" : "linear-gradient(90deg, #ff43f1 33%, #6e78ff 66%, #008fff)",
        "grad-3" : "linear-gradient(90deg, #518071 33%, #00c894 66%, #c8fcea)",
        "grad-4" : "linear-gradient(90deg, #38bdf8 33%, #00d2f3 66%, #00e4db)",
      },
      width: {
        "project-card": "clamp(420px, 100%, calc(50vw - 5rem))"
      },
      animation: {
        "fade-in-delayed": "fadeInText .5s ease-in-out 3s 1 forwards",
      }
    },
  },
  plugins: [],
};
export default config;

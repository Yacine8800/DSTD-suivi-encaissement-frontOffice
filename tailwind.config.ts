import { yellow } from "@mui/material/colors";
import type { Config } from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        yellow: "#FBB040",
        green : "#009640",
        bleupie: "#0D1286",
        vertpie: "#0D128626",
      },
      animation: {
        scale: "scale 1s ease-in-out infinite",
      },
      keyframes: {
        scale: {
          "0%, 40%, 100%": { transform: "scaleY(0.05)" },
          "20%": { transform: "scaleY(1)" },
        },
      },
      animationDelay: {
        "800": "-800ms",
        "700": "-700ms",
        "600": "-600ms",
        "500": "-500ms",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

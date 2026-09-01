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
        brand: {
          navy: {
            950: "#040D1A",
            900: "#071A33", // Deep Navy Blue
            850: "#0B2344",
            800: "#102F59",
            750: "#113565",
            700: "#123B6D", // Royal / Digital Blue
            600: "#1A5296",
            500: "#2563EB",
          },
          gold: {
            600: "#A88435",
            500: "#C9A44C", // Metallic Gold
            400: "#E2C76B", // Soft Gold
            300: "#F0DC94",
            200: "#F7EABF",
            100: "#FDF9EB",
          },
          light: "#F7F7F5", // Off White
          dark: "#101828", // Dark Text
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        display: ["'Outfit'", "'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A44C 0%, #E2C76B 50%, #C9A44C 100%)",
        "gold-text-gradient": "linear-gradient(135deg, #DFB75A 0%, #F5E198 45%, #C9A44C 100%)",
        "navy-radial": "radial-gradient(circle at 50% 0%, #123B6D 0%, #071A33 70%, #040D1A 100%)",
        "card-glow": "radial-gradient(circle at top left, rgba(201, 164, 76, 0.12), transparent 70%)",
      },
      boxShadow: {
        "gold-sm": "0 2px 10px rgba(201, 164, 76, 0.2)",
        "gold-md": "0 4px 20px rgba(201, 164, 76, 0.3)",
        "gold-glow": "0 0 35px rgba(201, 164, 76, 0.25)",
        "blue-glow": "0 0 40px rgba(18, 59, 109, 0.4)",
        "screen-bevel": "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)",
      },
      animation: {
        "pulse-subtle": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

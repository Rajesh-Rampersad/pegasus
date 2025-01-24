import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#727C73",
      },
      backgroundImage: {
        banner: "url('/assets/house-banner.png')",
      },
      boxShadow: {
        light: "0px 4px 30px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};

  
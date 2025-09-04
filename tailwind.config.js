/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" }
        }
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeSlow: "marquee 45s linear infinite",
        float: "float 6s ease-in-out infinite"
      },
      boxShadow: {
        glow: "0 0 20px rgba(59, 130, 246, 0.45)"
      }
    },
  },
  plugins: [],
}


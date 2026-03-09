/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        serif: ["'DM Serif Display'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'Outfit'", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0f",
        paper: "#f5f0e8",
        cream: "#ede8dc",
        rust: "#c0392b",
        gold: "#d4a843",
        muted: "#6b6760",
        accent: "#e8552a",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "slide-in": "slideIn 0.6s ease forwards",
        "reveal": "reveal 1s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        reveal: {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0% 0 0)" },
        },
      },
    },
  },
  plugins: [],
};

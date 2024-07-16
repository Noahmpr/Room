import animations from '@midudev/tailwind-animations'
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [animations],
};
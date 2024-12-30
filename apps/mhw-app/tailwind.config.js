import daisyuiPlugin from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../pages/mhw-pages/dist/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyuiPlugin],
};

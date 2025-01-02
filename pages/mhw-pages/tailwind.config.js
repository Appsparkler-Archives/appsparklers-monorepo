import daisyUiPlugin from "daisyui";
import prosePlugin from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["bumblebee"],
  },
  plugins: [daisyUiPlugin, prosePlugin],
};

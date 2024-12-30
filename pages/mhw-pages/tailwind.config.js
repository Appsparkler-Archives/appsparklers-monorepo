import daisyUiPlugin from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
  },
  plugins: [daisyUiPlugin],
};

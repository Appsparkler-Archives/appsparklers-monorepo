import daisyUiPlugin from "daisyui";
import prosePlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./lib/**/*.{html,tsx,ts}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      // "pastel",
      // "light",
      // "dark",
      // "cupcake",
      "bumblebee",
      // "emerald",
      // "corporate",
      // "synthwave",
      // "retro",
      // "cyberpunk",
      // "valentine",
      // "halloween",
      // "garden",
      // "forest",
      // "aqua",
      // "lofi",
      // "pastel",
      // "fantasy",
      // "wireframe",
      // "black",
      // "luxury",
      // "dracula",
      // "cmyk",
      // "autumn",
      // "business",
      // "acid",
      // "lemonade",
      // "night",
      // "coffee",
      // "winter",
      // "dim",
      // "nord",
      // "sunset",
    ],
  },
  plugins: [daisyUiPlugin, prosePlugin],
};

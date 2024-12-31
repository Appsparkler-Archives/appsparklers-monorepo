import daisyuiPlugin from "daisyui";
import { resolve } from "path";

console.log({
  __dirname: __dirname,
  resolved_path: resolve("../../pages/mhw-pages/dist/**/*.{js,jsx,ts,tsx}"),
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [resolve("../../pages/mhw-pages/dist/**/*.{js,jsx,ts,tsx}")],
  daisyui: {
    darkTheme: true,
    themes: [
      // "pastel",
      "light",
      // "dark",
      // "cupcake",
      // "bumblebee",
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
  plugins: [daisyuiPlugin],
};

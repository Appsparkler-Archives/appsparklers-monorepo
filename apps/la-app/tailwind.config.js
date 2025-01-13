// import daisyuiPlugin from "daisyui";
import prosePlugin from "@tailwindcss/typography";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [resolve("../../pages/mhw-pages/lib/**/*.{js,jsx,ts,tsx}")],
  // daisyui: {
  //   darkTheme: true,
  //   themes: [
  //     // "pastel",
  //     // "light",
  //     // "dark",
  //     // "cupcake",
  //     // "bumblebee",
  //     // "emerald",
  //     // "corporate",
  //     // "synthwave",
  //     // "retro",
  //     // "cyberpunk",
  //     // "valentine",
  //     // "halloween",
  //     // "garden",
  //     // "forest",
  //     // "aqua",
  //     // "lofi",
  //     // "pastel",
  //     // "fantasy",
  //     // "wireframe",
  //     // "black",
  //     // "luxury",
  //     // "dracula",
  //     // "cmyk",
  //     // "autumn",
  //     // "business",
  //     // "acid",
  //     // "lemonade",
  //     // "night",
  //     // "coffee",
  //     // "winter",
  //     // "dim",
  //     // "nord",
  //     "sunset",
  //   ],
  // },
  plugins: [
    tailwindcss(),
    // daisyuiPlugin,
    prosePlugin,
  ],
};

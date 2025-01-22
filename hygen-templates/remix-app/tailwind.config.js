import { resolve } from "node:path";
import prosePlugin from "@tailwindcss/typography";
import daisyuiPlugin from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [resolve("../../pages/mhw-pages/lib/**/*.{js,jsx,ts,tsx}")],
	daisyui: {
		darkTheme: true,
		themes: [
			// "pastel",
			// "light",
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
			"garden",
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
	plugins: [daisyuiPlugin, prosePlugin],
};

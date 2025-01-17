import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

const configs = /** @type {import("eslint").Linter.Config[]} */ [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
	{
		ignores: [".gitignore", "build/**/*"],
	},
	{ languageOptions: { globals: { ...globals.browser } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		plugins: {
			import: importPlugin,
			react: pluginReact,
		},
		rules: {
			"no-unused-vars": "off",
			"import/no-dynamic-require": "warn",
			"import/no-nodejs-modules": "warn",
			"react/react-in-jsx-scope": "off",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];

export default configs;

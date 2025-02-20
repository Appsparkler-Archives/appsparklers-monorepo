import pluginJs from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.node } },
	pluginJs.configs.recommended,
	{
		plugins: {
			import: importPlugin,
		},
		rules: {
			"import/no-extraneous-dependencies": ["error"],
		},
	},
];

import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // Base recommended rules from ESLint
  js.configs.recommended,

  // React-specific recommended rules
  react.configs.flat.recommended,

  // Support Prettier plugin
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "warn",
    },
  },

  // Disable conflicting rules
  configPrettier,
];

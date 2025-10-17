import globals from "globals";
import js from "@eslint/js";

export default [

  js.configs.recommended,

  {
  
    files: ["**/*.js", "**/*.mjs"],

  
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      
      },
    },

  
    rules: {
      "semi": ["error", "always"],
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    },
  },
];

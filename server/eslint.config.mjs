import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  /*
  ESLint rule overwrites. 
  @typescript-eslint/no-explicit-any - specifies whether any variables with a type of any will trigger an error
  @typescript-eslint/no-unused-vars - specifies whether variables which are unused will trigger an error
  */
  {
    rules: {
      "@typescript-eslint/no-explicit-any":"off",
      "@typescript-eslint/no-unused-vars":"off",
    },
  },
];
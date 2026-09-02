import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfigWithVueTs, vueTsConfigs } from "@vue/eslint-config-typescript";

export default defineConfigWithVueTs(
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue,js,mjs,cjs}"],
  },
  {
    name: "app/files-to-ignore",
    ignores: ["dist/**", "dist-ssr/**", "coverage/**", "public/**"],
  },

  js.configs.recommended,
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,

  {
    name: "app/languages",
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },

  {
    name: "app/rules",
    rules: {
      // 這邊可以自訂規則
    },
  },
);

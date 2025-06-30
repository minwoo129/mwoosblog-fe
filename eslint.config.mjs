import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import pluginPrettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import {defineConfig} from 'eslint/config';

const eslintConfig = defineConfig([
  js.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      js,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: pluginPrettier,
      react: pluginReact,
      '@typescript-eslint': tseslint.plugin,
    },
    extends: [
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
      pluginPrettier.configs.recommended,
    ],
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'prettier/prettier': 'error',
      'no-unused-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-var': 'error',
    },
  },
]);

export default eslintConfig;

import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import pluginNext from '@next/eslint-plugin-next';
import parser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
    {
        name: 'ESLint Config - Next.js',
        ignores: [
            '**/node_modules/*',
            '**/.next/*',
            '**/.idea/*',
            '**/.vscode/*',
        ],
        languageOptions: {
            parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@next/next': pluginNext,
        },
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        rules: {
            "@typescript-eslint/no-unused-expressions": ["error", { "allowShortCircuit": false }],
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs['core-web-vitals'].rules,
        },
    },
    ...compat.extends('next/core-web-vitals', 'next/typescript')
]

export default eslintConfig;

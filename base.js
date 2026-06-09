import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import n from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import promise from 'eslint-plugin-promise'
import globals from 'globals'

import { importSort, prettier } from './config.js'

export default [
  {
    name: 'wooden-script/ignores',
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      '**/.turbo/**',
      '**/.cache/**',
    ],
  },
  js.configs.recommended,
  {
    name: 'wooden-script/base',
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.es2021,
      },
    },
    plugins: {
      n,
      perfectionist,
      promise,
      '@typescript-eslint': ts,
    },
    rules: {
      ...importSort.defaultRule,
      'array-callback-return': 'error',
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'no-console': 'warn',
      'no-duplicate-imports': [
        'error',
        {
          allowSeparateTypeImports: true,
        },
      ],
      'no-else-return': ['error', { allowElseIf: false }],
      'no-useless-return': 'error',
      'no-var': 'error',
      'object-shorthand': ['error', 'always'],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: 'import', next: '*' },
        { blankLine: 'any', prev: 'import', next: 'import' },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'promise/param-names': 'error',
    },
  },
  {
    name: 'wooden-script/typescript',
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  prettier.config,
]

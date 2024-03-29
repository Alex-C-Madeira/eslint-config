module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          /* ---------------Types */
          ['^.*\\u0000$'], // type Imports
          ['^@/'], // imports starting with @/ (normally @types folder)
          /* ---------------Tests */
          ['^tests/', '^__tests/', '^__tests__/'], // Imports starting with tests, __tests or __tests__ (normally tests folder)

          /* ---------------Common modules */
          ['^node:'], // Node modules Imports
          ['^react'], // React Imports
          ['^styled-components'], // Styled Components Imports
          ['^next'], // NextJS Imports

          /* ---------------Packages */
          ['^@?\\w'], // Other Import Packages
          ['^\\u0000'], // Side effect Imports.

          /* ---------------Docs */
          ['^#/'], // Imports starting with #/ (normally Docs folder)

          /* ---------------Internal Folders */
          ['^_UTL/'], // Imports starting with _UTL/ (normally utils folder)
          ['^_SRV/'], // Imports starting with _SRV/ (normally Services folder)
          ['^_STR/'], // Imports starting with _STR/ (normally Store folder)
          ['^_MDL/'], // Imports starting with _MDL/ (normally Model folder)
          ['^_CTL/'], // Imports starting with _CTL/ (normally Controller folder)

          /* ---------------SRC */
          ['^~/'], // Imports starting with ~/ (normally src folder)

          /* ---------------Parent Imports */
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'], // Parent Imports (../)
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // Same-folder Imports (./)

          /* ---------------Style imports */
          ['^.+\\.s?css$'], // global CSS or SCSS Imports (style.css, path/to/file.scss)
          ['^\\./styles$'], //  Same-folders style Import (./styles)
        ],
      },
    ],
    'import/newline-after-import': 'error',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
  ignorePatterns: ['node_modules'],
}

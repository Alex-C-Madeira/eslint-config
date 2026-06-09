import eslintConfigPrettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'

export const defaultOptions = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
  endOfLine: 'auto',
}

export const defaultRule = {
  'prettier/prettier': ['error', defaultOptions],
}

export const config = {
  name: 'wooden-script/prettier',
  plugins: {
    prettier: prettierPlugin,
  },
  rules: {
    ...eslintConfigPrettier.rules,
    ...defaultRule,
  },
}

const defaultOptions = {
  printWidth: 80,
  tabWidth: 2,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  semi: false,
  endOfLine: 'auto'
}

const defaultRule = {
  'prettier/prettier': ['error', defaultOptions]
}

module.exports = {
  defaultRule,
  defaultOptions
}

export const defaultGroups = [
  'type',
  'builtin',
  'external',
  'internal',
  ['parent', 'sibling', 'index'],
  'side-effect',
  'style',
  'unknown',
]

export const defaultOptions = {
  type: 'alphabetical',
  order: 'asc',
  newlinesBetween: 1,
  groups: defaultGroups,
  internalPattern: [
    '^@/',
    '^~/',
    '^#/',
    '^_UTL/',
    '^_SRV/',
    '^_STR/',
    '^_MDL/',
    '^_CTL/',
  ],
}

export const defaultExportOptions = {
  type: 'alphabetical',
  order: 'asc',
  newlinesBetween: 1,
}

export const defaultJsxPropsOptions = {
  type: 'line-length',
  order: 'asc',
}

export const defaultRule = {
  'perfectionist/sort-imports': ['error', defaultOptions],
  'perfectionist/sort-exports': ['error', defaultExportOptions],
  'perfectionist/sort-jsx-props': ['error', defaultJsxPropsOptions],
}

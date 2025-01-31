const defaultGroups = [
  /* ---------------Types */
  ['^.*\\u0000$'],
  ['^@/'],
  /* ---------------Tests */
  ['^tests/', '^__tests/', '^__tests__/'],

  /* ---------------Common modules */
  ['^node:'],
  ['^react'],
  ['^styled-components'],
  ['^next'],

  /* ---------------Packages */
  ['^@?\\w'],
  ['^\\u0000'],

  /* ---------------Docs */
  ['^#/'],

  /* ---------------Internal Folders */
  ['^_UTL/'],
  ['^_SRV/'],
  ['^_STR/'],
  ['^_MDL/'],
  ['^_CTL/'],

  /* ---------------SRC */
  ['^~/'],

  /* ---------------Parent Imports */
  ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
  ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],

  /* ---------------Style imports */
  ['^.+\\.s?css$'],
  ['^\\./styles$'],
]

const defaultOptions = {
  groups: defaultGroups,
}

const defaultRule = {
  'simple-import-sort/imports': ['error', defaultOptions],
}

module.exports = {
  defaultRule,
  defaultGroups,
  defaultOptions,
}

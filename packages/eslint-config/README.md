![Wooden Script - ESlint config](https://example.com/wooden-script-logo.png)

# Wooden Script ESLint config

## What's included?:

- Standard config base
- React plugin
- React Hooks plugin
- JSX a11y plugin
- Prettier
- Import/Export Sort

## Status badges

- ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/alexmadeira/config-file/release.yml?style=flat-square&logo=github)
- ![NPM Version](https://img.shields.io/npm/v/%40types%2Fnode?style=flat-square)
- ![NPM License](https://img.shields.io/npm/l/eslint?style=flat-square)
- ![GitHub Release Date](https://img.shields.io/github/release-date/alexmadeira/config-file)

## Required Packages

Make sure to have the following packages installed in your project to ensure proper functionality:

- [`eslint`](https://www.npmjs.com/package/eslint): ESLint is a linting tool for identifying and reporting patterns in JavaScript and TypeScript code. ![Required ESlint](https://img.shields.io/badge/Required-3A69C5?style=for-the-badge&logo=npm&label=Npm&cacheSeconds=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feslint)
- [`eslint_d`](https://www.npmjs.com/package/eslint_d): If your development environment reads the result from `stdout`, installing `eslint_d` can provide faster linting performance. ![Optional eslint_d](https://img.shields.io/badge/Optional-3AD35ABF?style=for-the-badge&logo=npm&label=Npm&cacheSeconds=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feslint_d)
- [`typescript`](https://www.npmjs.com/package/typescript): TypeScript is a superset of JavaScript that adds static types to the language and is essential for TypeScript projects. ![Optional TypeScript](https://img.shields.io/badge/Optional-3AD35ABF?style=for-the-badge&logo=npm&label=Npm&cacheSeconds=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Ftypescript)

## Installation

- yarn: `yarn add @wooden-script/eslint-config --dev`
- npm: `npm install @wooden-script/eslint-config --save-dev`
- pnpm: `pnpm add @wooden-script/eslint-config --save-dev`

## Setup

After the installation process, you should create an ESLint configuration file in the root of your project. This file can be named `.eslintrc.js`, `.eslintrc.json`, or any other format accepted by ESLint. For more information, refer to [ESLint Configuration Files](https://eslint.org/docs/latest/use/configure/configuration-files).
Inside the configuration file, add the following content based on your project type:

For `React` projects (with or without TypeScript), use:

```json
{
  "extends": ["@wooden-script/eslint-config/react"]
}
```

For `Node.js` projects (with or without TypeScript), use:
```json
{
  "extends": ["@wooden-script/eslint-config/node"]
}
```

These configurations will be effective once added to your ESLint configuration file.

## Customizing/Override configuration

Customizing Wooden Script ESLint configuration allows you to tailor the linting rules to fit your project's specific needs. Here are two notable customization options:

### Configure Prettier Settings
You can customize Prettier settings through the `prettier/prettier` ESLint rule. Adjust the configuration in your `.eslintrc.json` file as follows:

```json
{
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "arrowParens": "always",
        "endOfLine": "auto"
        // Adicione mais configurações do Prettier conforme necessário
      }
    ]
  }
}
```

For more details, refer to the [eslint-plugin-prettier documentation](https://www.npmjs.com/package/eslint-plugin-prettier).

### Customize Import Sorting Order
Adjusting the order of imports can be done through the `simple-import-sort/imports` ESLint rule. Modify the configuration in your `.eslintrc.json` file:

```json
{
  "rules": {
    "simple-import-sort/imports": [
      "error",
      {
        "groups": [
          // Customize your import groups as needed
        ]
      }
    ]
  }
}

```

### Organize Exports
You can also organize exports, although this option is not enabled by default. This can be achieved through the `simple-import-sort/exports` ESLint rule. To use this feature, modify your `.eslintrc.json` file:

```json
{
  "rules": {
    "simple-import-sort/exports": "error"
    // Customize export sorting rules if necessary
  }
}
```

For more information, consult the [eslint-plugin-simple-import-sort documentation](https://github.com/lydell/eslint-plugin-simple-import-sort/).

Feel free to explore these options to align the ESLint configuration with your project's coding standards and preferences.

## Why?

Wooden Script ESLint config provides a standardized set of rules for maintaining consistent and high-quality code. It includes configurations for both Node.js and React projects, ensuring best practices and code quality across different environments.

## Compatibility

The Wooden Script ESLint configuration is compatible with the following versions:

- Node.js: Latest stable version
- ESLint: ^8.0.0
- TypeScript: ^5.0.0
- @typescript-eslint/eslint-plugin: ^6.21.0
- @typescript-eslint/parser: ^6.21.0
- eslint-config-prettier: ^9.1.0
- eslint-config-standard: ^17.1.0
- eslint-plugin-import: ^2.29.1
- eslint-plugin-jsx-a11y: ^6.8.0
- eslint-plugin-n: ^16.6.2
- eslint-plugin-prettier: ^5.1.3
- eslint-plugin-promise: ^6.1.1
- eslint-plugin-react: ^7.33.2
- eslint-plugin-react-hooks: ^4.6.0
- eslint-plugin-simple-import-sort: ^12.0.0
- prettier: ^3.2.5

## Our Related Projects

- [ts-config](https://www.npmjs.com/package/@wooden-script/ts-config)

## License

This project is licensed under the MIT License. ©[Alex Madeira](https://github.com/alexmadeira).

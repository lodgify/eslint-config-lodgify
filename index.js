const importNoUnresolved = require('./rule-options/import.no-unresolved');
const importOrder = require('./rule-options/import.order');
const paddingLineBetweenStatements = require('./rule-options/padding-line-between-statements');
const prettierPrettier = require('./rule-options/prettier.prettier');
const reactBooleanPropNaming = require('./rule-options/react.boolean-prop-naming');
const reactJsxFilenameExtension = require('./rule-options/react.jsx-filename-extension');
const reactSortPropTypes = require('./rule-options/react.sort-prop-types');
const requireJsdoc = require('./rule-options/requireJsdoc');

module.exports = {
  extends: 'prettier',
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'import', 'prettier', 'react', 'jsdoc'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/named': 2,
    'import/newline-after-import': 2,
    'import/no-default-export': 2,
    'import/no-unresolved': [2, importNoUnresolved],
    'import/order': [2, importOrder],
    'jsdoc/check-param-names': 2,
    'jsdoc/check-types': 2,
    'jsdoc/no-undefined-types': 2,
    'jsdoc/require-param': 2,
    'jsdoc/require-param-name': 2,
    'jsdoc/require-param-type': 2,
    'jsdoc/require-returns-type': 2,
    'jsdoc/valid-types': 2,
    'padding-line-between-statements': [2, ...paddingLineBetweenStatements],
    'no-console': 2,
    'no-undef': 2,
    'no-unreachable': 2,
    'no-unused-vars': 2,
    'prettier/prettier': [2, prettierPrettier],
    'react/boolean-prop-naming': [2, reactBooleanPropNaming],
    'react/default-props-match-prop-types': 2,
    'react/forbid-prop-types': 2,
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-curly-brace-presence': [2, 'never'],
    'react/jsx-filename-extension': [2, reactJsxFilenameExtension],
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-unused-prop-types': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-default-props': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': [2, reactSortPropTypes],
    'require-jsdoc': [2, requireJsdoc],
  },
};

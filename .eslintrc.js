
module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': ['error', { code: 120, ignoreTrailingComments: true }],
    'import/no-unresolved': 'off',
    'semi': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'no-multiple-empty-lines': ["error", { "max": 1, "maxEOF": 0 }],
    'comma-dangle': ['error', 'always-multiline'],
    'object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: true,
    }],
    'array-element-newline': ['error', {
      'ArrayExpression': 'consistent',
      'ArrayPattern': { 'minItems': 3 },
    }],
  },
};

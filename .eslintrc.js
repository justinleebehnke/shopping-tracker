module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/state-in-constructor': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    'jsx-quotes': ["error", "prefer-single"]
  },
}

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    "no-console": "off",
    "no-underscore-dangle": "off",
    "no-plusplus": "off",
    "no-continue": "off",
    "camelcase": "off",
    "no-empty": "off",
    "no-param-reassign": "off",
    "func-names": [
      "error",
      "never"
    ],
    "prefer-destructuring": [
      "error",
      {
        "object": false,
        "array": false
      }
    ],
    indent: [1, 2, {
      SwitchCase: 1
    }],
    'linebreak-style': ['error', 'unix'],
    quotes: [1, 'single', {
      allowTemplateLiterals: true
    }],
    semi: [1, 'always'],
    rules: {
      'jsx-quotes': [2, 'prefer-single'],
    },
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1,
    'spaced-comment': ['error', 'always', {
      exceptions: ['-', '+']
    }],
  },
};

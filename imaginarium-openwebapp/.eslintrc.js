module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    '../.eslintrc.json',
    'plugin:vue/essential',
    '@vue/prettier'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

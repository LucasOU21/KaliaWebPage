module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  rules: {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
  }
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true  // This fixes the 'process' errors
  },
  rules: {
    "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "no-useless-escape": "off",  // Disable regex escape warnings
    "react-hooks/exhaustive-deps": "warn"  // Make this a warning instead of error
  }
}
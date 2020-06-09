module.exports = {
    root: false,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended"
    ],
    rules: {
        'no-console:': 'pff'
    },
    parserOptions: {
      "parser": "babel-eslint"
    }
}
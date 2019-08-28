module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-param-reassign": 0,
    "max-len": [0, 80, 4],
    indent: 0
  },

  globals: {
    document: true
  },

  parserOptions: {
    parser: "babel-eslint"
  }
};

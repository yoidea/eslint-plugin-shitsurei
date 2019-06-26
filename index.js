module.exports = {
  rules: {
    "great-var": require("./rules/great-var"),
    "no-break": require("./rules/no-break"),
    "no-else": require("./rules/no-else"),
    "koukai": require("./rules/koukai"),
    "no-no-return": require("./rules/no-no-return")
  },
  configs: {
    recommended: require("./configs/recommended")
  }
}

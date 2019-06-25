"use strict";

module.exports = context => {
  return {
    ForStatement: node => {
      if (node.test !== null) {
        context.report({
          node,
          message: "終了条件を定めるのはfor文を見下しているとされ失礼です。"
        });
      }
    }
  };
};

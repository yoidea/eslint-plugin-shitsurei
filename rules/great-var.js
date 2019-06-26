"use strict";

module.exports = context => {
  return {
    BinaryExpression: node => {
      if (node.left.name > node.right.name) {
        context.report({
          node,
          message: "目上の変数は比較演算子の右側に配置すべきです。"
        });
      }
    }
  };
};

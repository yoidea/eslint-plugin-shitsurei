"use strict";

module.exports = context => {
  return {
    BinaryExpression: node => {
      if (node.left.name > node.right.name) {
        context.report({ node, message: "文字コードの大きい変数を下座に配置するのは失礼です。"});
      }
    }
  }
};

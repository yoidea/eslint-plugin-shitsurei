"use strict";

module.exports = context => {
  return {
    FunctionDeclaration: node => {
      const ret = node.body.body.find(e => {
        return e.type === "ReturnStatement";
      });
      if (ret === undefined) {
        context.report({
          node,
          message: "戻り値の無い関数は大変縁起が悪く使うべきではありません。"
        });
      }
    },
    ArrowFunctionExpression: node => {
      const ret = node.body.body.find(e => {
        return e.type === "ReturnStatement";
      });
      if (ret === undefined) {
        context.report({
          node,
          message: "戻り値の無い関数は大変縁起が悪く使うべきではありません。"
        });
      }
    }
  };
};

"use strict";

module.exports = context => {
  return {
    FunctionDeclaration: node => {
      const ret = node.body.body.find(e => {
        return e.type === "ReturnStatement";
      });
      if (typeof ret === "undefined") {
        context.report({
          node,
          message: "戻り値の無い関数は大変縁起が悪く使うべきではありません。"
        });
      }
    },
    ArrowFunctionExpression: node => {
      const body = node.body.body;
      if (typeof body === "undefined") {
        return;
      }
      const ret = body.find(e => {
        return e.type === "ReturnStatement";
      });
      if (typeof ret === "undefined") {
        context.report({
          node,
          message: "戻り値の無い関数は大変縁起が悪く使うべきではありません。"
        });
      }
    }
  };
};

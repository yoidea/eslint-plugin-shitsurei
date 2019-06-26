"use strict";

module.exports = context => {
  const message =
    "戻り値の無い関数は虚無を連想させ大変縁起が悪く使うべきではありません。";
  return {
    FunctionDeclaration: node => {
      const ret = node.body.body.find(e => {
        return e.type === "ReturnStatement";
      });
      if (typeof ret === "undefined") {
        context.report({
          node,
          message: message
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
          message: message
        });
      }
    }
  };
};

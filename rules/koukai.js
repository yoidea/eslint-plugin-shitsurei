"use strict";

module.exports = context => {
  const names = ["forEach", "map", "filter", "sort", "reduce"];
  return {
    CallExpression: node => {
      if (!("property" in node.callee)) {
        return;
      }
      if (names.includes(node.callee.property.name)) {
        context.report({
          node,
          message:
            "高階関数は後悔と発音が似ており重要な場面では使うべきではありません。"
        });
      }
    }
  };
};

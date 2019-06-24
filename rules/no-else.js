"use strict";

module.exports = context => {
  return {
    IfStatement: node => {
      if (node.alternate === null)
      context.report({node, message: "elseを省略するのは失礼です。" });
    }
  }
};

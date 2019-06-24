"use strict";

module.exports = context => {
  return {
    BreakStatement: node => {
      context.report({node, message: "breakには休むという意味があり怠惰な印象を与えます。"});
    }
  }
};

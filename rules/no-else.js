"use strict";

module.exports = context => {
	return {
		IfStatement: node => {
			if (node.alternate === null)
				context.report({
					node,
					message: "elseを省略するのは手抜きコードと思われ失礼です。"
				});
		}
	};
};

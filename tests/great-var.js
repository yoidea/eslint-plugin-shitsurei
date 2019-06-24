"use strict";

const rule = require("../rules/great-var");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [{
  code: 'if (a === b) { console.log(); };'
}];

const invalid = [{
  code: 'if (b === a) { console.log(); };',
  errors: [{ message: "文字コードの大きい変数を下座に配置するのは失礼です。", type: "BinaryExpression" }]
}];

ruleTester.run("great-var", rule, { valid, invalid });
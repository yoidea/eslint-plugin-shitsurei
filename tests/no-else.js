"use strict";

const rule = require("../rules/no-else");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [{
  code: 'if (a) { console.log(); } else {};'
}];

const invalid = [{
  code: 'if (a) { console.log(); };',
  errors: [{ message: "elseを省略するのは失礼です。", type: "IfStatement" }]
}];

ruleTester.run("no-else", rule, { valid, invalid });
"use strict";

const rule = require("../rules/no-for-test");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [{
  code: 'for (i = 0; ; i++) { console.log(); };'
}];

const invalid = [{
  code: 'for (i = 0; i < 10; i++) { console.log(); };',
  errors: [{ message: "終了条件を定めるのはfor文を見下しているとされ失礼です。", type: "ForStatement" }]
}];

ruleTester.run("no-for-test", rule, { valid, invalid });
"use strict";

const rule = require("../rules/no-no-return");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "function test() { return 0; };"
  }
];

const invalid = [
  {
    code: "function test() { console.log(); };",
    errors: [
      {
        message:
          "戻り値の無い関数は虚無を連想させ大変縁起が悪く使うべきではありません。",
        type: "FunctionDeclaration"
      }
    ]
  }
];

ruleTester.run("no-no-return", rule, { valid, invalid });

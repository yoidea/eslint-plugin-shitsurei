"use strict";

const rule = require("../rules/great-var");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "if (a === b) { console.log(); };"
  }
];

const invalid = [
  {
    code: "if (b === a) { console.log(); };",
    errors: [
      {
        message: "目上の変数は比較演算子の右側に配置すべきです。",
        type: "BinaryExpression"
      }
    ]
  }
];

ruleTester.run("great-var", rule, { valid, invalid });

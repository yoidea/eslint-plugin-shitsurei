"use strict";

const rule = require("../rules/koukai");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "a = []; for (i = 0; i < b.length; i++) a[i] = b[i] * b[i];"
  }
];

const invalid = [
  {
    code: "a = b.map(function(v){ return v * v });",
    errors: [
      {
        message:
          "高階関数は後悔と発音が似ており重要な場面では使うべきではありません。",
        type: "CallExpression"
      }
    ]
  }
];

ruleTester.run("koukai", rule, { valid, invalid });

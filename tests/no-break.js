"use strict";

const rule = require("../rules/no-break");
const RuleTester = require("eslint").RuleTester;
const ruleTester = new RuleTester();

const valid = [
  {
    code: "for (;;) { if (a) console.log(); };"
  }
];

const invalid = [
  {
    code: "for (;;) { if (a) break; };",
    errors: [
      {
        message: "breakには休むという意味があり怠惰な印象を与えます。",
        type: "BreakStatement"
      }
    ]
  }
];

ruleTester.run("no-break", rule, { valid, invalid });

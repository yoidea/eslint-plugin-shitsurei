# eslint-plugin-shitsurei

[![npm version](https://badge.fury.io/js/eslint-plugin-shitsurei.svg)](https://badge.fury.io/js/eslint-plugin-shitsurei)

## Installation

```
$ npm install --save-dev eslint-plugin-shitsurei
```

## Configuration

Use the default setting:

**.eslintrc.json**

```json
{
  "plugins": ["shitsurei"],
  "extends": ["plugin:shitsurei/recommended"]
}
```

or custom rules:

**.eslintrc.json** (An example)

```json
{
  "plugins": ["shitsurei"],
  "rules": {
    "shitsurei/great-var": 2,
    "shitsurei/no-break": 1,
    "shitsurei/no-else": 2,
    "shitsurei/koukai": 1,
    "shitsurei/no-no-return": 1
  }
}
```

## Rules

| Rule ID                                                     | Description              |
| :---------------------------------------------------------- | :----------------------- |
| great-var | 目上の変数が比較演算子の左側に配置されたときに警告する |
| no-break | 怠惰な印象を与えるbreakを警告する |
| no-else | 手抜きでelseが省略されたときに警告する |
| koukai | 後悔と発音が似ている高階関数が使われたときに警告する |
| no-no-return | 縁起の悪い戻り値のない関数を警告する |

### Scripts

- `npm format`
- `npm lint`
- `npm test`

const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends":  ['prettier',"eslint:recommended"],
    "parserOptions": {
        "ecmaVersion": 12,
        sourceType: 'module',
    },
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': ['error', prettierOptions],
    },
};

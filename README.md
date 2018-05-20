# Lodgify's ESLint config 💅

Set of ESLint rules and plugins used accross [Lodgify](https://github.com/lodgify)'s projects.

## Installation

Add `eslint-config-lodgify` to your dev dependencies.

```
npm install --save-dev eslint-config-lodgify
```

```
yarn add --dev eslint-config-lodgify
```

Use it in your `.eslintrc` file.

```
{
  "extends": ["lodgify"]
}
```

### Prettier

If you use the Prettier CLI directly, or if you need to integrate it with some fancy text editor, you might need to add a Prettier config file to your root directory.

You can use this `prettier.config.js` file for that.

```
module.exports = require('eslint-config-lodgify/prettier.config.js');
```

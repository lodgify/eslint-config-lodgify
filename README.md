# Lodgify's ESLint config 💅

Set of ESLint rules and plugins used accross [Lodgify](https://github.com/lodgify)'s projects.

## Installation

Add `@lodgify/eslint-config` to your dev dependencies.

```
npm install --save-dev @lodgify/eslint-config
```

```
yarn add --dev @lodgify/eslint-config
```

Use it in your `.eslintrc` file.

```
{
  "extends": ["@lodgify"]
}
```

### Prettier

If you use the Prettier CLI directly, or if you need to integrate it with some fancy text editor, you might need to add a Prettier config file to your root directory.

You can use this `prettier.config.js` file for that.

```
module.exports = require('@lodgify/eslint-config/prettier.config.js');
```

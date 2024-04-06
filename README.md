<p align="center">
  <a href="https://deez-components.pages.dev" target="_blank">
    <picture>
      <img alt="deez components" src="./src/assets/img/deez-components-square.png" width="350" height="350" style="max-width: 100%;">
    </picture>
  </a>
</p>

<p align="center">
  If I had components under my chin would those be chin components?
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/deez-components"><img src="https://img.shields.io/npm/dt/deez-components.svg" alt="Total Downloads"></a>
    <a href="https://github.com/dys-org/deez-components/releases"><img src="https://img.shields.io/npm/v/deez-components.svg" alt="Latest Release"></a>
    <a href="https://github.com/dys-org/deez-components/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/deez-components.svg" alt="License"></a>
</p>

# deez-components

This UI library uses Vue 3, Tailwind CSS, Headless UI, and Iconify Icons.
TypeScript types are exported for all component props.

I make a lot of breaking changes to this library. I try to increment the minor version when I do, but I would **NOT** use these components in a production app until this hits 1.x, if that ever happens.

## Project Setup

```sh
pnpm add deez-components
```

Make sure all `peerDependencies` are installed. If you are using `pnpm` >=8, they should install automatically.

```sh
pnpm add @headlessui/vue tailwind-merge vue vue-router
```

```sh
pnpm add @iconify/json tailwindcss @tailwindcss/forms @egoist/tailwindcss-icons -D
```

The utility classes are not bundled with the package. After installing add the following to the content list of your `tailwind.config.*`, otherwise the necessary CSS will not be generated.

```js
content: [
  ...
  './node_modules/deez-components/**/*.js',
],
```

Your "brand" colors for `primary` and `danger` also need to be set in the `tailwind.config.*`
The following maps them to the default tailwind blue and red colors.

Instead of using different grays for text colors. This library uses opacities of 60/40/30.
So set your default black color to a dark-gray to make all text colors based off of it in light mode. Or keep the default black for maximum contrast. I prefer to keep white set to `#fff`.

Set your base text colors on the `<html>` element in your `index.html` file.

```html
<html class="text-black dark:text-gray-50"></html>
```

`<html>` works better than `<body>` because some components use portals, which render outside of the `<body>` element.

```js
const colors = require('tailwindcss/colors');
...
theme: {
  extend: {
    ...
    colors: {
      black: colors.gray['900'],
      primary: colors.blue,
      danger: colors.red,
    },
  },
},
```

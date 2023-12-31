# deez-components

This library uses Vue 3, Tailwind CSS, Headless UI, and Unplugin Icons.
TypeScript types are exported for all component props.

## Project Setup

```sh
pnpm add deez-components
```

Make sure all `peerDependencies` are installed. If you are using `pnpm` >=8, they'll probably install automatically.

```sh
pnpm add @headlessui/vue @tailwindcss/forms tailwindcss tailwind-merge vue vue-router tailwind-merge
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

```
<html class="text-black dark:text-gray-50">
```

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

# deez-components

This library uses Vue 3, Tailwind CSS, Headless UI, and Unplugin Icons.
TypeScript types are exported for all component props.
Use of the library requires `tailwindcss` version 3 to be installed in your project.

## Project Setup

```sh
pnpm add deez-components
```

The utility classes are not bundled with the package. After installing add the following to the content list of your `tailwind.config.*`, otherwise the necessary CSS will not be generated.

```
content: [
  ...
  './node_modules/deez-components/**/*.js',
],
```

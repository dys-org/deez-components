/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-undef-components': ['error', { ignorePatterns: ['Story', 'Variant'] }],
    'vue/require-default-prop': 'off',
    'vue/v-on-event-hyphenation': 'off',
  },
};

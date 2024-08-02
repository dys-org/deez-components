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
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'vue/no-undef-components': ['error', { ignorePatterns: ['Story', 'Variant', 'RouterLink'] }],
    'vue/require-default-prop': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'import/no-cycle': ['error', { ignoreExternal: true }],
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.vue'],
    },
  ],
};

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
  plugins: ['simple-import-sort'],
  rules: {
    'vue/no-undef-components': ['error', { ignorePatterns: ['Story', 'Variant', 'RouterLink'] }],
    'vue/require-default-prop': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.js', '*.ts', '*.vue'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Node.js builtins prefixed with `node:`.
              ['^node:'],
              // Packages `vue` related packages come first.
              ['^vue', '^@?\\w'],
              // Side effect imports.
              ['^\\u0000'],
              // Internal packages.
              ['^(@)(/.*|$)'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
            ],
          },
        ],
      },
    },
  ],
};

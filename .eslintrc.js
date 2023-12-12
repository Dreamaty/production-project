module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
    'plugin:jest-dom/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'i18next',
    'jest-dom',
    'dreamatty-path-checker-plugin',
    'unused-imports',
    'import',
  ],
  rules: {
    'import/newline-after-import': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { consistent: true, multiline: true },
        ObjectPattern: { consistent: true, multiline: true },
        ImportDeclaration: {
          consistent: true,
          multiline: true,
          minProperties: 5,
        },
        ExportDeclaration: { multiline: true, minProperties: 4 },
      },
    ],
    'linebreak-style': ['error', 'unix'],
    'no-unused-vars': 'warn',
    'no-undef': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    'react/jsx-props-no-spreading': 'warn',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
        ignorePattern: '^import .*',
      },
    ],
    'dreamatty-path-checker-plugin/path-checker': [
      'error',
      { alias: '@' },
    ],
    'dreamatty-path-checker-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'dreamatty-path-checker-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    // unused-imports-plugin
    'unused-imports/no-unused-imports': 'error',
  },
  globals: {
    __IS_DEV__: true,
    __dirname: true,
    __API__: true,
    __FILE_CLOUD__: true,
    __PROJECT__: true,
  },
};

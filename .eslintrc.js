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
		'dreamatty-path-checker-plugin'
	],
	rules: {
		'object-curly-spacing': ['error', 'always'],
		'object-curly-newline': ['error', {
			'ObjectExpression': { 'consistent': true, 'multiline': true },
			'ObjectPattern': { 'consistent': true, 'multiline': true },
			'ImportDeclaration': { 'consistent': true, 'multiline': true, minProperties: 4 },
			'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
		}],
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		'react/jsx-props-no-spreading': 'warn',
		'react/display-name': 'off',
		'no-undef': 'off',
		'max-len': ['error', {
			ignoreComments: true, code: 120, ignorePattern: '^import .*' 
		}],
		'react-hooks/exhaustive-deps': 'error',
		'dreamatty-path-checker-plugin/path-checker': ['error', { alias: '@' }],
		'dreamatty-path-checker-plugin/public-api-imports': ['error', { 
			alias: '@',
			testFilesPatterns: ['**/*.test.*','**/*.stories.*' , '**/StoreDecorator.tsx'] 
		}],
		'dreamatty-path-checker-plugin/layer-imports': ['error', { 
			alias: '@',
			ignoreImportPatterns: ['**/StoreProvider', '**/testing'] 
		}]
	},
	globals: {
		__IS_DEV__: true,
		__dirname: true,
		__API__:true,
		__PROJECT__: true
	},
}

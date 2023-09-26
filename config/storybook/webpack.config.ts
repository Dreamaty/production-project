import path from 'path'
import webpack, { DefinePlugin } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		build: '',
		html: '',
		entry: '',
		src: path.resolve(__dirname, '..', '..', 'src'),
	}
	config.resolve?.modules?.push(paths.src)
	config.resolve?.extensions?.push('.ts', '.tsx')

	if (config.module != undefined && config.module.rules != undefined) {
		config.module.rules = config.module.rules.map((rule) => {
			if (
				rule &&
				typeof rule === 'object' &&
				'test' in rule &&
				rule.test instanceof RegExp &&
				rule.test.test('.svg')
			)
				return {
					...rule,
					exclude: /\.svg$/i,
				}

			return rule
		})

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})
		config.module.rules.push(buildCssLoaders(true))

		config.plugins?.push(
			new DefinePlugin({
				__IS_DEV__: true,
			}),
		)
	}
	return config
}

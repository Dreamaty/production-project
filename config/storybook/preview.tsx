import type { Preview } from '@storybook/react'
import '../../src/app/styles/index.scss'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { Theme } from '../../src/shared/const/theme'
// eslint-disable-next-line max-len
import { withThemeByClassName } from '@storybook/addon-themes'
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
	globals: {
		__IS_DEV__: false,
		__PROJECT__: 'storybook'
	},

	globalTypes: {
		theme: {
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				// The label to show for this toolbar item
				title: 'Theme',
				icon: 'circlehollow',
				// Array of plain string values or MenuItem shape (see below)
				items: ['light', 'dark'],
				// Change title based on selected value
				dynamicTitle: true,
			},
		},
	},

	decorators: [
		StyleDecorator,
		//ThemeDecorator(Theme.LIGHT),
		RouterDecorator,
		TranslationDecorator,
		SuspenseDecorator,
		withThemeByClassName({
			themes: {
				light: Theme.LIGHT,
				dark: Theme.DARK,
				green: Theme.GREEN
			},
			defaultTheme: 'light',
		}),
	],
}

export default preview

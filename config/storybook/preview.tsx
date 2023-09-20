import type { Preview } from '@storybook/react'

import { Theme } from '../../src/app/providers/ThemeProvider'
import '../../src/app/styles/index.scss'
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'

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

	decorators: [StyleDecorator, ThemeDecorator(Theme.LIGHT), RouterDecorator],
}

export default preview

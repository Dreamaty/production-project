import { StoryFn } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
	<div className={`app app-settings ${theme}`}>
		<StoryComponent />
	</div>
)

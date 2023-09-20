import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonTheme } from './Button'

const meta = {
	title: 'shared/Button',
	component: Button,
	parameters: {
		layout: 'fullscreen',
	},

	tags: ['autodocs'],

	argTypes: {},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: { children: 'Text' },
}

export const Clear: Story = {
	args: { children: 'Text', theme: ButtonTheme.CLEAR },
}
export const Outline: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE },
}
export const OutlineDark: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE },
	decorators: [ThemeDecorator(Theme.DARK)],
}

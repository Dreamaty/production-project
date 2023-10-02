import type { Meta, StoryObj } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ButtonSize, ButtonTheme } from './Button'

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
export const ClearInverted: Story = {
	args: { children: 'Text', theme: ButtonTheme.CLEAR_INVERTED },
}
export const Outline: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE },
}
export const OutlineRed: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE_RED },
}
export const BackgroundTheme: Story = {
	args: { children: 'Text', theme: ButtonTheme.BACKGROUND },
}
export const BackgroundThemeDark: Story = {
	args: { children: 'Text', theme: ButtonTheme.BACKGROUND },
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const BackgroundInvertedTheme: Story = {
	args: { children: 'Text', theme: ButtonTheme.BACKGROUND_INVERTED },
}
export const BackgroundInvertedThemeDark: Story = {
	args: { children: 'Text', theme: ButtonTheme.BACKGROUND_INVERTED },
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const SquareMTheme: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M,
	},
}
export const SquareLTheme: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L,
	},
}
export const SquareXLTheme: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL,
	},
}
export const SquareThemeDark: Story = {
	args: {
		children: '>',
		theme: ButtonTheme.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.M,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}

export const OutlineSizeL: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.L },
}
export const OutlineSizeXL: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE, size: ButtonSize.XL },
}
export const Disabled: Story = {
	args: { children: 'Text', theme: ButtonTheme.OUTLINE, disabled: true },
}

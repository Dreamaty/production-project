import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import {
	TextAlign, TextSize, TextTheme, UiText
} from './UiText'
const meta = {
	title: 'shared/Text',
	component: UiText,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof UiText>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: { title: 'Title lorem ipsum', text: 'TextTextTextTextTextTextText' },
}
// Alignment
export const AlignRight: Story = {
	args: { 
		title: 'Title lorem ipsum', 
		text: 'TextTextTextTextTextTextText',
		align: TextAlign.RIGHT
	},
}
export const AlignCenter: Story = {
	args: {
		title: 'Title lorem ipsum', 
		text: 'TextTextTextTextTextTextText',
		align: TextAlign.CENTER 
	},
}
// Sizes
export const SizeS: Story = {
	args: {
		title: 'Title lorem ipsum', 
		text: 'TextTextTextTextTextTextText',
		size: TextSize.S
	},
}
export const SizeL: Story = {
	args: { 
		title: 'Title lorem ipsum', 
		text: 'TextTextTextTextTextTextText',
		size: TextSize.L
	},
}
export const SizeXL: Story = {
	args: {
		title: 'Title lorem ipsum', 
		text: 'TextTextTextTextTextTextText',
		size: TextSize.XL
	},
}

export const Error: Story = {
	args: {
		title: 'Title lorem ipsum',
		text: 'TextTextTextTextTextTextText',
		theme: TextTheme.ERROR,
	},
}
export const OnlyTitle: Story = {
	args: { title: 'Title lorem ipsum' },
}
export const OnlyText: Story = {
	args: { text: 'TextTextTextTextTextTextText' },
}
export const Dark: Story = {
	args: { title: 'Title lorem ipsum', text: 'TextTextTextTextTextTextText' },
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const OnlyTitleDark: Story = {
	args: { title: 'Title lorem ipsum' },
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const OnlyTextDark: Story = {
	args: { text: 'TextTextTextTextTextTextText' },
	decorators: [ThemeDecorator(Theme.DARK)],
}

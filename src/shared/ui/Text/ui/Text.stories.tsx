import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { TextAlign, TextTheme, UiText } from './UiText'
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

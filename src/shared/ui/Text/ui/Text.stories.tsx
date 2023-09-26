import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'
const meta = {
	title: 'shared/Text',
	component: Text,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Text>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: { title: 'Title lorem ipsum', text: 'TextTextTextTextTextTextText' },
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

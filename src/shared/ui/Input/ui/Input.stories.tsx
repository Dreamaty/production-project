import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'
const meta = {
	title: 'shared/Input',
	component: Input,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	args: {
		placeholder: 'Type text',
		value: '123456qwerty',
		autoFocus: true,
	},
	argTypes: {},
} satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

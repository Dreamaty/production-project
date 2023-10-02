import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { UiInput } from './UiInput'
const meta = {
	title: 'shared/UiInput',
	component: UiInput,
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
} satisfies Meta<typeof UiInput>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

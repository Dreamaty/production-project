import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Listbox } from './Lisbox'
const meta = {
	title: 'widget/ListBox',
	component: Listbox,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		items: [
			{ value: 'ListBox', content: 'ListBox' },
			{ value: 'ListBox1', content: 'ListBox1' },
			{ value: 'ListBox2', content: 'ListBox2', unavailable: true },
			{ value: 'ListBox23', content: 'ListBox3' },
		],
		defaultValue: 'choose your listbox'
	}
} satisfies Meta<typeof Listbox>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const DirectionTop: Story = {
	args: {
		direction: 'top'
	},
	decorators: [ThemeDecorator(Theme.GREEN)],
}
export const Readonly: Story = {
	args: { readonly: true },
	decorators: [ThemeDecorator(Theme.GREEN)],
}
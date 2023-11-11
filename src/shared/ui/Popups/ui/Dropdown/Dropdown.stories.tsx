import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../../../Button'
import { Dropdown } from './Dropdown'
const meta = {
	title: 'shared/Dropdown',
	component: Dropdown,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		trigger: <Button>Open</Button>,
		items: [
			{
				content: 'first',
			},
			{
				content: 'second',
			},
			{
				content: 'third',
			},
		]
	}
} satisfies Meta<typeof Dropdown>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
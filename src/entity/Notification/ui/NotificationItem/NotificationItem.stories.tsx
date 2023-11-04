import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotificationItem } from './NotificationItem'
const meta = {
	title: 'widget/NotificationItem',
	component: NotificationItem,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		notification: {
			description: 'This is very interesting notification',
			id: '1',
			title: 'You need to look at it'
		}
	}
} satisfies Meta<typeof NotificationItem>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
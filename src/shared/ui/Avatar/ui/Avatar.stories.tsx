import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Avatar } from './Avatar'
const meta = {
	title: 'shared/Avatar',
	component: Avatar,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		alt: 'Avatar', 
		src: 'https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-1024.png'
	},
} satisfies Meta<typeof Avatar>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {  },
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
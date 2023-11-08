import { Theme } from '@/app/providers/ThemeProvider'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import type { Meta, StoryObj } from '@storybook/react'
import { CommentCard } from './CommentCard'
const meta = {
	title: 'entities/CommentCard',
	component: CommentCard,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		comment: {
			id: '1',
			text: 'abracadabbradaskfjafjasdfj',
			user: {
				id: '2',
				username: 'abracadabbraskfjafjasdf',
				avatar: 'dasdf'
			}
		}
	}
} satisfies Meta<typeof CommentCard>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
const meta = {
	title: 'pages/ArticleDetailsComments',
	component: ArticleDetailsComments,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		 articleId: '1'
	}
} satisfies Meta<typeof ArticleDetailsComments>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: { },
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
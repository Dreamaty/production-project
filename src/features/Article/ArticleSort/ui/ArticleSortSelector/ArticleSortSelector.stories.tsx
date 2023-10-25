import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleSortField } from '../../model/types/ArticleSort'
import { ArticleSortSelector } from './ArticleSortSelector'
const meta = {
	title: 'feature/article/ArticleSortSelector',
	component: ArticleSortSelector,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
	args: {
		order: 'asc',
		sort: ArticleSortField.CREATED
	}
} satisfies Meta<typeof ArticleSortSelector>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
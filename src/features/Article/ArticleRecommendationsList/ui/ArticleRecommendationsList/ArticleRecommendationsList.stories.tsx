import { Article } from '@/entities/Article'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'


const aritcle: Article = {
	id: '1',
	img: '',
	createdAt: '',
	views: 123,
	user: { username: '123', id: '1' },
	blocks: [],
	type: [],
	title: '123',
	subtitle: '12334123',
}


const meta = {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	parameters: {
		layout: 'fullscreen',
		mockData: {
			url: `${__API__}/article?_limit=3`,
			method: 'GET',
			status: 200,
			response: {
				data: [
					{ ...aritcle, id: '1' },	
					{ ...aritcle, id: '2' },	
					{ ...aritcle, id: '3' },	
				],
			},
		}
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ArticleRecommendationsList>

export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
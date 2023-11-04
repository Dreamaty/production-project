import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '@/app/providers/ThemeProvider'
import { Country } from '@/entity/Country'
import { Currency } from '@/entity/Currency'
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'

const meta = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [StoreDecorator({
		profile: {
			form: {
				firstName: 'Obi',
				lastName: 'Kenobi',
				age: 33,
				city: 'Tatuin',
				country: Country.Ukraine,
				currency: Currency.USD,
				avatar: 'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg'
			
			}
		}
	})],
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ProfilePage>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
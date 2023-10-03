import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { Country } from 'entity/Country'
import { Currency } from 'entity/Currency'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ProfileCard } from './ProfileCard'
const meta = {
	title: 'entity/ProfileCard',
	component: ProfileCard,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof ProfileCard>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {
		data: {
			firstName: 'Obi',
			lastName: 'Kenobi',
			age: 33,
			city: 'Tatuin',
			country: Country.Ukraine,
			currency: Currency.USD,
			avatar: 'https://i.pinimg.com/originals/a3/9c/4a/a39c4a0ba379500392f6b2f19cf83587.jpg'
			
		}
	},
}
export const isLoading: Story = {
	args: { isLoading: true },
}
export const withError: Story = {
	args: { error: 'true' },
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
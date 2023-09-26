import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { LoginForm } from './LoginForm'
const meta = {
	title: 'features/LoginForm',
	component: LoginForm,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	decorators: [
		StoreDecorator({ loginForm: { username: '123', password: 'asd' } }),
	],
	argTypes: {},
} satisfies Meta<typeof LoginForm>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const LightWithError: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: { username: '123', password: 'asd', error: 'ERROR' },
		}),
	],
}
export const LightWithLoading: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			loginForm: { isLoading: true },
		}),
	],
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

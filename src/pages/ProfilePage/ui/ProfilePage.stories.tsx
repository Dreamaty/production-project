import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import ProfilePage from './ProfilePage'

const meta = {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	parameters: {
		layout: 'fullscreen',
	},
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
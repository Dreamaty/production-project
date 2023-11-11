import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import AdminPanelPage from './AdminPanelPage'
const meta = {
	title: 'pages/AdminPanelPage',
	component: AdminPanelPage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof AdminPanelPage>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
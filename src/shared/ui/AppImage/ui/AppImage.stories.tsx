import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { AppImage } from './AppImage'
const meta = {
	title: 'widget/AppImage',
	component: AppImage,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof AppImage>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
const meta = {
	title: 'features/AvatarDropdown',
	component: AvatarDropdown,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof AvatarDropdown>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {
	args: {},
}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
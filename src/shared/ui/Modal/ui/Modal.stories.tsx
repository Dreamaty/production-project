import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
const meta = {
	title: 'shared/Modal',
	component: Modal,
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		children:
			'Aute aliqua officia pariatur deserunt ipsum non aliquip et. Cupidatat veniam ex minim veniam quis. Adipisicing nulla occaecat enim ut. Fugiat officia labore pariatur incididunt exercitation cupidatat.',
		isOpen: true,
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Modal>
export default meta
type Story = StoryObj<typeof meta>
export const Light: Story = {}
export const Dark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}

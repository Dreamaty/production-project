import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Modal } from './Modal'

describe('Modal check', () => {
	test('should render', () => {
		componentRender(<Modal isOpen />)
		expect(screen.getByTestId('modal')).toBeInTheDocument()
	})

	// test('should close', () => {
	// 	componentRender(<Modal isOpen />)
	// 	const overlayDiv = screen.getByTestId('overlay')

	// 	fireEvent.click(overlayDiv)
	// 	expect(screen.getByTestId('modal')).toHaveClass('closing')
	// })
})

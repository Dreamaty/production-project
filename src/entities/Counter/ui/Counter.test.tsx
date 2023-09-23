import { fireEvent, screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'

describe('Counter component', () => {
	test('should create Counter', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		})
		expect(screen.getByTestId('value-title')).toHaveTextContent('10')
	})
	test('should increment', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		})
		fireEvent.click(screen.getByTestId('decrement-button'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('9')
	})
	test('should create Counter', () => {
		componentRender(<Counter />, {
			initialState: {
				counter: {
					value: 10,
				},
			},
		})
		fireEvent.click(screen.getByTestId('increment-button'))
		expect(screen.getByTestId('value-title')).toHaveTextContent('11')
	})
})

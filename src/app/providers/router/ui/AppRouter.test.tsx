import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { screen } from '@testing-library/react'
import AppRouter from './AppRouter'

describe('app/router/AppRouter', () => {
	test('should render page', async () => {
		componentRender(<AppRouter />, {
			route: getRouteAbout(),
		})

		const page = await screen.findByTestId('AboutPage')
		expect(page).toBeInTheDocument()
	})

	test('should not found page' , async () => {
		componentRender(<AppRouter />, {
			route: '/asdjfsadf',
		})

		const page = await screen.findByTestId('NotFoundPage')
		expect(page).toBeInTheDocument()
	})

	test('should redirect non authorized user to MainPage' , async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
		})

		const page = await screen.findByTestId('MainPage')
		expect(page).toBeInTheDocument()
	})

	test('should open private page route to authorized user' , async () => {
		componentRender(<AppRouter />, {
			route: getRouteProfile('1'),
			initialState: {
				user: {
					_inited: true,
					authData: {}
				}
			}
		})

		const page = await screen.findByTestId('ProfilePage')
		expect(page).toBeInTheDocument()
	})

	test('should access denied(do not have a role)' , async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_inited: true,
					authData: {}
				}
			}
		})

		const page = await screen.findByTestId('ForbiddenPage')
		expect(page).toBeInTheDocument()
	})

	test('should have access(have right role)' , async () => {
		componentRender(<AppRouter />, {
			route: getRouteAdminPanel(),
			initialState: {
				user: {
					_inited: true,
					authData: { roles: [UserRole.ADMIN] }
				}
			}
		})

		const page = await screen.findByTestId('AdminPanelPage')
		expect(page).toBeInTheDocument()
	})
})
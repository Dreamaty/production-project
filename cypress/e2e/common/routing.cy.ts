import { selectByTestId } from '../../helpers/selectByTestId'

describe('Routing', () => {

	describe('User unauthorized', () => {
		it('route to main page', () => {
			cy.visit('/')
			cy.get(selectByTestId('MainPage')).should('exist')
		})

		it('should not open profile page', () => {
			cy.visit('/profile/1')
			cy.get(selectByTestId('MainPage')).should('exist')
		})
		it('route to non-existent route', () => {
			cy.visit('/sadfasdgga')
			cy.get(selectByTestId('NotFoundPage')).should('exist')
		})
	})
	
	describe('User authorized', () => {
		beforeEach(() => {
			cy.login('admin', '123')
		})
		
		it('should open profile page', () => {
			
			cy.visit('/profile/1')
			cy.get(selectByTestId('ProfilePage')).should('exist')
		})

		it('should open Articles Page', () => {
			cy.login('admin', '123')
			cy.visit('/articles')
			cy.get(selectByTestId('ArticlesPage')).should('exist')
		})
		
	})

})
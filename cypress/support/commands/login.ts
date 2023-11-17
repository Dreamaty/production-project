import { selectByTestId } from 'cypress/helpers/selectByTestId';

import { User } from '../../../src/entities/User';
import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localStorage';

export const login = (
  username: string = 'testuser',
  password: string = '123',
) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/login',
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      return window.localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(body),
      );
    });
};

export const getByTestId = (testId: string) => {
  return cy.get(selectByTestId(testId));
};

declare global {
  namespace Cypress {
    interface Chainable {
      login(
        username?: string,
        password?: string,
      ): Chainable<User>;
      getByTestId(
        testId: string,
      ): Chainable<JQuery<HTMLElement>>;
    }
  }
}

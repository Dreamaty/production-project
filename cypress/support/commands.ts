
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { login } from './commands/login'

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', login)

 declare global {
   namespace Cypress {
     interface Chainable {
       login(username?: string, password?: string): Chainable<void>
     }
   }
 }

export { }

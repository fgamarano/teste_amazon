/// <reference types="cypress"/>tqazuuu

// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const user = Cypress.env('user')
const password = Cypress.env('password')

Cypress.Commands.add('searchProduct', (item) => {
    cy.get('#twotabsearchtextbox')
        .should('be.visible')
        .should(($input) => {
            expect($input).to.have.prop('disabled', false)
        })
        .type(item)

    cy.get('#nav-search-submit-button').click()

    cy.contains('Resultados').should('be.visible')
})

Cypress.Commands.add('selectProduct', (item) => {
    cy.get('.a-size-mini')
        .contains(new RegExp(item, 'i'))
        .click()

    cy.contains('#productTitle', new RegExp(item, 'i'))
        .should('be.visible')
})

Cypress.Commands.add('buyNow', () => {
    cy.get('i.a-icon.a-accordion-radio.a-icon-radio-inactive').click()

    cy.get('#buy-now-button')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('addToCart', () => {
    cy.get('i.a-icon.a-accordion-radio.a-icon-radio-inactive').click()

    cy.get('#add-to-cart-button')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('checkout', () => {
    cy.get('#attach-sidesheet-checkout-button', { timeout: 20000 })
        .should('be.visible').click()
})


Cypress.Commands.add('navToCart', () => {
    cy.get('#nav-cart-count')
        .should('be.visible')
        .click()
})

Cypress.Commands.add('uiLogin', () => {
    const login = () => {
        cy.visit('/')
        cy.get('#gw-sign-in-button')
            .should('be.visible')
            .click()

        cy.get('#ap_email')
            .should('be.visible')
            .should('be.enabled')
            .type(user)
        cy.get('#continue')
            .should('be.visible')
            .click()

        cy.get('#ap_password')
            .should('be.visible')
            .should('be.enabled')
            .type(password)
        cy.get('#signInSubmit')
            .should('be.visible')
            .click()

        cy.get('#nav-link-accountList-nav-line-1')
            .should('be.visible')
            .should('have.text', 'Olá, Fernanda')
    }

    const options = { cacheAcrossSpecs: true }

    cy.session(user, login, options)
})


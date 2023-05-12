/// <reference types="cypress"/>

describe.only('Dado que não estou logado no ecommerce', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('E quero comprar um produto sem precisar adicionar o item no carrinho', () => {
    const item = 'Café Torrado e Moído Espresso Baggio Café 250g'

    cy.searchProduct(item)
    cy.selectProduct(item)
    cy.buyNow()

    cy.get('#ap_email').should('exist')
  })

  it('E quero comprar um produto adicionando o item no carrinho', () => {
    const item = 'Café Torrado e Moído Aroma de Chocolate com Menta Baggio Café 250g'

    cy.searchProduct(item)
    cy.selectProduct(item)
    cy.addToCart()
    cy.checkout()

    cy.get('#ap_email').should('exist')
  })

  it('Acessar o carrinho vazio', () => {
    cy.navToCart()

    cy.get('#a-autoid-0-announce')
      .should('be.visible')
  })
})

describe('Dado que estou logada no ecommerce', () => {

  beforeEach(() => {
    cy.uiLogin()
    cy.visit('/')
  })

  it('E quero comprar um produto sem adicionar o item no carrinho', () => {
    const item = 'Neutrogena Hidratante Facial Hydro Boost Water Gel 50g'

    cy.searchProduct(item)
    cy.selectProduct(item)
    cy.buyNow()

    cy.get('#submitOrderButtonId-announce').should('be.visible')
  })

  it('E quero comprar um produto adicionando o item no carrinho', () => {
    const item = 'Café Torrado e Moído Aroma de Chocolate com Menta Baggio Café 250g'

    cy.searchProduct(item)
    cy.selectProduct(item)
    cy.addToCart()
    cy.checkout()

    cy.get('#submitOrderButtonId-announce').should('be.visible')
  })

})


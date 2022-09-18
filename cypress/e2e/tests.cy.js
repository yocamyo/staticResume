/// <reference types="cypress" />

describe('my resume site', () => {
  beforeEach(() => {
    cy.visit('http://camdennavis.com')
  })

  it('checks mailto', () => {
    cy.contains('Email Me').should('have.attr', 'href', 'mailto:naviscam@gmail.com')
  })

  it('goes to linkedin', () => {
    cy.contains('LinkedIn Profile').should('have.attr', 'href', 'https://www.linkedin.com/in/naviscam/')
  })

  it('goes to linkedin', () => {
    cy.contains('LinkedIn Profile').should('have.attr', 'href', 'https://www.linkedin.com/in/naviscam/')
  })
})
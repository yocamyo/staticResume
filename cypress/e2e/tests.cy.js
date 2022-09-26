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

  it('downloads pdf', () => {
    cy.contains('Download My Resume').should('have.attr', 'href', 'static/resume.pdf').click()
    cy.verifyDownload('download.pdf');
  })
})
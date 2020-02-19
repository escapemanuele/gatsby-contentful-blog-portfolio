/// <reference types="Cypress" />

describe("should navigate", function() {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Should visit portfolio", function() {
    cy.get("[data-cy=portfolio]").click()

    cy.url().should("contain", "portfolio")
  })
  it("Should visit blog", function() {
    cy.get("[data-cy=blog]").click()

    cy.url().should("contain", "blog")
  })
  it("Should visit contacts", function() {
    cy.get("[data-cy=contacts]").click()

    cy.url().should("contain", "contact")
  })
  it("logo should send to home", () => {
    cy.get("[data-cy=logo]").click()
    cy.url().should("be", "/")
  })

  it("should work in mobile", () => {
    cy.viewport(320, 568)
    cy.get("[data-cy=mobile-button]").should("be.visible")
  })
})

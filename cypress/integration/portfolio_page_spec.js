/// <reference types="Cypress" />

describe("Test portfolio page", function() {
  this.beforeEach(() => {
    cy.visit("/portfolio")
  })

  it("Successfully loads the portfolio page", function() {
    cy.url().should("contain", "/portfolio")
  })

  it("Should have project categories", function() {
    cy.get("[data-cy=project-categories]")
      .children()
      .should("have.length.greaterThan", 0)
  })

  it("Should have portfolio items", function() {
    cy.get("[data-cy=portfolio-items]")
      .children()
      .should("have.length.greaterThan", 0)
  })

  it("Category click should get to category page", function() {
    cy.get("[data-cy=portfolio-category]")
      .should("have.attr", "href")
      .then(href => {
        cy.visit(href)
        cy.url().should("be", href)
      })
  })

  it("Portfolio item click should get to item", function() {
    cy.get("[data-cy=portfolio-item]")
      .should("have.attr", "href")
      .then(href => {
        cy.visit(href)
        cy.url().should("be", href)
      })
  })
})

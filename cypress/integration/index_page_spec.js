/// <reference types="Cypress" />

describe("Test home page", function() {
  it("Successfully loads the homepage", function() {
    cy.visit("/")
  })
})

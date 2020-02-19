/// <reference types="Cypress" />
import { emailStrings } from "../../src/components/Contact/ContactStrings"

describe("Test contacts page", function() {
  beforeEach(() => {
    cy.visit("/contact")
  })

  it("Successfully loads the contacts page", function() {
    cy.url().should("contain", "/contact")
  })

  it("Can fill the form", () => {
    cy.findByPlaceholderText(emailStrings.namePlaceholder)
      .type("Test")
      .should("have.value", "Test")
    cy.findByPlaceholderText(emailStrings.emailPlaceholder)
      .type("Test@test.com")
      .should("have.value", "Test@test.com")
    cy.findByPlaceholderText(emailStrings.messagePlaceholder)
      .type("Test message")
      .should("have.value", "Test message")
    cy.get("form")
      .within(() => cy.findByText(emailStrings.submitText))
      .should("exist")
  })
})

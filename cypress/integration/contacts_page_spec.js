/// <reference types="Cypress" />
import { strings } from "../../src/components/Contact/EmailContact"

describe("Test contacts page", function() {
  beforeEach(() => {
    cy.visit("/contact")
  })

  it("Successfully loads the contacts page", function() {
    cy.url().should("contain", "/contact")
  })

  it("Can fill the form", () => {
    cy.findByPlaceholderText(strings.namePlaceholder).type("Test").should("have.value", "Test")
    cy.findByPlaceholderText(strings.emailPlaceholder).type("Test@test.com").should("have.value", "Test@test.com")
    cy.findByPlaceholderText(strings.messagePlaceholder).type("Test message").should("have.value", "Test message")
    cy.get("form").within(() => cy.findByText(strings.submitText)).should('exist');
  })
})
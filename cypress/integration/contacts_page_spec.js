/// <reference types="Cypress" />

describe('Test contacts page', function() {
    beforeEach(() => {
        cy.visit('/contact');
    })

    it('Successfully loads the contacts page', function() {
        cy.url().should('contain', '/contact');
    })

    it('Can fill the form', () => {
        cy.get('form');

        cy.get('input[data-cy=form-name]').type("Test").should('have.value', "Test");
        cy.get('input[data-cy=form-email]').type("test@test.it").should('have.value',"test@test.it");
        cy.get('textarea[data-cy=form-message]').type("Simple message").should('have.value',"Simple message");
    })
});
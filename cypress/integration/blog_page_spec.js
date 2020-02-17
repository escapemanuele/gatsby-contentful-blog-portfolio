/// <reference types="Cypress" />

describe('Test blog page', function() {
    beforeEach(() => {
        cy.visit('/blog');
    })

    it('Successfully loads the blog page', function() {
        cy.url().should('contain', '/blog');
    })

    it('Title is correct', function (){
        cy.title().should('contain', 'Blog');
    })

    it('Articles visible', function () {
        cy.get('[data-cy=post-list]').children().should('have.length.greaterThan', 0);
    })
});
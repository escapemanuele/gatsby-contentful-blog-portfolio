/// <reference types="Cypress" />

const graphqlFixture = require("../fixtures/graphql")

describe("Test dynamic project categories", () => {
  let categories

  before(() => {
    const query = `{
        portfolioCategories: allContentfulPortfolioItemCategory {
          edges {
            node {
              id: contentful_id
              title
              slug
            }
          }
        }
      }
    `
    cy.request({
      url: graphqlFixture.graphqlEndpoint,
      method: "POST",
      body: { query },
      failOnStatusCode: false,
    }).then(res => {
      categories = res.body.data.portfolioCategories.edges
    })

    cy.visit("/portfolio")
  })

  it("Load the correct number of categories", function() {
    cy.get("[data-cy=project-categories]")
      .children()
      .should("have.length", categories.length)
  })

  it("Load the right categories", function() {
    categories.forEach(({ node }) => {
      cy.findByText(node.title)
    })
  })
})

describe("Test dynamic projects", function() {
  let items

  before(() => {
    const query = `
    {
      items: allContentfulPortfolioItem {
        edges {
          node {
            id: contentful_id
            slug
            title
          }
        }
      }
    }`

    cy.request({
      url: graphqlFixture.graphqlEndpoint,
      method: "POST",
      body: { query },
      failOnStatusCode: false,
    }).then(res => {
      items = res.body.data.items.edges
    })
  })

  it("Load the correct number of items", () => {
    cy.get("[data-cy=portfolio-items]")
      .children()
      .should("have.length", items.length)
  })

  it("Load the correct items", () => {
    items.forEach(({ node }) => {
      cy.findByText(node.title)
    })
  })
})

describe("Test portfolio page", function() {
  this.beforeEach(() => {
    cy.visit("/portfolio")
  })

  it("Successfully loads the portfolio page", function() {
    cy.url().should("contain", "/portfolio")
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

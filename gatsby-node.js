const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      posts: allContentfulBlogArticle {
        edges {
          node {
            id: contentful_id
            slug
            category {
              slug
            }
          }
        }
      }
      portfolioItems: allContentfulPortfolioItem {
        edges {
          node {
            id: contentful_id
            slug
            category {
              slug
            }
          }
        }
      }
      portfolioCategories: allContentfulPortfolioItemCategory {
        edges {
          node {
            title
            slug
            id: contentful_id
          }
        }
      }
    }
  `)

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component: path.resolve("./src/templates/post-template.js"),
      context: {
        id: node.id,
      },
    })
  })

  data.portfolioItems.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component: path.resolve("./src/templates/portoflio-item-template.js"),
      context: {
        id: node.id,
      },
    })
  })

  data.portfolioCategories.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve("./src/templates/portfolio-category-template.js"),
      context: {
        id: node.id,
      },
    })
  })

  const posts = data.posts.edges
  const postsPerPage = 9
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/post-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

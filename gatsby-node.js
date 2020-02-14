const path = require('path')

exports.createPages = async ({ graphql, actions}) => {
 
    const {createPage} = actions

    const {data} = await graphql(`
        query {
            posts:allContentfulArticolo {
                edges {
                    node {
                        id:contentful_id
                        indirizzo
                        categoria {
                            indirizzo
                        }
                    }
                }
            }
            structures:allContentfulStruttura {
                edges {
                    node {
                      indirizzo
                      id:contentful_id
                      categoria {
                        indirizzo
                      }
                    }
                }
            }
            structureCategories:allContentfulCategoriaStruttura {
                edges {
                  node {
                    titolo
                    indirizzo
                    id:contentful_id
                  }
                }
            }
        }
    `)

    data.posts.edges.forEach(({node}) => {
        createPage({
            path: `/${node.categoria.indirizzo}/${node.indirizzo}`,
            component: path.resolve("./src/templates/post-template.js"),
            context: {
                id: node.id
            }
        })
    })
    
    data.structures.edges.forEach(({node}) => {
        createPage({
            path: `/${node.categoria.indirizzo}/${node.indirizzo}`,
            component:path.resolve("./src/templates/structure-template.js"),
            context: {
                id:node.id
            }
        })
    })

    data.structureCategories.edges.forEach(({node}) => {
        createPage({
            path: `/${node.indirizzo}`,
            component:path.resolve("./src/templates/structure-category-template.js"),
            context: {
                id:node.id
            }
        })
    })

    const posts = data.posts.edges
    const postsPerPage = 9
    const numPages = Math.ceil(posts.length/postsPerPage)

    Array.from({length:numPages}).forEach((_,i) => {
        createPage({
            path: (i===0)? `/blog` : `/blog/${i+1}`,
            component: path.resolve('./src/templates/post-list-template.js'),
            context: {
                limit: postsPerPage,
                skip: i*postsPerPage,
                numPages,
                currentPage: i+1
            }
        })
    })
}
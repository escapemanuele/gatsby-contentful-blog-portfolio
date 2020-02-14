import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import CategoryCard from './CategoryCard'
import styled from 'styled-components'

const CategoriesStructure = () => {

    const {categories} = useStaticQuery(getStructureCategories)
    return (
        <CategoriesWrapper>
            {
                categories.edges.map(({node}) => {
                    return (
                        <CategoryCard key={node.id} category={node} />
                    )
                })
            }

        </CategoriesWrapper>
    )
}

const CategoriesWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 2rem;

  padding: 1rem;

  @media (min-width: 780px) {
    padding: 4rem;
  }
`

const getStructureCategories = graphql`
{
  categories:allContentfulCategoriaStruttura(filter:{node_locale:{eq: "en-US"}}) {
    edges {
      node {
        id:contentful_id
        titolo
        indirizzo
        immagine {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`

export default CategoriesStructure
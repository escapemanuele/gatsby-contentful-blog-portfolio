import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"
import { PageContainerWrapper } from "../css"
import SEO from "../components/SEO"
import PortfolioList from "../components/Portfolio/PortfolioList"

const PortoflioCategory = ({ data }) => {
  const { title, description, portfolioitem } = data.portfolioCategory
  return (
    <Layout>
      <SEO title={title} description={description} />
      <CategoryWrapper>
        <h1>{title}</h1>
        <Link
          to={`/portfolio`}
          className="btn-primary"
          style={{ marginTop: "3rem" }}
        >
          back
        </Link>
        <PortfolioList items={portfolioitem} />
      </CategoryWrapper>
    </Layout>
  )
}

const CategoryWrapper = styled(PageContainerWrapper)`
  h1 {
    text-align: center;
    font-size: 3rem;
  }

  a.btn-primary {
    margin: 0 auto;
  }

  @media (min-width: 760px) {
    padding: 3rem;
  }
`

export const getPortfolioCategory = graphql`
  query getPortfolioCategory($id: String!) {
    portfolioCategory: contentfulPortfolioItemCategory(
      contentful_id: { eq: $id }
    ) {
      title
      description {
        description
      }
      portfolioitem {
        id: contentful_id
        title
        slug
        images {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        category {
          slug
        }
      }
    }
  }
`
export default PortoflioCategory

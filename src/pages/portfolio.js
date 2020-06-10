import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import Banner from "../components/Banner"
import PortfolioCategoryItems from "../components/Portfolio/PortfolioCategoryItems"
import PortfolioItems from "../components/Portfolio/PortfolioItems"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <StyledHero img={data.contactImage.childImageSharp.fluid}>
        <Banner title="Portfolio" />
      </StyledHero>
      <PortfolioCategoryItems />
      <PortfolioItems />
    </Layout>
  )
}

export const getPortfolioImage = graphql`
  query {
    contactImage: file(relativePath: { eq: "portfolio-header.webp" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

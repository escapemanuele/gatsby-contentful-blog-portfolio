import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import PortfolioCategoryItems from "../components/Portfolio/PortfolioCategoryItems"
import PortfolioItems from "../components/Portfolio/PortfolioItems"
import SEO from "../components/SEO"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Portfolio" />
      {/* <StyledHero img={data.contactImage.childImageSharp.fluid}>
        <Banner title="Portfolio" />
      </StyledHero> */}
      <StyledHero img={data.portfolioImage.childImageSharp.fluid} />
      <PortfolioCategoryItems />
      <PortfolioItems />
    </Layout>
  )
}

export const getPortfolioImage = graphql`
  query {
    portfolioImage: file(relativePath: { eq: "portfolio-header.webp" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

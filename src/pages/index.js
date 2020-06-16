import React from "react"
import Layout from "../components/Layout"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ProjectWithUs from "../components/Contact/ProjectWithUs"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      {/* <StyledHero home img={data.homeImage.childImageSharp.fluid}>
        <Banner title={data.site.siteMetadata.title} info="hero-title"></Banner>
      </StyledHero> */}
      <StyledHero home img={data.homeImage.childImageSharp.fluid} />
      <Services />
      <ProjectWithUs />
    </Layout>
  )
}

export const getIndexData = graphql`
  query {
    homeImage: file(relativePath: { eq: "index-hero.webp" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index

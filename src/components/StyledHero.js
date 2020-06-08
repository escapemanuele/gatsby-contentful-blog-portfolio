import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getDefaultImage)
  const defaultImage = data.file.childImageSharp.fluid

  let mainImage = img ? img : defaultImage

  return (
    <BackgroundImage className={className} fluid={mainImage}>
      {children}
    </BackgroundImage>
  )
}

const getDefaultImage = graphql`
  {
    file(relativePath: { eq: "index-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default styled(StyledHero)`
    min-height: ${props => (props.home ? "calc(100vh - 62px)" : "50vh")};
    /* background: ${props =>
      props.home
        ? "linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
        : "none"}; */
    background-position: center;
    background-size: cover;
    opacity: 1!important;
    display: flex;
    justify-content:start;
    align-items:center;

`

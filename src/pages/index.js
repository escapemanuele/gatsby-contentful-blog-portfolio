import React from "react"
import Layout from '../components/Layout'
import Banner from "../components/Banner";
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import SEO from '../components/SEO'
import ProjectWithUs from "../components/Contact/ProjectWithUs";

const Index = ({data}) => {

    return (
        <Layout>
            <SEO title="Home" description="Studio associato Fusignani" />
            <StyledHero home img={data.homeImage.childImageSharp.fluid} >
                <Banner 
                    title="Studio Associato Fusignani"
                    info="Architecture & Engineering" >
                </Banner>
            </StyledHero>
            <Services />
            <ProjectWithUs />
        </Layout>
    )
}

export const getHomeImage = graphql`
query {
    homeImage:file(relativePath:{eq:"Studio-Associato-Fusignani.jpg"}) {
        childImageSharp {
            fluid (quality: 90, maxWidth: 4160){
                ...GatsbyImageSharpFluid_withWebp
            }
        }
  }
}
`

export default Index
import React from 'react'
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Banner from '../components/Banner';
import CategoriesStructure from '../components/Structure/CategoriesStructure';
import Structures from '../components/Structure/Structures';
import SEO from '../components/SEO';

export default ({data}) => {

    return (
        <Layout>
            <SEO title="Strutture" description="Studio associato Fusignani" />
            <StyledHero img={data.contactImage.childImageSharp.fluid}>
                <Banner title="Portfolio" />
            </StyledHero>
            <CategoriesStructure />
            <Structures />
        </Layout>
    )
}

export const getStructureCategories = graphql`
    query {
        contactImage:file(relativePath:{eq:"architetto-cervia.jpg"}) {
            childImageSharp {
                fluid (quality: 90, maxWidth: 4160){
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
    }
}
`
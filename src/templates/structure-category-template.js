import React from 'react'
import {graphql} from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import styles from '../css/blog.module.css'
import StructuresList from '../components/Structure/StructuresList'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import SEO from '../components/SEO'


const StructureCategory = ({data}) => {

    const {titolo, struttura} = data.structure;
    return (
        <Layout>
            <SEO title={titolo} description="Studio associato Fusignani" />
            <CategoryWrapper className={styles.blog}>
                <h1>{titolo}</h1>
                <AniLink fade to={`/strutture`} className="btn-primary" style={{marginTop: '3rem'}} >
                    indietro
                </AniLink>
                <StructuresList structures={struttura} />
            </CategoryWrapper>
        </Layout>
    )
}

const CategoryWrapper = styled.section`
    
    
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


export const getStructureCategory = graphql`
   query getStructureCategory($id: String!) {
        structure: contentfulCategoriaStruttura(contentful_id: {eq: $id}) {
            titolo
            struttura {
                id:contentful_id
                indirizzo
                titolo
                images {
                    fluid {
                        ...GatsbyContentfulFluid
                    }
                }
                categoria {
                    indirizzo
                }
            }
        }
    }
`
export default StructureCategory

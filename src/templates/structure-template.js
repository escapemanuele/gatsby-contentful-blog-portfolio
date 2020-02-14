import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/template.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import SEO from '../components/SEO'

const StructureTemplate = ({data}) => {

    const {titolo, images, descrizione, categoria: {indirizzo}} = data.structure
    const {desc} = descrizione || {};
    const [mainImage,...structureImages] = images

    return (
        <Layout>
            <SEO title={titolo} description="Studio associato Fusignani" />
            <HeaderStructureWrapper>
                <h1>{titolo}</h1>
                <ImageWrapper>
                    <div className="img-container">
                        <Image fluid={mainImage.fluid} alt="hotel a Cervia" />
                    </div>
                </ImageWrapper>
            </HeaderStructureWrapper>
            <section className={styles.template}>
                <div className={styles.center}>
                    <div className={styles.images}>
                        {
                            structureImages.map((item, index) => {
                                return <Image 
                                    key={index} 
                                    fluid={item.fluid} 
                                    alt="vista della struttura" 
                                    className={styles.image} />
                            })
                        }
                    </div>
                    <h2>{titolo}</h2>
                    {desc && <p className={styles.desc}>{desc}</p>}
                    <AniLink fade to={`/${indirizzo}`} className="btn-primary" style={{marginTop: '3rem'}} >
                        torna a {indirizzo}
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

const HeaderStructureWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
    word-break: break-all;
    margin-top: 3rem;
`

const ImageWrapper = styled.article`
    width: 30vw;
    position: relative;
    display: block;
    box-shadow: var(--lightShadow);
    margin: 3rem 0;

    img {
        width: 100%;
        display: block;
        box-shadow: var(--lightShadow);
    }
    div {
        box-shadow: var(--lightShadow);
    }

    @media screen and (min-width: 768px) {

        margin: 0;
        img {
            max-height: 500px;
        }
        .img-container {
            max-height: 500px;
        }
    }
    @media screen and (min-width: 992px) {
        .img-container::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border: 3px solid var(--primaryColor);
            box-sizing: border-box;
            top: -16px;
            left: -16px;
            z-index: -1;
        }
    }
`

export const getStructure = graphql`
   query getStructure($id: String!) {
        structure: contentfulStruttura(contentful_id: {eq: $id}) {
            categoria {
                indirizzo
            }
            titolo
            images {
                fluid {
                    ...GatsbyContentfulFluid
                }
            }
            descrizione {
                desc:descrizione
            }
        }
    }
`

export default StructureTemplate

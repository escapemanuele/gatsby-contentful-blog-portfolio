import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/template.module.css"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
import SEO from "../components/SEO"

const PortfolioItemTemplate = ({ data }) => {
  const {
    title,
    images,
    description,
    category: { slug },
  } = data.portfolioItem
  const { desc } = description || {}
  const [mainImage, ...itemImages] = images

  return (
    <Layout>
      <SEO title={title} description={description} />
      <HeaderStructureWrapper>
        <h1>{title}</h1>
        <ImageWrapper>
          <div className="img-container">
            <Image fluid={mainImage.fluid} alt={title} />
          </div>
        </ImageWrapper>
      </HeaderStructureWrapper>
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {itemImages.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{title}</h2>
          {desc && <p className={styles.desc}>{desc}</p>}
          <AniLink
            fade
            to={`/${slug}`}
            className="btn-primary"
            style={{ marginTop: "3rem" }}
          >
            back to {slug}
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

export const getPortfolioItem = graphql`
  query getPortfolioItem($id: String!) {
    portfolioItem: contentfulPortfolioItem(contentful_id: { eq: $id }) {
      category {
        slug
      }
      title
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      description {
        desc: description
      }
    }
  }
`

export default PortfolioItemTemplate

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import styles from "../css/single-blog.module.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import moment from "moment"
import "moment/locale/it"
import styled from "styled-components"
import RichTextDisplay from "../components/Blog/RichTextDisplay"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"

const BlogTemplate = ({ data }) => {
  var momentLocale = moment()
  momentLocale.locale("it")

  const {
    title,
    date: published,
    content: { json },
    image,
  } = data.post

  return (
    <Layout>
      <SEO title={title} />
      <BlogWrapper>
        <StyledHero img={image.fluid} className="post-image" />
        <div className="post-container">
          <AniLink fade to="/blog" className="btn-primary">
            All the articles
          </AniLink>
          <div className="content-container">
            <h1 className="content-title">{title}</h1>
            <h4 className="content-published">
              Published: {moment(published).format(`MMMM DD, YYYY`)}
            </h4>
            <hr />
            <article className={styles.post}>
              <RichTextDisplay json={json} />
            </article>
          </div>
        </div>
      </BlogWrapper>
    </Layout>
  )
}

const BlogWrapper = styled.article`
  .post-image {
    margin: 0 auto;
    width: 90%;
  }

  .post-container {
    padding: 1rem;
    margin: 0 auto;

    a.btn-primary {
      font-size: 0.8rem;
      display: block;
      text-align: center;
    }

    .content-container {
      margin-top: 3rem;

      .content-title {
        font-size: 2.3rem;
        font-weight: 600;
        text-align: center;
        word-break: break-all;
      }

      .content-published {
        text-transform: capitalize;
      }
    }
  }

  @media (min-width: 760px) {
    .post-container {
      padding: 4rem;
      width: 80vw;

      a.btn-primary {
        font-size: 1rem;
        display: inline;
      }
    }
  }
`

export const getPost = graphql`
  query getPost($id: String!) {
    post: contentfulBlogArticle(contentful_id: { eq: $id }) {
      title
      date
      content {
        json
      }
      image {
        fluid(maxWidth: 2048) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogTemplate

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"

import styled from "styled-components"
import RichTextDisplay from "../components/Blog/RichTextDisplay"
import SEO from "../components/SEO"
import StyledHero from "../components/StyledHero"

const BlogTemplate = ({ data }) => {
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
          <Link to="/blog" className="btn-primary">
            All the articles
          </Link>
          <div className="content-container">
            <h1 className="content-title">{title}</h1>
            <h4 className="content-published">
              Published: {DateText(published)}
            </h4>
            <hr />
            <article className="post">
              <RichTextDisplay json={json} />
            </article>
          </div>
        </div>
      </BlogWrapper>
    </Layout>
  )
}

function DateText(date) {
  const formattedTime = new Date(date)
  const formattedDate = formattedTime
    .toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/ /g, " ")

  return formattedDate
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

      .post {
        margin: 2rem 0;
      }

      .post img {
        max-width: 70vw;
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
        fluid(maxWidth: 1024) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogTemplate

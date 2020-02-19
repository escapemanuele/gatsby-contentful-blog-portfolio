import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import styles from "../css/blog.module.css"
import Title from "../components/Title"
import Card from "../components/Common/Card"
import SEO from "../components/SEO"

const BlogListTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  const { data } = props
  // const {blogImage} = useStaticQuery(getBlogImage)

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const previousPage =
    currentPage - 1 === 1 ? `/blog` : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Blog" />
      <section className={styles.blog}>
        <Title title="last" subtitle="articles" />
        {!(isFirst && isLast) && (
          <section className={styles.links}>
            {!isFirst && (
              <AniLink fade to={previousPage} className={styles.link}>
                Previous
              </AniLink>
            )}
            {Array.from({ length: numPages }, (_, i) => {
              return (
                <AniLink
                  key={i}
                  fade
                  to={`/blog/${i === 0 ? "" : i + 1}`}
                  className={
                    i + 1 === currentPage
                      ? `${styles.link} ${styles.active}`
                      : `${styles.link}`
                  }
                >
                  {i + 1}
                </AniLink>
              )
            })}
            {!isLast && (
              <AniLink fade to={nextPage} className={styles.link}>
                Next
              </AniLink>
            )}
          </section>
        )}
        <div className={styles.center} data-cy="post-list">
          {data.posts.edges.map(({ node }) => {
            return <Card key={node.id} node={node} />
          })}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulBlogArticle(
      skip: $skip
      limit: $limit
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          id: contentful_id
          title
          slug
          date
          category {
            name
            slug
          }
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default BlogListTemplate

import React from 'react'
import Title from '../Title'
import {graphql,useStaticQuery} from 'gatsby'
import styles from '../../css/blog.module.css'

const BlogList = () => {

    // const {posts} = useStaticQuery(getPosts)

    return (
        <section className={styles.blog}> 
            <Title title="our" subtitle="posts" />
            <div className={styles.center}>
                {/* {
                    posts.edges.map(({node}) => {
                        return <BlogCard key={node.id} post={node} />
                    })
                } */}
            </div>
        </section>
    )
}

// const getPosts = graphql`
// query {
//   posts: allContentfulPost(sort:{fields:createdAt,order:DESC}) {
//     edges {
//       node {
//         title
//         slug
//         createdAt(formatString:"LLLL")
//         id:contentful_id
//         image {
//           fluid {
//             ...GatsbyContentfulFluid
//           }
//         }
//         published(formatString:"MMMM Do, YYYY")
//       }
//     }
//   }
// }
// `

export default BlogList
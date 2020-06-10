import React from "react"
import styles from "../../css/blog-card.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Card = ({ node }) => {
  const { slug, title, image, date, category } = node

  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <Image
          fluid={image.fluid}
          className={styles.img}
          style={{ height: "100%" }}
        />
        <Link
          className={styles.link}
          to={`/${category.slug}/${slug}`}
          data-cy="portfolio-item"
        >
          open
        </Link>
        {date && <h6 className={styles.date}>{DateText(date)}</h6>}
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
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

Card.propTypes = {
  node: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    image: PropTypes.object.isRequired,
  }),
}

export default Card

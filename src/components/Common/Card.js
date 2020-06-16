import React from "react"
import { CardWrapper } from "../../css"
import Image from "../Image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Card = ({ node }) => {
  const { slug, title, image, date, category } = node

  return (
    <CardWrapper>
      <div className="img-container">
        <Image fluid={image.fluid} className="img" style={{ height: "100%" }} />
        <Link
          className="link"
          to={`/${category.slug}/${slug}`}
          data-cy="portfolio-item"
        >
          open
        </Link>
        {date && <h6 className="date">{DateText(date)}</h6>}
      </div>
      <div className="footer">
        <h4>{title}</h4>
      </div>
    </CardWrapper>
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

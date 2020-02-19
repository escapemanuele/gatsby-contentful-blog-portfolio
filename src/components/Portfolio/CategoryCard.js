import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const CategoryCard = ({ category }) => {
  const { title, image, slug } = category

  return (
    <CategoryWrapper fade to={`/${slug}`} data-cy="portfolio-category">
      <Image className="category-image" fluid={image.fluid} />
      <div className="category-info">{title}</div>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled(AniLink)`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  text-decoration: none;
  background: var(--primaryColor);
  color: var(--mainWhite);
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);

  &:hover {
    box-shadow: var(--darkShadow);
  }

  &:hover .category-image {
    opacity: 0.2;
  }

  .category-image {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    transition: var(--mainTransition);

    background-size: cover;
  }

  .category-info {
    align-self: center;
    justify-self: center;

    font-size: 1rem;
    font-weight: 600;
    color: var(--mainWhite);
  }

  @media (min-width: 780px) {
    .category-info {
      grid-column: 1 / -1;
      grid-row: 1 / -1;
      align-self: center;
      justify-self: center;

      font-size: 3rem;
      font-weight: 900;
    }
  }
`

CategoryCard.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    slug: PropTypes.string.isRequired,
  }),
}

export default CategoryCard

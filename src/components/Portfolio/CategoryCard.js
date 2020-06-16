import React from "react"
import PropTypes from "prop-types"
import Image from "../Image"
import styled from "styled-components"
import { Link } from "gatsby"

const CategoryCard = ({ category }) => {
  const { title, image, slug } = category

  return (
    <CategoryWrapper to={`/${slug}`} data-cy="portfolio-category">
      <Image className="category-image" fluid={image.fluid} />
      <div className="category-info">{title}</div>
    </CategoryWrapper>
  )
}

const CategoryWrapper = styled(Link)`
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;

  text-decoration: none;
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.mainWhite};
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }

  &:hover .category-image {
    opacity: 0.2;
  }

  .category-image {
    grid-column: 1 / -1;
    grid-row: 1 / -1;

    transition: ${props => props.theme.mainTransition};

    background-size: cover;
  }

  .category-info {
    align-self: center;
    justify-self: center;

    font-size: 1rem;
    font-weight: 600;
    color: ${props => props.theme.mainWhite};
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

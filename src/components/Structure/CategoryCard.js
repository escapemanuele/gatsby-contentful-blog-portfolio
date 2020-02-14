import React from 'react'
import PropTypes from 'prop-types'
import Image from 'gatsby-image'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const CategoryCard = ({category}) => {

    const {titolo, immagine, indirizzo} = category

    return (
        <CategoryWrapper fade to={`/${indirizzo}`} >
            <Image className="category-image" fluid={immagine.fluid} />
            <div className="category-info">{titolo}</div>
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
        titolo: PropTypes.string.isRequired,
        immagine: PropTypes.object.isRequired,
        indirizzo: PropTypes.string.isRequired,
    }),
}

export default CategoryCard
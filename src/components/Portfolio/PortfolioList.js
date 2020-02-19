import React from "react"
import styled from "styled-components"
import Card from "../Common/Card"
import PropTypes from "prop-types"

const PortfolioList = ({ items }) => {
  return (
    <PortfolioItemsWrapper data-cy="portfolio-items">
      {items &&
        items.map(node => {
          node.image = node.images ? node.images[0] : null
          return <Card key={node.id} node={node} />
        })}
    </PortfolioItemsWrapper>
  )
}

PortfolioList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const PortfolioItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;

  padding: 1rem;

  @media (min-width: 780px) {
    padding: 3rem;
  }
`

export default PortfolioList

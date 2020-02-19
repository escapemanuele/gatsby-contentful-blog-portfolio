import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle, className }) => {
  return (
    <div className={className}>
      <h4>
        <span className="title">{title}</span>
        <span>{subtitle}</span>
      </h4>
    </div>
  )
}

export default styled(Title)`
  text-transform: uppercase;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  margin-top: 2rem;

  h4 {
    text-align: center;
    letter-spacing: 7px;
    color: var(--primaryColor);
  }

  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }

  @media (min-width: 576px) {
    font-size: 2.3rem;
    span {
      display: inline;
      margin: 0 0.35rem;
    }
  }
`

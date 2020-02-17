import React from "react"
import styled from "styled-components"

const SingleService = ({ icon, title, text }) => {
  return (
    <ServiceWrapper>
      <span className="service_icon">{icon}</span>
      <div className="service_info">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </ServiceWrapper>
  )
}

const ServiceWrapper = styled.article`
  display: grid;
  grid-template-columns: auto 3fr;

  .service_icon {
    justify-self: end;
    padding-right: 1rem;
    font-size: 2rem;
    font-weight: 200;
    color: var(--primaryColor);
  }

  .service_info {
    h3 {
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (min-width: 780px) {
    .service_info {
      h3 {
        font-size: 1.6rem;
        font-weight: 300;
      }
    }
  }
`

export default SingleService

import React from "react"
import Title from "../Title"
import services from "../../constants/services"
import SingleService from "./SingleService"
import styled from "styled-components"

const Services = () => {
  return (
    <ServicesContainer>
      <Title title="Study of architecture" subtitle="and Engineering" />
      <hr className="services_separator" />
      <ServicesWrapper>
        {services.map((item, index) => (
          <SingleService
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </ServicesWrapper>
    </ServicesContainer>
  )
}

const ServicesContainer = styled.section`
  padding-top: 3rem;

  .services_separator {
    width: 20%;
    margin: 0 auto;
  }
`

const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  margin-top: 1rem;
  padding: 1rem;

  @media (min-width: 780px) {
    padding: 4rem;
    margin-top: 4rem;
  }
`

export default Services

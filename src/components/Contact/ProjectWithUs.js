import React from "react"
import styled from "styled-components"

const ProjectWithUs = () => {
  return (
    <ProjectWrapper>
      <div className="project_info">
        <h3>Interested in starting a project with us?</h3>
        <p>Feel free to call us</p>
      </div>
      <div className="project_phones">
        <a href="tel:123456789">123456789</a>
        <a href="tel:336123456789">336123456789</a>
      </div>
    </ProjectWrapper>
  )
}

const ProjectWrapper = styled.section`
  background: var(--primaryColor);
  color: var(--mainWhite);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  .project_phones {
    display: flex;
    flex-direction: column;

    a {
      text-decoration: none;
      color: var(--mainWhite);
      border: 2px solid var(--mainWhite);
      padding: 1rem;
      text-align: center;
      border-radius: 2rem;
      width: 150px;
      margin-top: 1rem;
      transition: var(--mainTransition);

      &:hover {
        background: var(--mainWhite);
        color: var(--primaryColor);
        transform: scale(1.1);
      }
    }
  }

  @media (min-width: 760px) {
    flex-direction: row;
  }
`

export default ProjectWithUs

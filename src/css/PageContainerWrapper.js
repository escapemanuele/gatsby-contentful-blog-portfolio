import styled from "styled-components"

const CardWrapper = styled.section`
  padding: 1rem;
  word-break: break-all;

  .links {
    width: 80vw;
    margin: 0 auto 5rem auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .link {
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.mainSpacing};
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.mainWhite};
    border: 2px solid ${props => props.theme.primaryColor};
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }

  .link:hover {
    background: transparent;
    color: ${props => props.theme.primaryColor};
  }

  .active {
    background: var(--mainWhite);
    color: var(--primaryColor);
  }

  .center {
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
  }

  @media screen and (min-width: 576px) {
    .center {
      grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
      margin: 3rem auto;
    }
    .links {
      width: 60vw;
    }
  }

  @media screen and (min-width: 1200px) {
    .center {
      width: 100%;
      max-width: 1170px;
    }
  }
`

export default CardWrapper

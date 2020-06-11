import styled from "styled-components"

const CardWrapper = styled.article`
  box-shadow: ${props => props.theme.lightShadow};
  transition: ${props => props.theme.mainTransition};

  display: grid;
  grid-template-rows: 200px auto;

  word-break: break-all;

  &:hover {
    box-shadow: ${props => props.theme.darkShadow};
  }

  .img-container {
    position: relative;
    background: ${props => props.theme.primaryColor};
    transition: ${props => props.theme.mainTransition};
    overflow: hidden;
  }

  .img-container:hover .link {
    opacity: 1;
  }

  .img-container:hover .img {
    opacity: 0.3;
  }

  .img {
    width: 100%;
    transition: ${props => props.theme.mainTransition};
  }

  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.mainSpacing};
    color: ${props => props.theme.mainWhite};
    border: 2px solid ${props => props.theme.mainWhite};
    padding: 0.5rem 0.7rem;
    display: inline-block;
    transition: ${props => props.theme.mainTransition};
    cursor: pointer;
  }

  .link:hover {
    background: ${props => props.theme.mainWhite};
    color: ${props => props.theme.primaryColor};
  }

  .footer {
    padding: 1rem;
    text-align: center;
  }

  .footer h4 {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .date {
    position: absolute;
    left: 0;
    top: 75%;
    background: ${props => props.theme.primaryColor};
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    text-transform: capitalize;
    color: ${props => props.theme.mainWhite};
  }
`

export default CardWrapper

import styled from "styled-components"

const FooterWrapper = styled.footer`
  margin-top: auto;
  background: ${props => props.theme.mainBlack};
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.mainWhite};

  .links a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.mainWhite};
    margin: 0.5rem 1rem;
    letter-spacing: ${props => props.theme.mainSpacing};
    transition: ${props => props.theme.mainTransition};
    font-weight: bold;
  }
  .links a:hover {
    color: ${props => props.theme.primaryColor};
  }

  .copyright {
    text-transform: capitalize;
    letter-spacing: ${props => props.theme.mainSpacing};
    line-height: 1;
    margin-top: 1.5rem;
  }

  .created {
    letter-spacing: ${props => props.theme.mainSpacing};
    line-height: 2;
    margin-top: 1.5rem;
    font-weight: 900;
    font-size: 1.4rem;
  }

  .created a {
    text-decoration: none;
    color: ${props => props.theme.mainWhite};
    transition: ${props => props.theme.mainTransition};
  }

  .created a:hover {
    font-size: 1.6rem;
  }
`

export default FooterWrapper

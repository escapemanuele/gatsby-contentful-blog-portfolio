import styled from "styled-components"

const NavbarWrapper = styled.nav`
  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
  }

  .logo-btn {
    background: transparent;
    border: none;
    outline: none;
  }
  .logo-btn:hover {
    cursor: pointer;
  }

  .logo-icon {
    color: ${props => props.theme.primaryColor};
    font-size: 1.5rem;
  }

  .navitem-active {
    text-decoration: underline !important;
  }

  .nav-links {
    list-style-type: none;
    transition: ${props => props.theme.mainTransition};
    height: 0;
    overflow: hidden;
  }

  .nav-links a {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: ${props => props.theme.mainBlack};
    transition: ${props => props.theme.mainTransition};
    font-weight: bold;
    letter-spacing: ${props => props.theme.mainSpacing};
  }
  .nav-links a:hover {
    color: ${props => props.theme.primaryColor};
  }

  .show-nav {
    height: 216px;
  }

  .nav-social-links {
    display: none;
  }

  @media screen and (min-width: 576px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 992px) {
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-btn {
      display: none;
    }

    .nav-links {
      height: auto;
      display: flex;
    }
    .nav-social-links {
      display: flex;
      line-height: 0;
    }
    .nav-social-links a {
      color: ${props => props.theme.primaryColor};
      margin: 0 0.5rem;
      font-size: 1.2rem;
      transition: ${props => props.theme.mainTransition};
    }
    .nav-social-links a:hover {
      color: ${props => props.theme.mainBlack};
      transform: translateY(-5px);
    }
  }
`

export default NavbarWrapper

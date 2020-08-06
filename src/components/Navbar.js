import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "./Image"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import { NavbarWrapper } from "../css"

const Navbar = () => {
  const data = useStaticQuery(getLogo)

  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" data-cy="logo">
            <Img fixed={data.logo.childImageSharp.fixed} alt="Homepage" />
          </Link>

          <button
            type="button"
            className="logo-btn"
            // onClick={toggleNav}
            aria-label="Open Menu"
            data-cy="mobile-button"
          >
            <FaAlignRight className="logo-icon" />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  data-cy={item.text}
                  activeClassName="navitem-active"
                >
                  {item.text}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </NavbarWrapper>
  )
}

const getLogo = graphql`
  query {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 118, height: 78) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

export default Navbar

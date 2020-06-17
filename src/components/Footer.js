import React from "react"
import { Link } from "gatsby"
import Loadable from "@loadable/component"
import links from "../constants/links"
import { FooterWrapper } from "../css"

const Footer = () => {
  const linkProfilo =
    process.env.LINK_URL || "https://www.linkedin.com/in/ebuccelli/"
  return (
    <FooterWrapper>
      <div className="links">
        {links.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              {item.text}
            </Link>
          )
        })}
      </div>
      <div className="copyright">
        copyright &copy; XXXXXXXXXX {new Date().getFullYear()} All rights
        reserved
      </div>
      <div className="copyright">Street N° XXXXX</div>
      <div className="created">
        Created by <a href={linkProfilo}>Emanuele Buccelli</a>
      </div>
      <div id="wcb" class="wcb carbonbadge wcb-d"></div>
    </FooterWrapper>
  )
}

export default Footer

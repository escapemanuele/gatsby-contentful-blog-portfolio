import React, { useState } from "react"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../constants/links"
import Logo from "../../static/images/logo.png"
import Anilink from "gatsby-plugin-transition-link/AniLink"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Anilink fade to="/">
            <img src={Logo} alt="logo" />
          </Anilink>

          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Anilink fade to={item.path}>
                  {item.text}
                </Anilink>
              </li>
            )
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {/* {socialIcons.map((icon, index) => {
                        return <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
                            {icon.icon}
                        </a>
                    })} */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar

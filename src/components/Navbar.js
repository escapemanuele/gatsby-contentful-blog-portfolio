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
          <Anilink fade to="/" data-cy="logo">
            <img src={Logo} alt="logo" />
          </Anilink>

          <button
            type="button"
            className={styles.logoBtn}
            onClick={toggleNav}
            aria-label="Open Menu"
            data-cy="mobile-button"
          >
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
                <Anilink fade to={item.path} data-cy={item.text}>
                  {item.text}
                </Anilink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import React from "react"
import styles from "../css/banner.module.css"

const Banner = ({ title, info, children }) => {
  return (
    <div className={styles.banner}>
      <p>{info}</p>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

export default Banner

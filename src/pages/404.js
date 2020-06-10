import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import styles from "../css/error.module.css"
import { Link } from "gatsby"

const Error = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Page not found">
          <Link to="/" className="btn-white">
            Go back
          </Link>
        </Banner>
      </header>
    </Layout>
  )
}

export default Error

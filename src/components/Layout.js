import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { createGlobalStyle } from "styled-components"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Lato", sans-serif;
    font-display: swap;
    line-height: 1.4;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Poppins", sans-serif;
    font-display: swap;
    margin-bottom: 1.25rem;
  }
`

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

export default Layout

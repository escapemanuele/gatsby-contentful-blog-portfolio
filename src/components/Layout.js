import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { ThemeProvider } from "styled-components"
import Script from "./Script"
import { Theme, GlobalStyle } from "../css"

const Layout = ({ children }) => {
  return (
    <main>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
        {children}
        <Footer />
      </ThemeProvider>
      <Script
        innerHTMLCode={`
            document.querySelector('.logo-btn').addEventListener('click', function (){
              document.querySelector('.nav-links').classList.toggle("show-nav");
            })
          `}
      />
    </main>
  )
}

export default Layout

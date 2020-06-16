import React from "react"
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
        src="https://cdnjs.cloudflare.com/ajax/libs/quicklink/2.0.0-alpha/quicklink.umd.js"
        defer
      />
      <Script
        innerHTMLCode={`
          window.addEventListener('load', () => quicklink.listen());
        `}
      />
      <Script src="https://unpkg.com/website-carbon-badges@^1/b.min.js" defer />
    </main>
  )
}

export default Layout

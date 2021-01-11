import React from "react"
import Footer from "./footer"
import Header from "./header"
import "@fontsource/poppins"
import "../styles/basic.css"

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

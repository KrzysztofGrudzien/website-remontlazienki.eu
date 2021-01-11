import React from "react"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import "@fontsource/poppins"
import "../styles/basic.scss"

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

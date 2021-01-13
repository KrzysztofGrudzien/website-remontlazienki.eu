import React from "react"
import Footer from "../Footer/footer"
import Header from "../Header/header"
import Sidebar from "../Sidebar/sidebar"
import "@fontsource/poppins"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/300.css"
import "@fontsource/poppins/700.css"
import "../../styles/basic.scss"
import "../../styles/typography.scss"
import containerStyles from "./layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={containerStyles.container}>
      <Header />
      <Sidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

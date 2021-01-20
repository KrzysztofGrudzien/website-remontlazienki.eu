import React from "react"
import headerStyles from "./header.module.scss"
import Navigation from "../Navigation/navigation"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerLogo}>
        remont<span>lazienki</span>.eu
      </h1>
      <Navigation />
    </header>
  )
}

export default Header

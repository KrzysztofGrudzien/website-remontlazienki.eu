import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <p className={footerStyles.footerCopyrights}>
        Copytights 2020. Wszelkie prawa zastrzeżone przez Artur Grudzień
      </p>
    </footer>
  )
}

export default Footer

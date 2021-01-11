import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">remontlazienki.eu</h1>
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              o nas
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/services" href="" className="navbar__link">
              usługi
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/gallery" className="navbar__link">
              galeria
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/contact" className="navbar__link">
              kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

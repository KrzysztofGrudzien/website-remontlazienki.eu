import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import IconPhone from "../../assets/icons/icon-phone.svg"
import IconEnvelop from "../../assets/icons/icon-envelop.svg"
import IconFacebook from "../../assets/icons/icon-fb.svg"
import IconCloseMenu from "../../assets/icons/icon-close-menu.svg"
import IconCornerLeftBottom from "../../assets/icons/icon-corner-left-bottom.svg"
import IconCornerLeftTop from "../../assets/icons/icon-corner-left-top.svg"
import IconCornerRightBottom from "../../assets/icons/icon-corner-right-bottom.svg"
import IconCornerRightTop from "../../assets/icons/icon-corner-right-top.svg"
import IconBurgerMenu from "../../assets/icons/icon-burger-menu.svg"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.headerLogo}>
        remont<span>lazienki</span>.eu
      </h1>
      {/*
      <nav className={headerStyles.navbar}>
        <IconCloseMenu className={headerStyles.navbarClose} />
        <ul className={headerStyles.navbarList}>
          <li className={headerStyles.navbarItem}>
            <IconCornerLeftBottom
              className={headerStyles.navbarItemIconCornerLeftBottom}
            />
            <IconCornerLeftTop
              className={headerStyles.navbarItemIconCornerLeftTop}
            />
            <IconCornerRightBottom
              className={headerStyles.navbarItemIconCornerRightBottom}
            />
            <IconCornerRightTop
              className={headerStyles.navbarItemIconCornerRightTop}
            />
            <Link to="/" className={headerStyles.navbarItemLink}>
              o nas
            </Link>
          </li>
          <li className={headerStyles.navbarItem}>
            <IconCornerLeftBottom
              className={headerStyles.navbarItemIconCornerLeftBottom}
            />
            <IconCornerLeftTop
              className={headerStyles.navbarItemIconCornerLeftTop}
            />
            <IconCornerRightBottom
              className={headerStyles.navbarItemIconCornerRightBottom}
            />
            <IconCornerRightTop
              className={headerStyles.navbarItemIconCornerRightTop}
            />
            <Link
              to="/services"
              href=""
              className={headerStyles.navbarItemLink}
            >
              usługi
            </Link>
          </li>
          <li className={headerStyles.navbarItem}>
            <IconCornerLeftBottom
              className={headerStyles.navbarItemIconCornerLeftBottom}
            />
            <IconCornerLeftTop
              className={headerStyles.navbarItemIconCornerLeftTop}
            />
            <IconCornerRightBottom
              className={headerStyles.navbarItemIconCornerRightBottom}
            />
            <IconCornerRightTop
              className={headerStyles.navbarItemIconCornerRightTop}
            />
            <Link to="/gallery" className={headerStyles.navbarItemLink}>
              galeria
            </Link>
          </li>
          <li className={headerStyles.navbarItem}>
            <IconCornerLeftBottom
              className={headerStyles.navbarItemIconCornerLeftBottom}
            />
            <IconCornerLeftTop
              className={headerStyles.navbarItemIconCornerLeftTop}
            />
            <IconCornerRightBottom
              className={headerStyles.navbarItemIconCornerRightBottom}
            />
            <IconCornerRightTop
              className={headerStyles.navbarItemIconCornerRightTop}
            />
            <Link to="/contact" className={headerStyles.navbarItemLink}>
              kontakt
            </Link>
          </li>
        </ul>
        
        <div className={headerStyles.navbarDetail}>
          <IconPhone />
          519-811-460
        </div>
        <div className={headerStyles.navbarDetail}>
          <IconEnvelop />
          <a href="#" className={headerStyles.navbarDetailLink}>
            dekorilla@wp.pl
          </a>
        </div>
        <div className={headerStyles.navbarDetail}>
          <IconFacebook />
          <a href="#" className={headerStyles.navbarDetailLink}>
            facebook.com/dekorilla
          </a>
        </div>
      </nav>
      */}
      <IconBurgerMenu />
    </header>
  )
}

export default Header

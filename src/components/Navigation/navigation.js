import React, { useState } from "react"
import { Link } from "gatsby"
import navigationStyles from "./navigation.module.scss"
import IconPhone from "../../assets/icons/icon-phone.svg"
import IconEnvelop from "../../assets/icons/icon-envelop.svg"
import IconFacebook from "../../assets/icons/icon-fb.svg"
import IconCloseMenu from "../../assets/icons/icon-close-menu.svg"
import IconCornerLeftBottom from "../../assets/icons/icon-corner-left-bottom.svg"
import IconCornerLeftTop from "../../assets/icons/icon-corner-left-top.svg"
import IconCornerRightBottom from "../../assets/icons/icon-corner-right-bottom.svg"
import IconCornerRightTop from "../../assets/icons/icon-corner-right-top.svg"
import IconBurgerMenu from "../../assets/icons/icon-burger-menu.svg"

const Navigation = () => {
  const [isOpened, setIsOpened] = useState(false)
  const handleIsOpenedMenu = () => {
    setIsOpened(true)
  }
  return (
    <>
      {isOpened ? (
        <nav className={navigationStyles.navbar}>
          <IconCloseMenu
            className={navigationStyles.navbarClose}
            onClick={() => setIsOpened(false)}
          />
          <ul className={navigationStyles.navbarList}>
            <li className={navigationStyles.navbarItem}>
              <IconCornerLeftBottom
                className={navigationStyles.navbarItemIconCornerLeftBottom}
              />
              <IconCornerLeftTop
                className={navigationStyles.navbarItemIconCornerLeftTop}
              />
              <IconCornerRightBottom
                className={navigationStyles.navbarItemIconCornerRightBottom}
              />
              <IconCornerRightTop
                className={navigationStyles.navbarItemIconCornerRightTop}
              />
              <Link to="/" className={navigationStyles.navbarItemLink}>
                o nas
              </Link>
            </li>
            <li className={navigationStyles.navbarItem}>
              <IconCornerLeftBottom
                className={navigationStyles.navbarItemIconCornerLeftBottom}
              />
              <IconCornerLeftTop
                className={navigationStyles.navbarItemIconCornerLeftTop}
              />
              <IconCornerRightBottom
                className={navigationStyles.navbarItemIconCornerRightBottom}
              />
              <IconCornerRightTop
                className={navigationStyles.navbarItemIconCornerRightTop}
              />
              <Link
                to="/services"
                href=""
                className={navigationStyles.navbarItemLink}
              >
                usługi
              </Link>
            </li>
            <li className={navigationStyles.navbarItem}>
              <IconCornerLeftBottom
                className={navigationStyles.navbarItemIconCornerLeftBottom}
              />
              <IconCornerLeftTop
                className={navigationStyles.navbarItemIconCornerLeftTop}
              />
              <IconCornerRightBottom
                className={navigationStyles.navbarItemIconCornerRightBottom}
              />
              <IconCornerRightTop
                className={navigationStyles.navbarItemIconCornerRightTop}
              />
              <Link to="/gallery" className={navigationStyles.navbarItemLink}>
                galeria
              </Link>
            </li>
            <li className={navigationStyles.navbarItem}>
              <IconCornerLeftBottom
                className={navigationStyles.navbarItemIconCornerLeftBottom}
              />
              <IconCornerLeftTop
                className={navigationStyles.navbarItemIconCornerLeftTop}
              />
              <IconCornerRightBottom
                className={navigationStyles.navbarItemIconCornerRightBottom}
              />
              <IconCornerRightTop
                className={navigationStyles.navbarItemIconCornerRightTop}
              />
              <Link to="/contact" className={navigationStyles.navbarItemLink}>
                kontakt
              </Link>
            </li>
          </ul>
          <div className={navigationStyles.navbarDetail}>
            <IconPhone />
            519-811-460
          </div>
          <div className={navigationStyles.navbarDetail}>
            <IconEnvelop />
            <a href="#" className={navigationStyles.navbarDetailLink}>
              dekorilla@wp.pl
            </a>
          </div>
          <div className={navigationStyles.navbarDetail}>
            <IconFacebook />
            <a href="#" className={navigationStyles.navbarDetailLink}>
              facebook.com/dekorilla
            </a>
          </div>
        </nav>
      ) : null}
      <IconBurgerMenu onClick={handleIsOpenedMenu} />
    </>
  )
}

export default Navigation

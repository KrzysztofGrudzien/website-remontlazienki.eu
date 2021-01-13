import React from "react"
import linkButtonsStyles from "./linkButtons.module.scss"
import IconArrowLeft from "../../assets/icons/icon-arrow-left-light.svg"
import IconArrowRight from "../../assets/icons/icon-arrow-right-light.svg"

const LinkButtons = () => {
  return (
    <div className={linkButtonsStyles.container}>
      <a href="" className={linkButtonsStyles.containerLink}>
        <IconArrowLeft />
      </a>
      <a
        href=""
        className={`${linkButtonsStyles.containerLink} ${linkButtonsStyles.containerLinkActive}`}
      >
        <IconArrowRight />
      </a>
    </div>
  )
}

export default LinkButtons

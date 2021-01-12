import React from "react"
import sidebarStyles from "./sidebar.module.scss"

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <p className={sidebarStyles.sidebarAuthor}>
        Projekt i wdrożenie{" "}
        <a
          className={sidebarStyles.sidebarLink}
          href="http://criscode.eu"
          target="_blank"
        >
          Krzysztof Grudzień
        </a>
      </p>
    </div>
  )
}

export default Sidebar

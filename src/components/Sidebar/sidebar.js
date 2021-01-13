import React from "react"
import sidebarStyles from "./sidebar.module.scss"
import IconPhone from "../../assets/icons/icon-phone.svg"
import IconEnvelop from "../../assets/icons/icon-envelop.svg"
import IconFacebook from "../../assets/icons/icon-fb.svg"
import { graphql, useStaticQuery } from "gatsby"

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div className={sidebarStyles.sidebar}>
      <div className={sidebarStyles.sidebarIcons}>
        <div className={sidebarStyles.sidebarPhoneAlert} />
        <IconPhone className={sidebarStyles.sidebarIcon} />
        <IconEnvelop className={sidebarStyles.sidebarIcon} />
        <IconFacebook className={sidebarStyles.sidebarIcon} />
      </div>
      <p className={sidebarStyles.sidebarAuthor}>
        Projekt i wdrożenie{" "}
        <a
          className={sidebarStyles.sidebarLink}
          href="http://criscode.eu"
          target="_blank"
        >
          {data.site.siteMetadata.author}
        </a>
      </p>
    </div>
  )
}

export default Sidebar

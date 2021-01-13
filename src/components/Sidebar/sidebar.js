import React from "react"
import sidebarStyles from "./sidebar.module.scss"
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

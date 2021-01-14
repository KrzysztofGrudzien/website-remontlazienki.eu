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
      <span className={sidebarStyles.sidebarPhoneTooltip}>
        Witaj, <br />
        Widzimy, że nadal jesteś nie zdecydowany. Nie wachaj się i zadzwoń .
        Odpowiemy Ci na wszelkie pytania z zakresu remontów i wykańczania
        łazienek indywidualnie jak i pod projekt.
        <br />
        <br />
        ARTUR GRUDZIEŃ
        <br />
        tel. 519-811-460 dekorilla@wp.pl
      </span>
      <span className={sidebarStyles.sidebarEmailTooltip}>
        Witaj, <br />
        Jeśli nie chcesz z nami rozmawiać, zawsze możesz napisać szybkiego
        maila. Odpowiemy na niego jak najszybciej się da. <br />
        <br />
        dekorilla@wp.pl
      </span>
      <span className={sidebarStyles.sidebarFacebookTooltip}>
        Witaj, <br />
        Jeśli chcesz być na bierząco zaglądaj na nasz profil na facebooku.
        <br />
        <br />
        Znajdziesz nas tutaj: <a href="#">facebook.com/dekorilla</a>
      </span>
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

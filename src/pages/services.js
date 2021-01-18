import React from "react"
import Layout from "../components/Layout/layout"
import servicesStyles from "./pages.module.scss"
import IconSmallCross from "../assets/icons/icon-cross-small.svg"
import IconCheck from "../assets/icons/icon-check.svg"
import IconTerracotta from "../assets/icons/icon-squares.svg"
import IconBath from "../assets/icons/icon-bath.svg"
import IconPaintTool from "../assets/icons/icon-paint-tool.svg"
import IconColorLabels from "../assets/icons/icon-color-labels.svg"
import IconBulb from "../assets/icons/icon-bulb.svg"
import IconTools from "../assets/icons/icon-tools.svg"
import IconArrowLeftLight from "../assets/icons/icon-arrow-left-light.svg"
import IconArrowRightLight from "../assets/icons/icon-arrow-right-light.svg"
import { Link } from "gatsby"

const ServicesPage = () => {
  return (
    <Layout>
      <article className={servicesStyles.article}>
        <IconSmallCross
          className={servicesStyles.articleIconSmallCrossLeftTop}
        />
        <IconSmallCross
          className={servicesStyles.articleIconSmallCrossLeftBottom}
        />
        <IconSmallCross
          className={servicesStyles.articleIconSmallCrossRightTop}
        />
        <IconSmallCross
          className={servicesStyles.articleIconSmallCrossRightBottom}
        />
        <h2>
          “Zrealizowaliśmy setki projektów wg pomysłu klienta lub projektu”
        </h2>
        <p className={servicesStyles.articleTitle}>
          W tak małych pomieszczeniach skupia się tak wiele detali, które tworzą
          piękną całość. Dlatego my wychodzimy naprzeciw potrzebom klienta.
          Jesteśmy w stanie wykonać każdą łazienkę. Współpracujemy z
          profesjonalnym projektantem, co umożliwia wizualizację projektu na
          życzenie klienta. Służymy pomocą w doborze, transporcie oraz
          wniesieniu materiałów.
        </p>
        <Link to="/gallery" className={servicesStyles.pageLink}>
          nasza galeria
        </Link>
      </article>
      <section className={servicesStyles.services}>
        <h2>Co jeszcze możemy zrobić?</h2>
        <div className={servicesStyles.servicesCards}>
          <div className={servicesStyles.servicesCard}>
            <IconTerracotta />
            <span className={servicesStyles.servicesCardTitle}>
              glazura i terakota
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> szlifowanie narożników
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> układanie glazury i terakoty
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> układanie gresu
              </li>
            </ul>
          </div>
          <div className={servicesStyles.servicesCard}>
            <IconPaintTool />
            <span className={servicesStyles.servicesCardTitle}>
              prace wykończeniowe
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> układanie paneli podłogowych
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> malowanie
              </li>
              <li>
                <IconCheck /> zabudowy karton-gips
              </li>
            </ul>
          </div>
          <div className={servicesStyles.servicesCard}>
            <IconBath />
            <span className={servicesStyles.servicesCardTitle}>
              armatura łazienkowa
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> montaż armatury łazienkowej
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> dobór materiałów
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> profesjonalne doradztwo
              </li>
            </ul>
          </div>
          <div className={servicesStyles.servicesCard}>
            <IconColorLabels />
            <span className={servicesStyles.servicesCardTitle}>
              aranżacja projektu
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> prace pod projekt
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> współpraca z biurem projektowym
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> pomoc przy doborze materiałów
              </li>
            </ul>
          </div>
          <div className={servicesStyles.servicesCard}>
            <IconBulb />
            <span className={servicesStyles.servicesCardTitle}>
              elektryka i oświetlenie
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> montaż skrzyń bezpiecznikowych
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> montaż oświetlenia
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> modernizacja instalacji elektrycznych
              </li>
            </ul>
          </div>
          <div className={servicesStyles.servicesCard}>
            <IconTools />
            <span className={servicesStyles.servicesCardTitle}>
              prace hydrauliczne
            </span>
            <ul className={servicesStyles.servicesList}>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> podłączanie rur wodno-kanalizacyjnych
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> wykuwanie bruzd i punktów
              </li>
              <li className={servicesStyles.servicesListItem}>
                <IconCheck /> inne prace hydrauliczne
              </li>
            </ul>
          </div>
        </div>
      </section>
      <span className="page-id">02. usługi</span>
      <div className={servicesStyles.buttonsWrapper}>
        <Link to="/" className={servicesStyles.buttonsWrapperLink}>
          <IconArrowLeftLight />
        </Link>
        <Link
          to="/gallery"
          className={`${servicesStyles.buttonsWrapperLink} ${servicesStyles.buttonsWrapperLinkActive}`}
        >
          <IconArrowRightLight />
        </Link>
      </div>
    </Layout>
  )
}

export default ServicesPage

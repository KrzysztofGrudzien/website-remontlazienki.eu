import React from "react"
import Layout from "../components/Layout/layout"
import galleryStyles from "./pages.module.scss"
import IconSmallCross from "../assets/icons/icon-cross-small.svg"
import LinkButton from "../components/LinkButton/LinkButton"

const GalleryPage = () => {
  return (
    <Layout>
      <article className={galleryStyles.article}>
        <IconSmallCross
          className={galleryStyles.articleIconSmallCrossLeftTop}
        />
        <IconSmallCross
          className={galleryStyles.articleIconSmallCrossLeftBottom}
        />
        <IconSmallCross
          className={galleryStyles.articleIconSmallCrossRightTop}
        />
        <IconSmallCross
          className={galleryStyles.articleIconSmallCrossRightBottom}
        />
        <h2>
          “Ponad 10 letnie doświadczeni na rynku Polskim oraz zagranicznym”
        </h2>
        <p className={galleryStyles.articleTitle}>
          Liczne grono zadowolonych klientów to nasza najlepsza rekomendacja.
          Dokonujemy pomiarów i wycen gratis. Przedstawiamy portfolio na
          pierwszym spotkaniu żeby nie być gołosłownym. Jesteśmy fachowcami.
          Zapraszamy do współpracy!
        </p>
        <LinkButton />
      </article>
      <span className="page-id">03. nasze prace</span>
    </Layout>
  )
}

export default GalleryPage

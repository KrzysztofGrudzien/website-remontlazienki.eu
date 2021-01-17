import React from "react"
import Layout from "../components/Layout/layout"
import galleryStyles from "./pages.module.scss"
import IconSmallCross from "../assets/icons/icon-cross-small.svg"
import LinkButton from "../components/LinkButton/LinkButton"
import LinkButtons from "../components/LinkButtons/LinkButtons"

const GalleryPage = () => {
  return (
    <Layout>
      <article className={galleryStyles.articleGallery}>
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
        <h2 className={galleryStyles.articleGalleryTitle}>
          “Ponad 10 letnie doświadczeni na rynku Polskim oraz zagranicznym”
        </h2>
        <div className={galleryStyles.articleGalleryWrapper}>
          <p className={galleryStyles.articleGalleryDescription}>
            Liczne grono zadowolonych klientów to nasza najlepsza rekomendacja.
            Dokonujemy pomiarów i wycen gratis. Przedstawiamy portfolio na
            pierwszym spotkaniu żeby nie być gołosłownym. Jesteśmy fachowcami.
            <br />
            <br />
            <strong>Zapraszamy do współpracy!</strong>
          </p>
          <LinkButton />
        </div>
      </article>
      <div className={galleryStyles.randomImage}></div>
      <div className={galleryStyles.sliderImage}></div>
      <h2 className={galleryStyles.galleryTitle}>
        Ostatnio zrealizowane projekty
      </h2>
      <span className="page-id">03. nasze prace</span>
      <LinkButtons />
    </Layout>
  )
}

export default GalleryPage

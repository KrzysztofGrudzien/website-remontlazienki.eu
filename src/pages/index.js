import React from "react"
import Layout from "../components/Layout/layout"
import indexStyles from "./index.module.scss"
import LinkButton from "../components/LinkButton/linkButton"
import IconArrowLeft from "../assets/icons/icon-arrow-left-dark.svg"
import IconArrowRight from "../assets/icons/icon-arrow-right-dark.svg"
import IconSmallCross from "../assets/icons/icon-cross-small.svg"
import LinkButtons from "../components/LinkButtons/LinkButtons"
import { graphql, useStaticQuery } from "gatsby"

const HomePage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "lazienka6.jpg" }) {
        id
        childImageSharp {
          fluid(fit: COVER, jpegQuality: 80, background: "black") {
            src
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <article className={indexStyles.article}>
        <IconSmallCross className={indexStyles.articleIconSmallCrossLeftTop} />
        <IconSmallCross
          className={indexStyles.articleIconSmallCrossLeftBottom}
        />
        <IconSmallCross className={indexStyles.articleIconSmallCrossRightTop} />
        <IconSmallCross
          className={indexStyles.articleIconSmallCrossRightBottom}
        />
        <h2>
          “Z dumą projektujemy i wykańczamy nowoczesne & stylowe łazienki”
        </h2>
        <p className={indexStyles.articleTitle}>
          Nasza firma oferujemy usługi wykończeniowo-remontowe łazienek. Idziemy
          z duchem czasu i wiemy, że od kilku lat nastał trend na tworzenie
          łazienek o nietuzinkowym wyglądzie, gdzie inwestor może stworzyć
          niesamowite i efektowne wnętrze sam czy korzystając z usług
          projektantów
        </p>
        <LinkButton />
      </article>
      <div className={indexStyles.slider}>
        <IconSmallCross className={indexStyles.articleIconSmallCrossLeftTop} />
        <IconSmallCross
          className={indexStyles.articleIconSmallCrossLeftBottom}
        />
        <IconSmallCross className={indexStyles.articleIconSmallCrossRightTop} />
        <IconSmallCross
          className={indexStyles.articleIconSmallCrossRightBottom}
        />
        <a className={indexStyles.sliderNavPrev}>
          <IconArrowLeft />
        </a>
        <div className={indexStyles.sliderGallery}>
          <img
            src={data.file.childImageSharp.fluid.src}
            className={indexStyles.sliderImage}
          />
        </div>
        <a className={indexStyles.sliderNavNext}>
          <IconArrowRight />
        </a>
      </div>
      <span className="page-id">01. home</span>
      <div className={indexStyles.buttonsContainer}>
        <LinkButtons />
      </div>
    </Layout>
  )
}

export default HomePage

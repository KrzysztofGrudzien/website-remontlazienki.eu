import React from "react"
import Layout from "../components/Layout/layout"
import indexStyles from "./index.module.scss"
import LinkButton from "../components/LinkButton/linkButton"
// import Img from "../assets/images/lazienka6.jpg"
import IconArrowLeft from "../assets/icons/icon-arrow-left-dark.svg"
import IconArrowRight from "../assets/icons/icon-arrow-right-dark.svg"

const HomePage = () => {
  return (
    <Layout>
      <article className={indexStyles.article}>
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
        <a className={indexStyles.sliderNavPrev}>
          <IconArrowLeft />
        </a>
        <div className={indexStyles.sliderGallery}>
          {/* <img src={Img} className={indexStyles.sliderImage}></img> */}
        </div>
        <a className={indexStyles.sliderNavNext}>
          <IconArrowRight />
        </a>
      </div>
    </Layout>
  )
}

export default HomePage

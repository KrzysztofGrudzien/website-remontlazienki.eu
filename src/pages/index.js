import React from "react"
import Layout from "../components/Layout/layout"
import indexContainer from "./index.module.scss"
import LinkButton from "../components/LinkButton/linkButton"

const HomePage = () => {
  return (
    <Layout>
      <article className={indexContainer.article}>
        <h2>
          “Z dumą projektujemy i wykańczamy nowoczesne & stylowe łazienki”
        </h2>
        <p className={indexContainer.articleTitle}>
          Nasza firma oferujemy usługi wykończeniowo-remontowe łazienek. Idziemy
          z duchem czasu i wiemy, że od kilku lat nastał trend na tworzenie
          łazienek o nietuzinkowym wyglądzie, gdzie inwestor może stworzyć
          niesamowite i efektowne wnętrze sam czy korzystając z usług
          projektantów
        </p>
        <LinkButton />
      </article>
    </Layout>
  )
}

export default HomePage

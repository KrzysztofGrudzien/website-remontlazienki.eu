import React from "react"
import Layout from "../components/Layout/layout"
import contactStyles from "./pages.module.scss"
import IconSmallCross from "../assets/icons/icon-cross-small.svg"
import LinkButtons from "../components/LinkButtons/LinkButtons"
import LinkButton from "../components/LinkButton/LinkButton"

const ContactPage = () => {
  return (
    <Layout>
      <section className={contactStyles.contactHero}>
        <IconSmallCross
          className={contactStyles.contactHeroIconSmallCrossLeftTop}
        />
        <IconSmallCross
          className={contactStyles.contactHeroIconSmallCrossLeftBottom}
        />

        <h2 className={contactStyles.contactHeroTitle}>
          “Jeśli jesteście Państwo zaintersowani naszymi usługami wypełnijcie
          formularz kontaktowy”
        </h2>
      </section>
      <div className={contactStyles.contactRandomImage}>
        <IconSmallCross
          className={contactStyles.contactRandomImageIconSmallCrossRightTop}
        />
        <IconSmallCross
          className={contactStyles.contactRandomImageIconSmallCrossRightBottom}
        />
      </div>
      <div className={contactStyles.contactFormContainer}>
        <form action="#" className={contactStyles.form}>
          <div className={contactStyles.formInputWrapper}>
            <input
              type="text"
              className={contactStyles.formInputName}
              placeholder="Twoje imię"
            />
            <sup>*</sup>
          </div>
          <div className={contactStyles.formInputWrapper}>
            <input
              type="email"
              className={contactStyles.formInputEmail}
              placeholder="Twój adres e-mail"
            />
            <sup>*</sup>
          </div>
          <div className={contactStyles.formInputWrapper}>
            <select className={contactStyles.formInputServiceType}>
              <option value="Rodzaj usługi">Rodzaj usługi</option>
              <option value="opcja 1">Opcja 1</option>
              <option value="opcja 2">Opcja 2</option>
              <option value="opcja 3">Opcja 3</option>
              <option value="opcja 4">Opcja 4</option>
              <option value="opcja 5">Opcja 5</option>
            </select>
          </div>
          <div className={contactStyles.formInputWrapper}>
            <input
              type="text"
              className={contactStyles.formInputCompany}
              placeholder="Firma (opcjonalnie)"
            />
          </div>
          <div className={contactStyles.formInputWrapper}>
            <input
              type="text"
              className={contactStyles.formInputPhone}
              placeholder="Twój telefon (opcjonalnie)"
            />
          </div>
          <div className={contactStyles.formInputWrapper}>
            <input
              type="text"
              className={contactStyles.formInputSubject}
              placeholder="Temat (opcjonalnie)"
            />
          </div>
          <div className={contactStyles.formInputWrapperTextArea}>
            <textarea
              cols="30"
              rows="10"
              placeholder="Treść wiadomości"
              className={contactStyles.formTextArea}
            />
            <LinkButton />
          </div>
          <div className={contactStyles.formInfoWrapper}>
            <div className={contactStyles.formInfoData}>
              <p className={contactStyles.formInfoDataCompany}>
                <strong>RemontLazienki.eu - Artur Grudzień</strong>
                <br />
                Usługi remontowo-wykończeniowe łazienek
                <br />
                <br />
                Telefon: <strong>519 811 460</strong>
                <br />
                E-mail: <strong>dekorilla@wp.pl</strong>
                <br />
                <br />
                <span className={contactStyles.formInfoDataCompanyImportant}>
                  WE CAN SPEAK ENGLISH, SO CALL TO US
                </span>
              </p>
            </div>
            <div className={contactStyles.formInfoQuote}>
              <div>
                <strong>Pamiętaj</strong>
              </div>
              <q>
                “Idziemy z duchem czasu i wiemy, że od kilku lat nastał trend na
                tworzenie łazienek o nietuzinkowym wyglądzie, gdzie inwestor
                może stworzyć niesamowite i efektowne wnętrze sam czy
                korzystając z usług projektantów.”{" "}
              </q>
            </div>
          </div>
        </form>
      </div>
      <span className="page-id">04. kontakt</span>
      <LinkButtons />
    </Layout>
  )
}

export default ContactPage

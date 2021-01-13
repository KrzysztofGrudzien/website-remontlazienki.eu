/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "remontlazienki.eu - firma remontowo-wykończeniowa",
    description:
      "Nasza firma oferujemy usługi wykończeniowo-remontowe łazienek. Idziemy z duchem czasu i wiemy, że od kilku lat nastał trend na tworzenie łazienek o nietuzinkowym wyglądzie, gdzie inwestor może stworzyć niesamowite i efektowne wnętrze sam czy korzystając z usług projektantów",
    author: "Krzysztof Grudzień",
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `My front-end development and design portfolio`,
    author: `dgale`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dallas Gale - Front-end developer & designer`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#151414`,
        theme_color: `#46b57a`,
        display: `minimal-ui`,
        icon: `src/images/dg-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}

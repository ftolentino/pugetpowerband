/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Puget Power Band`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
        options: {
            postCssPlugins: [require("tailwindcss")],
            },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/imgs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
          printRejected: false,
          develop: false,
          tailwind: true,
      }
    },
  ],
}

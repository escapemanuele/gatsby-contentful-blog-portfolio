/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
// eslint-disable-next-line
require("dotenv").config({
  path: `.env`,
})

// eslint-disable-next-line
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby starter for Contenful",
    description: "Gatsby+Contentful for a website with a blog and a portfolio",
    author: "Emanuele Buccelli",
    twitterUsername: "@escapemanuele",
    image: "/index-hero.jpg",
    siteUrl: "https://gatsby-contentful-portfolio-blog.netlify.app/",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // eslint-disable-next-line
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        // eslint-disable-next-line
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // eslint-disable-next-line
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatbsy Contentful Starter`,
        short_name: `GatsbyContentful`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `static/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}

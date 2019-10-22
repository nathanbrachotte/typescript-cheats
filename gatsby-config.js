'use strict'

module.exports = {
  siteMetadata: {
    title: 'typecript-react-cheat-sheet',
    description:
      'A Cheat Sheet with common Types/Boilerplate codes to get started with types in React & React Native',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://typecript-react-cheat-sheet.netlify.com/',
    author: {
      name: 'Nathan Brachotte',
      url: 'https://twitter.com/nathanbrachotte',
      email: 'nathan.brachotte@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://typecript-react-cheat-sheet.netlify.com/'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}

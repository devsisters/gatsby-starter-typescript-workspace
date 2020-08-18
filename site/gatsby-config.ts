import type { GatsbyConfig } from 'gatsby';
import type {} from 'gatsby-source-filesystem'

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby TypeScript Workspace',
    description: 'A minimal template with TypeScript & pnpm workspace',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-pnpm',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        emitSchema: {
          'src/__generated__/gatsby-schema.graphql': true,
          'src/__generated__/gatsby-schema.json': true,
        },
        emitPluginDocuemtns: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby TypeScript Workspace',
        short_name: 'GTW',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
      },
    },
  ],
};

module.exports = config;

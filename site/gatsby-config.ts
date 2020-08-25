import type { GatsbyConfig, IPluginRefObject } from 'gatsby';
import type { OverrideProps } from '@cometjs/core';

import type { FileSystemOptions } from 'gatsby-source-filesystem'
import type { PluginOptions as TypegenPlugionOptions } from 'gatsby-plugin-typegen/types';

type PluginRef<Resolve extends string, Options = unknown> = OverrideProps<IPluginRefObject, {
  resolve: Resolve,
  options: Options,
}>;

type PluginConfig = (
  | string
  | PluginRef<'gatsby-plugin-manifest'>
  | PluginRef<'gatsby-source-filesystem', FileSystemOptions>
  | PluginRef<'gatsby-plugin-typegen', TypegenPlugionOptions>
);

export const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: 'Gatsby TypeScript Workspace',
  description: 'A minimal template with TypeScript & pnpm workspace',
};

export const plugins: Array<PluginConfig> = [
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
      emitPluginDocuments: {
        'src/__generated__/gatsby-plugin-documents.graphql': true,
      },
    },
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Gatsby TypeScript Workspace', short_name: 'GTW',
      start_url: '/',
      background_color: '#663399',
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'src/images/gatsby-icon.png',
    },
  },
];

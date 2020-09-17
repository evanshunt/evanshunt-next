const path = require('path');
const Dotenv = require('dotenv');
const DotenvWebPack = require('dotenv-webpack');
const withFonts = require('nextjs-fonts');
const CMSApi = require('./utility/cms');

const next_config = withFonts({
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' }
    };

    // COPIED FROM STAMPEDE FOR REFERENCE
    // Pull down all applicable routes from Contentful
    // so static site exports can be supported
    // Dotenv.config();
    // const api = new CMSApi();
    // const pages = await api.fetchContentPages('contentPage');
    // pages.forEach(page => {
    //   console.log(page.fields.pageMeta.fields.slug);
    //   paths[`/${page.fields.pageMeta.fields.slug}`] = { page: '/[slug]', query: { slug: page.fields.pageMeta.fields.slug } };
    // });

    // const artistPages = await api.fetchContentPages('artistPage');
    // artistPages.forEach(page => {
    //   console.log(page.fields.pageMeta.fields.slug);
    //   paths[`/${page.fields.pageMeta.fields.slug}`] = { page: '/[slug]', query: { slug: page.fields.pageMeta.fields.slug } };
    // });

    // const venuePages = await api.fetchContentPages('venuePage');
    // venuePages.forEach(page => {
    //   console.log(page.fields.pageMeta.fields.slug);
    //   paths[`/${page.fields.pageMeta.fields.slug}`] = { page: '/[slug]', query: { slug: page.fields.pageMeta.fields.slug } };
    // });

    return paths;
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new DotenvWebPack({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  }
});

module.exports = {...next_config};
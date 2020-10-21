const path = require("path");
const Dotenv = require("dotenv");
const DotenvWebPack = require("dotenv-webpack");
const withFonts = require("nextjs-fonts");
const CMSApi = require("./utility/cms");

const next_config = withFonts({
  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/our-work": { page: "/our-work" },
      "/our-services": { page: "/our-services" },
      "/about-us": { page: "/about-us" },
      "/contact": { page: "/contact" },
      "/careers": { page: "/careers" },
    };

    const api = new CMSApi();

    const workPages = await api.fetchContentPages("pageWork");
    workPages.forEach((page) => {
      console.log(page.fields.slug);
      paths[`/our-work/${page.fields.slug}`] = {
        page: "/our-work/[slug]",
        query: { slug: page.fields.slug },
      };
    });

    const careerPages = await api.fetchContentPages("pageCareerDetails");
    careerPages.forEach((page) => {
      console.log(page.fields.slug);
      paths[`/careers/${page.fields.slug}`] = {
        page: "/careers/[slug]",
        query: { slug: page.fields.slug },
      };
    });

    const servicePages = await api.fetchContentPages("pageService");
    servicePages.forEach((page) => {
      console.log(page.fields.slug);
      paths[`/our-services/${page.fields.slug}`] = {
        page: "/our-services/[slug]",
        query: { slug: page.fields.slug },
      };
    });

    return paths;
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new DotenvWebPack({
        path: path.join(__dirname, ".env"),
        systemvars: true,
      }),
    ];

    return config;
  },
});

module.exports = { ...next_config };

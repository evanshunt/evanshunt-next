const contentful = require("contentful");

function CMSApi() {
  console.log("Accessing Contentful space " + process.env.CONTENTFUL_SPACE);

  this.client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN,
  });

  this.fetchContentType = async (contentType) => {
    return await this.client
      .getEntries({
        include: 4,
        content_type: contentType,
      })
      .then(async (results) => {
        const page = results.items[0];

        if (page) {
          return page;
        }

        return null;
      });
  };

  this.fetchContentPages = async (slug) => {
    return await this.client
      .getEntries({
        include: 3,
        content_type: slug,
      })
      .then((results) => {
        if (results.items) {
          return results.items;
        }
        return [];
      });
  };

  this.fetchCareerPageBySlug = async slug => {
    return await this.client
      .getEntries({
        include: 3,
        content_type: "pageCareerDetails",
        "fields.slug": slug
      })
      .then(async results => {
        const page = results.items[0];

        if (page) {
          return page;
        }

        return null;
      });
  };
}

module.exports = CMSApi;

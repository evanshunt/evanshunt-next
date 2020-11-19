const contentful = require("contentful");

const getEnv = () => {
  return process.env.NODE_ENV
}

const contentfulSettings = () => {
  
  let settings = {
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_TOKEN
  }
  
  // for development, use the preview api for draft content
  const deployContext = process.env.CONTEXT || null
  console.log('Deploy context: ', deployContext)
  if (getEnv() === 'development' || deployContext === 'branch-deploy') {
    settings = {
      space: process.env.CONTENTFUL_SPACE,
      accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN,
      host: 'preview.contentful.com'
    }
  }
  return settings
}

function CMSApi() {
  console.log("Accessing Contentful space " + process.env.CONTENTFUL_SPACE);
  console.log("Environment: " + getEnv())

  const clientSettings = contentfulSettings()
  console.log('host: ', clientSettings.host)
  this.client = contentful.createClient(clientSettings);

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

  this.fetchWorkPageBySlug = async slug => {
    return await this.client
      .getEntries({
        include: 3,
        content_type: "pageWork",
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

  this.fetchServicePageBySlug = async slug => {
    return await this.client
      .getEntries({
        include: 3,
        content_type: "pageService",
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

import React from 'react'

const CMSApi = require("../utility/cms");

const SitemapPage = (content) => {
  return (
    <div>
      Sitemap.xml in progress...
    </div>
  );
}

const pageContentTypes = [
  "pageOurWork"
]

SitemapPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageOurWork");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default SitemapPage;
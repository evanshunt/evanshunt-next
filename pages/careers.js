import Layout from "../layouts/Page";
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
import Head from 'next/head';
const CMSApi = require("../utility/cms");
const Careers = (content) => {
  return (
    <Layout className="content-page contact-page">
      
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
      
      <div id="BambooHR" data-domain="//evanshunt.bamboohr.com"></div>
        <script type="text/javascript" src="//evanshunt.bamboohr.com/js/embed.js" data-nopudgy="true" defer async="async"></script>

    </Layout>
  );
};

Careers.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageCareers");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default Careers;

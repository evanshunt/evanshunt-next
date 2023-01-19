import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");

const OurServicesPage = (content) => {
  return (
    <Layout className="content-page our-services-page">
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
    </Layout>
  );
}

OurServicesPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchUniquePageType("pageOurServices");
  
  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default OurServicesPage;
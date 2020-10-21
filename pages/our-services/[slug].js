import Layout from "../../layouts/Page";
import PageMeta from "../../components/PageMeta";
import renderComponents from "../../components/ComponentList";
const CMSApi = require("../../utility/cms");

const ServiceDetails = (content) => {
  console.log(content)
  return (
    <Layout className="content-page service-details-page" inlineHeader={true}>
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
    </Layout>
  );
};

ServiceDetails.getInitialProps = async ({ query }) => {
  const api = new CMSApi();
  const json = await api.fetchServicePageBySlug(query.slug);

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default ServiceDetails;

import Layout from "../../layouts/Page";
import PageMeta from "../../components/PageMeta";
import renderComponents from "../../components/ComponentList";
const CMSApi = require("../../utility/cms");

const CareerDetails = (content) => {
  return (
    <Layout className="content-page career-details-page" inlineHeader={true}>
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
    </Layout>
  );
};

CareerDetails.getInitialProps = async ({ query }) => {
  const api = new CMSApi();
  const json = await api.fetchCareerPageBySlug(query.slug);

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default CareerDetails;

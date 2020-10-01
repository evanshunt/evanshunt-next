import Layout from "../layouts/Page";
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");

const AboutUsPage = (content) => {
  return (
    <Layout className="content-page about-us-page">
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
    </Layout>
  );
}

AboutUsPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageAboutUs");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default AboutUsPage;

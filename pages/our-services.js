import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");
import ServiceBlock from '../components/ServiceBlock'
import InlineVideo from '../components/InlineVideo'
import IntroBlock from '../components/IntroBlock'

const OurServicesPage = (content) => {
  return (
    <Layout className="content-page our-services-page">
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
      {/*<ServiceBlock />*/}
      {/*<ServiceBlock title="Digital" textLeftOrRight={false} />*/}
      {/*<ServiceBlock title="Branding" />*/}
      {/*<ServiceBlock title="Marketing" textLeftOrRight={false} />*/}
      {/*<InlineVideo />*/}
      {/*<IntroBlock largeText="Ready to get started?" introText={false} centreAlign={true} cta={false} />*/}
    </Layout>
  );
}

OurServicesPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageOurServices");
  
  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default OurServicesPage;
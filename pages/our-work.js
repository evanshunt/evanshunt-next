import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import IntroBlock from '../components/IntroBlock'
import WorkGrid from '../components/WorkGrid'
import LogoGrid from '../components/LogoGrid'
const CMSApi = require("../utility/cms");

const OurWorkPage = (content) => {
  return (
    <Layout className="content-page our-work-page" inlineHeader={true} >
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      <IntroBlock introText={content.fields.introCopy} centreAlign={true} />
      <WorkGrid workPages={content.fields.workPages} />
      <LogoGrid 
        smallTitle={content.fields.logoGrid.fields.smallTitle}  
        largeTitle={content.fields.logoGrid.fields.largeTitle}
        logos={content.fields.logoGrid.fields.logos}
      />
    </Layout>
  );
}

OurWorkPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageOurWork");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default OurWorkPage;
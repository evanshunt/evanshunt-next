import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";
import DEIYear from "../components/DEIYear";
const CMSApi = require("../utility/cms");

const DeiReportPage = (content) => {
  return (
    <Layout className="content-page dei-report-page">
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      <HeroBanner
        smallText="Report"
        largeText="Diversity, equity and inclusion"
        flatHero="true"
      />
      <IntroBlock
        introText={content.fields.introText}
      />
      <DEIYear
      />
    </Layout>
  );
}

DeiReportPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchUniquePageType("pageDeiReport");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default DeiReportPage;
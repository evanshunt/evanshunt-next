import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";
import DEIYear from "../components/DEIYear";
const CMSApi = require("../utility/cms");

const DeiReportPage = ({ page, reportYears }) => {
  return (
    <Layout className="content-page dei-report-page">
      <PageMeta
        seoTitle={page.fields.pageMeta.fields.seoTitle}
        metaDescription={page.fields.pageMeta.fields.metaDescription}
        socialMediaImage={page.fields.pageMeta.fields.socialMediaImage}
      />
      <HeroBanner
        smallText="Report"
        largeText="Diversity, equity and inclusion"
        flatHero="true"
      />
      <IntroBlock
        introText={page.fields.introText}
      />
      <select>
      {reportYears.map((year, i) => {
        return (
          <option key={i}>{year.fields.year}</option>
        )
      })}
      </select>
      {reportYears.map((year, i) => {
        return (
          <DEIYear key={`reportYear-${i}`}  {...year} />
        )
      })}
    </Layout>
  );
}

DeiReportPage.getInitialProps = async () => {
  const api = new CMSApi();
  const page = await api.fetchUniquePageType("pageDeiReport");
  const reportYears = await api.fetchContentType("deiReportYear");
  if (page && reportYears) {
    return { page, reportYears }
  } else {
    return { errorCode: 404 };
  }
};

export default DeiReportPage;
import Layout from '../layouts/Page'
import PageMeta from "../components/PageMeta";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";
import DEIYear from "../components/DEIYear";
const CMSApi = require("../utility/cms");

const DeiReportPage = ({ page, reportYears }) => {
  const latestYear = reportYears[0].fields.year;
  const [activeYear, setActiveYear] = React.useState(latestYear);
  const handleChange = (e) => {
    setActiveYear(e.target.value);
  }

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
      <div id="reportSelector">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 16" className="svg-arrow">
          <path className="arrow-left arrow" d="M0,8a1.16,1.16,0,0,0,.38.87L7.85,16l2-1.73-5.25-5H32V6.74H4.63l5.25-5L7.85,0,.38,7.13A1.33,1.33,0,0,0,0,8Z" transform="translate(0 0)"/>
        </svg>
        <select onChange={(e) => handleChange(e)}>
          <option value={reportYears[0].fields.year} >View past reports</option>  
          {reportYears.map((year, i) => {
            return (
              <option key={i}>{year.fields.year}</option>
            )
          })}
        </select>
      </div>
      {reportYears.map((year, i) => {
        return (
          <DEIYear key={`reportYear-${i}`}  {...year} activeYear={activeYear} latestYear={latestYear} />
        )
      })}
    </Layout>
  );
}

DeiReportPage.getInitialProps = async () => {
  const api = new CMSApi();
  const page = await api.fetchUniquePageType("pageDeiReport");
  const reportYears = await api.fetchContentType("deiReportYear");
  reportYears.sort((a, b) => a.fields.year < b.fields.year ? 1 : -1)
  if (page && reportYears) {
    return { page, reportYears }
  } else {
    return { errorCode: 404 };
  }
};

export default DeiReportPage;
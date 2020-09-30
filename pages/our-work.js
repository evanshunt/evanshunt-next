import Layout from '../layouts/Page'
import IntroBlock from '../components/IntroBlock'
import WorkGrid from '../components/WorkGrid'
import LogoGrid from '../components/LogoGrid'

function OurWorkPage() {
  return (
    <Layout className="content-page work-work-page">
      <IntroBlock />
      <WorkGrid />
      <LogoGrid />
    </Layout>
  );
}

export default OurWorkPage;
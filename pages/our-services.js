import Layout from '../layouts/Page'
import ServiceBlock from '../components/ServiceBlock'
import InlineVideo from '../components/InlineVideo'
import IntroBlock from '../components/IntroBlock'

function OurServicesPage() {
  return (
    <Layout className="content-page our-services-page">
      <ServiceBlock />
      <ServiceBlock title="Digital" textLeftOrRight={false} />
      <ServiceBlock title="Branding" />
      <ServiceBlock title="Marketing" textLeftOrRight={false} />
      <InlineVideo />
      <IntroBlock largeText="Ready to get started?" introText={false} centreAlign={true} cta={true} />
    </Layout>
  );
}

export default OurServicesPage;
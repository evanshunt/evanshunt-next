import Layout from '../layouts/Page'
import ServiceBlock from '../components/ServiceBlock'

function OurServicesPage() {
  return (
    <Layout className="content-page our-services-page">
      <ServiceBlock />
      <ServiceBlock title="Digital" textLeftOrRight={false} />
      <ServiceBlock title="Branding" />
      <ServiceBlock title="Marketing" textLeftOrRight={false} />
    </Layout>
  );
}

export default OurServicesPage;
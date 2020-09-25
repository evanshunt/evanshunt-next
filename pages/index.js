import Layout from "../layouts/Page";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";
import FeaturedProjects from "../components/FeaturedProjects";
import ServiceCircles from "../components/ServiceCircles";

function HomePage() {
  return (
    <Layout className="content-page home-page">
      <HeroBanner />
      <IntroBlock />
      <FeaturedProjects />
      <ServiceCircles />
    </Layout>
  );
}

export default HomePage;

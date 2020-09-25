import Layout from "../layouts/Page";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";
import FeaturedProjects from "../components/FeaturedProjects";

function HomePage() {
  return (
    <Layout className="content-page home-page">
      <HeroBanner />
      <IntroBlock />
      <FeaturedProjects />
    </Layout>
  );
}

export default HomePage;

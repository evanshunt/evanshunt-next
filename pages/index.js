import Layout from "../layouts/Page";
import HeroBanner from "../components/HeroBanner";
import IntroBlock from "../components/IntroBlock";

function HomePage() {
  return (
    <Layout className="content-page home-page">
      <HeroBanner />
      <IntroBlock />
    </Layout>
  );
}

export default HomePage;

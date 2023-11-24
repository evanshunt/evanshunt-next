import Layout from "../layouts/Page";
import PageMeta from "../components/PageMeta";
import HeroBanner from "../components/HeroBanner";
import FeaturedArticles from "../components/news/FeaturedArticles";

const CMSApi = require("../utility/cms");

const NewsroomPage = (content) => {
  console.log(content);
  return (
    <Layout className="content-page newsroom-page" inlineHeader={true}>
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />

      <HeroBanner
        smallText={content.fields.heroBanner.fields.smallText}
        largeText={content.fields.heroBanner.fields.largeText}
        gradientHero={content.fields.heroBanner.fields.gradientHero}
        gradientColour={content.fields.heroBanner.fields.gradientColour}
        backgorundImage={content.fields.heroBanner.fields.backgorundImage}
        backgroundVideo={content.fields.heroBanner.fields.backgroundVideo}
        flatHero={true}
      />

      <FeaturedArticles articles={content.fields.featuredArticles} />
    </Layout>
  );
};

NewsroomPage.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchUniquePageType("pageNewsroom");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default NewsroomPage;

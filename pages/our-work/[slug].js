import { useEffect } from 'react'
import Layout from "../../layouts/Page";
import PageMeta from "../../components/PageMeta";
import renderComponents from "../../components/ComponentList";
import WorkPageIntro from '../../components/WorkPageIntro'
import HeroBanner from '../../components/HeroBanner'
import RelatedWork from '../../components/RelatedWork'
const CMSApi = require("../../utility/cms");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkDetails = (content) => {

  function afterLoaded() {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        content ? resolve() : reject();
      }, 2000);
    });
  }

  /* This is a fix for this issue:
    https://greensock.com/forums/topic/27307-scrolltrigger-marker-positions-shift-position-animation-sometimes-starts-off-screen/
    We need to re-run ScrollTrigger.refresh AFTER all our components have loaded on the page, otherwise the trigger
    positions are misaligned as you navigate back and forth between Case Study pages.
    This solution is pretty jank, please feel free to adjust/change as needed!
  */
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    afterLoaded()
    .then(() => {
      console.log('Content loaded!');
      ScrollTrigger.refresh();
    })
    .catch(() => {
      console.error('Content loading failed!');
    });
  }, []);


  if (!content) {
    return null
  }

  return (
    <Layout className="content-page work-details-page">
      
      {content.fields.pageMeta && (
        <PageMeta
          seoTitle={content.fields.pageMeta.fields.seoTitle}
          metaDescription={content.fields.pageMeta.fields.metaDescription}
          socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
        />
      )}
      
      {/* A bit weird to have the hero here too, but for now it will do */}
      {content.fields.heroBanner && (
        <HeroBanner
          gradientHero={content.fields.heroBanner.fields.gradientHero}
          gradientColour={
            content.fields.heroBanner.fields.gradientColour &&
            content.fields.heroBanner.fields.gradientColour[0]
          }
          backgroundImage={
            content.fields.heroBanner.fields.backgroundImage && 
            content.fields.heroBanner.fields.backgroundImage.fields.file.url
          }
          backgroundVideo={
            content.fields.heroBanner.fields.backgroundVideo &&
            content.fields.heroBanner.fields.backgroundVideo.fields.file.url
          }
          smallText={content.fields.heroBanner.fields.smallText}
          largeText={content.fields.heroBanner.fields.largeText}
        />
      )}
      
      <WorkPageIntro {...content.fields} />
      
      
      {content.fields.components && renderComponents(content.fields.components)}

      {content.fields.relatedProjectsBlock && <RelatedWork items={content.fields.relatedProjectsBlock} />}

    </Layout>
  );
};

WorkDetails.getInitialProps = async ({ query }) => {
  const api = new CMSApi();
  const json = await api.fetchWorkPageBySlug(query.slug);

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default WorkDetails;

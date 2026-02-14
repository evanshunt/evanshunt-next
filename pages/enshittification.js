import { useEffect } from "react";
import Layout from "../layouts/Page";
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Enshittification = (content) => {
  function afterLoaded() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
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
        console.log("Content loaded!");
        ScrollTrigger.refresh();
      })
      .catch(() => {
        console.error("Content loading failed!");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout className="content-page enshittification-page">
      {content?.fields?.pageMeta ? (
        <PageMeta
          seoTitle={content.fields.pageMeta.fields.seoTitle}
          metaDescription={content.fields.pageMeta.fields.metaDescription}
          socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
        />
      ) : (
        <PageMeta
          seoTitle="Enshittification"
          metaDescription="Default description for enshittification page"
          socialMediaImage={null}
        />
      )}
      {content?.fields?.components && renderComponents(content.fields.components)}
    </Layout>
  );
};

Enshittification.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchUniquePageType("pageEnshittification");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default Enshittification;

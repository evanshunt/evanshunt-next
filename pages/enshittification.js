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
    // Debug: Log the content to see what we're getting from the API
    console.log("Enshittification content:", content);
    
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
          hideNavigation={content.fields.pageMeta.fields.hideNavigation}
        />
      ) : (
        <PageMeta
          seoTitle="Enshittification"
          metaDescription="Default description for enshittification page"
          socialMediaImage={null}
        />
      )}
      
      {/* Display content if available */}
      {content?.fields?.components ? (
        renderComponents(content.fields.components)
      ) : (
        // Fallback content when CMS data is not available
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>Enshittification Page</h1>
          <p>Content is currently being loaded or configured in the CMS.</p>
          {process.env.NODE_ENV === 'development' && (
            <div style={{ backgroundColor: '#f0f0f0', padding: '1rem', marginTop: '1rem', textAlign: 'left' }}>
              <h3>Debug Information:</h3>
              <p><strong>Content received:</strong> {content ? 'Yes' : 'No'}</p>
              <p><strong>Has fields:</strong> {content?.fields ? 'Yes' : 'No'}</p>
              <p><strong>Has components:</strong> {content?.fields?.components ? 'Yes' : 'No'}</p>
              <p><strong>Error code:</strong> {content?.errorCode || 'None'}</p>
              <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                {JSON.stringify(content, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}
    </Layout>
  );
};

Enshittification.getInitialProps = async () => {
  try {
    const api = new CMSApi();
    const json = await api.fetchUniquePageType("pageEnshittification");

    console.log("Fetched enshittification data:", json ? 'Found' : 'Not found');
    
    if (json) {
      return json;
    } else {
      console.warn("No content found for pageEnshittification content type");
      return { errorCode: 404, message: "No content found for pageEnshittification" };
    }
  } catch (error) {
    console.error("Error fetching enshittification content:", error);
    return { errorCode: 500, message: "Error fetching content", error: error.message };
  }
};

export default Enshittification;

import Layout from "../layouts/Page";
import PageMeta from "../components/PageMeta";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");
import React, { useEffect } from "react";
const Careers = (content) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "//evanshunt.bamboohr.com/js/embed.js");
    document.body.appendChild(script);
  }, []);

  return (
    <Layout className="content-page contact-page">
      
      <PageMeta
        seoTitle={content.fields.pageMeta.fields.seoTitle}
        metaDescription={content.fields.pageMeta.fields.metaDescription}
        socialMediaImage={content.fields.pageMeta.fields.socialMediaImage}
      />
      {content.fields.components && renderComponents(content.fields.components)}
      
      <div id="BambooHR" data-domain="//evanshunt.bamboohr.com" data-nopudgy="true"></div>
      {/* 
      <!-- using `useEffect` instead as the script seems to load in a flaky manner if doing it like this -->
      <script type="text/javascript" src="//evanshunt.bamboohr.com/js/embed.js" async="async"></script>
      */}

    </Layout>
  );
};

Careers.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageCareers");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default Careers;

import Head from "next/head";
import { withRouter } from "next/router";

const PageMeta = ({ seoTitle, metaDescription, socialMediaImage, router }) => {
  return (
    <Head>
      <title>{seoTitle}</title>
      {metaDescription && <meta name="description" content={metaDescription} />}
      <link
        rel="canonical"
        href={`https://www.evanshunt.com${router.asPath}`}
      />
      <meta property="og:title" content={seoTitle} />
      {socialMediaImage && (
        <meta property="og:image" content={socialMediaImage} />
      )}
      {metaDescription && (
        <meta name="twitter:card" content={metaDescription} />
      )}
      <meta name="twitter:title" content={seoTitle} />
      {socialMediaImage && (
        <meta name="twitter:image" content={socialMediaImage} />
      )}
    </Head>
  );
};

export default withRouter(PageMeta);
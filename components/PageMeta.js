import Head from "next/head";
import { withRouter } from "next/router";

const PageMeta = ({ seoTitle, metaDescription, socialMediaImage, router }) => {

  const ogImageURL = 'https:' + socialMediaImage.fields.file.url;

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
        <meta property="og:image" content={ogImageURL} />
      )}
      {metaDescription && (
        <meta name="twitter:card" content={metaDescription} />
      )}
      <meta name="twitter:title" content={seoTitle} />
      {socialMediaImage && (
        <meta name="twitter:image" content={ogImageURL} />
      )}
      <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/images/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#ed0031" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default withRouter(PageMeta);
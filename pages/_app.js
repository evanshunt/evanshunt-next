import "../styles/styles.scss";
import TagManager from "react-gtm-module";
import { useEffect } from "react";
import "../styles/styles.scss";

const tagManagerArgs = {
  gtmId: "GTM-WH6ZFB6",
};

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);

  return <Component {...pageProps} />;
}

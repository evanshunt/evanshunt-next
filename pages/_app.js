import "../styles/styles.scss";
// import TagManager from "react-gtm-module";
// import { useEffect } from "react";
import "../styles/styles.scss";

// TODO: get GTM ID
// const tagManagerArgs = {
//   gtmId: "GTM-WJLDSRS",
// };

export default function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   TagManager.initialize(tagManagerArgs);
  // }, []);

  return <Component {...pageProps} />;
}

import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => (
  <>
    <Header inlineHeader={props.inlineHeader} />
    {/* A little help for the Netlify post-processing bots */}
    <form name="apply-form" data-netlify="true" netlify-honeypot="bot-field" hidden>
      <input type="text" name="first-name" />
      <input type="text" name="last-name" />
      <input type="email" name="email" />
      <input type="file" name="resume" />
      <input type="text" name="message" />
    </form>
    <main className={props.className}>{props.children}</main>
    <Footer />
  </>
);

export default Layout;

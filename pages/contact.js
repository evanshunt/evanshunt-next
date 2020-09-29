import Layout from "../layouts/Page";
import renderComponents from "../components/ComponentList";
const CMSApi = require("../utility/cms");

const ContactUs = (content) => {
  console.log(content);
  return (
    <Layout className="content-page contact-page">
      {content.fields.components && renderComponents(content.fields.components)}
    </Layout>
  );
};

ContactUs.getInitialProps = async () => {
  const api = new CMSApi();
  const json = await api.fetchContentType("pageContactUs");

  if (json) {
    return json;
  } else {
    return { errorCode: 404 };
  }
};

export default ContactUs;

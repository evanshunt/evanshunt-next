import ReactMarkdown from "react-markdown";

const ContactBlock = ({
  addressTitle,
  address,
  directionsLink,
  cta1Title,
  cta1,
  cta2Title,
  cta2,
}) => {
  return (
    <section className="contact-block">
      <div className="column">
        <h1>{addressTitle}</h1>
        <ReactMarkdown>{address}</ReactMarkdown>
        <a
          href={directionsLink}
          target="_blank"
          rel="noreferrer"
          className="post-right-arrow"
        >
          Get directions{" "}
          <img
            className="dark-arrow"
            src="/images/small-right-arrow.svg"
            alt="Right pointing arrow"
          />
          <img
            className="light-arrow"
            src="/images/small-right-arrow-white.svg"
            alt="Right pointing arrow"
          />
        </a>
      </div>

      <div className="column">
        <h2>{cta1Title}</h2>
        <a href={cta1.fields.url} className="btn">
          {cta1.fields.title}
        </a>
      </div>

      <div className="column">
        <h2>{cta2Title}</h2>
        <a href={cta2.fields.url} className="btn">
          {cta2.fields.title}
        </a>
      </div>
    </section>
  );
};

export default ContactBlock;

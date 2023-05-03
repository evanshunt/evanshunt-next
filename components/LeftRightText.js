import ReactMarkdown from "react-markdown";
const LeftRightText = (props) => {
  const { title, text, externalLink } = props;

  return (
    <section className="left-right-text">
      <div className="container-medium">
        <div className="left-right-text-flex">
          <div className="left-text">
            <h2 className="title">{title}</h2>
          </div>
          <div className="right-text">
            <ReactMarkdown className="description">{text}</ReactMarkdown>
            {externalLink && (
              <a
                className="external-link"
                href={externalLink.fields.url}
                title={externalLink.fields.title}
                target="_blank"
                rel="noreferrer"
              >
                {externalLink.fields.title}
                <img
                  className="external-link-icon external-link-icon-dark"
                  src="/images/external-link.svg"
                  alt="external link icon"
                />
                <img
                  className="external-link-icon external-link-icon-light"
                  src="/images/external-link-white.svg"
                  alt="external link icon"
                />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftRightText;

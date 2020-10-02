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
        <ReactMarkdown source={address} />
        <a href={directionsLink} target="_blank" rel="noreferrer">
          Get directions{" "}
          <svg width="21" height="9">
            <defs>
              <path id="a" d="M0 0h21v10H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
              <mask id="b" fill="#fff">
                <use xlinkHref="#a" />
              </mask>
              <path
                d="M20.751 4.013L15.847 0l-1.331.974 3.448 2.818H-10.5v1.416h28.464l-3.448 2.818L15.847 9l4.904-4.013c.168-.137.25-.299.249-.487a.707.707 0 00-.249-.487z"
                fill="#000"
                mask="url(#b)"
              />
            </g>
          </svg>
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

import Link from "next/link";
import CollapsingSection from "./CollapsingSection";
import RichText from "./RichText";

const JobDescription = (components) => {
  return (
    <section className="job-description">
      <div className="column left container-narrow">
        <Link href="/careers" legacyBehavior>
          <a>
            <img
              src="/images/small-left-chevron.svg"
              alt="Chevron pointing left"
            />{" "}
            Back to careers
          </a>
        </Link>
      </div>
      <div className="column right container-narrow">
        {components.components &&
          components.components.map((component, i) => {
            switch (component.sys.contentType.sys.id) {
              case "globalElementRichText":
                return (
                  <RichText
                    content={component.fields.richText}
                    key={`component-${i}`}
                  />
                );

              case "componentCollapsingSection":
                return (
                  <CollapsingSection
                    title={component.fields.title}
                    content={component.fields.content}
                    key={`component-${i}`}
                  />
                );

              default:
                return (
                  <p key={`component-${i}`}>
                    Component {component.sys.contentType.sys.id} not defined in
                    code
                  </p>
                );
            }
          })}

        <div className="ctas">
          <a
            href="#apply-form-component"
            className="btn btn-outline btn-secondary"
          >
            Apply Now
          </a>
          {/* TODO: figure out what this link should do */}
          <a href="#">
            Send to a friend{" "}
            <img
              src="/images/small-right-arrow.svg"
              alt="Right pointing arrow"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default JobDescription;

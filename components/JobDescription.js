import Link from "next/link";
import CollapsingSection from "./CollapsingSection";
import RichText from "./RichText";

const JobDescription = (components) => {
  console.log(components);
  return (
    <section className="job-description">
      <div className="column left">
        <Link href="/careers">
          <a>
            <img
              src="/images/small-left-chevron.svg"
              alt="Chevron pointing left"
            />{" "}
            Back to careers
          </a>
        </Link>
      </div>
      <div className="column right">
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
      </div>
    </section>
  );
};

export default JobDescription;

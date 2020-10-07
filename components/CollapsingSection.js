import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CollapsingSection = (props) => {
  return (
    <div className="collapsing-section">
      <button>{props.title}</button>
      <div className="rich-text">
        {documentToReactComponents(props.content)}
      </div>
    </div>
  );
};

export default CollapsingSection;

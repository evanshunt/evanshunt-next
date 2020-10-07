import { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const CollapsingSection = ({ content, title }) => {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className={open ? `collapsing-section active` : `collapsing-section`}>
      <button onClick={toggleAccordion}>
        {title} <img src="/images/red-plus.svg" alt="Expand section" />
      </button>
      <div className={open ? `accordion-panel active` : `accordion-panel`}>
        <div className="rich-text">
          {documentToReactComponents(content)}
        </div>
      </div>
    </div>
  );
};

export default CollapsingSection;

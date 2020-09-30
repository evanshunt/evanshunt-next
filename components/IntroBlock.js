import React from "react";
import classNames from "classnames";

// Intro Block
const IntroBlock = ({ largeText, introText, centreAlign, cta }) => {
  const introBlockClasses = classNames("intro-block", {
    centered: centreAlign,
  });

  return (
    <section className={introBlockClasses}>
      {largeText && <h1 className="intro-block-title">{largeText}</h1>}
      {introText && (
        <div className="intro-block-text">
          <p>{introText}</p>
          {cta && (
            <a href={cta.fields.url} className="btn">
              {cta.fields.title}
            </a>
          )}
        </div>
      )}
      {!introText && cta && (
        <a href={cta.fields.url} className="btn">
          {cta.fields.title}
        </a>
      )}
    </section>
  );
};

export default IntroBlock;

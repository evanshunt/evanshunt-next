import React from "react";
import classNames from "classnames";
import Link from 'next/link'

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
            <Link href={cta.fields.url}>
              <a className="btn btn-secondary btn-outline" title={cta.fields.title}>
                {cta.fields.title}
              </a>
            </Link>
          )}
        </div>
      )}
      {!introText && cta && (
        <Link href={cta.fields.url}>
          <a className="btn btn-secondary btn-outline" title={cta.fields.title}>
            {cta.fields.title}
          </a>
        </Link>
      )}
    </section>
  );
};

export default IntroBlock;

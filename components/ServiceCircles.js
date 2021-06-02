import React from "react";
import Link from 'next/link'

const ServiceCircles = ({
  title,
  smallText,
  circle1Title,
  circle1Description,
  circle1Cta,
  circle2Title,
  circle2Description,
  circle2Cta,
  circle3Title,
  circle3Description,
  circle3Cta,
  circle4Title,
  circle4Description,
  circle4Cta,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="service-circles">
      {title && <h3 className="service-circles-title">{title}</h3>}
      {smallText && <p className="service-circles-copy">{smallText}</p>}

      <div className="service-circles-list">
        <div className="service-circle-column">
          <a href={circle1Cta} className="service-circle service-circle-1">
            <span className="service-circle-title">{circle1Title}</span>
            <span className="service-circle-description">
              {circle1Description}
            </span>
          </a>
        </div>

        <div className="service-circle-column">
          <a href={circle2Cta} className="service-circle service-circle-2">
            <span className="service-circle-title">{circle2Title}</span>
            <span className="service-circle-description">
              {circle2Description}
            </span>
          </a>
        </div>
        <div className="service-circle-column">
          <a href={circle3Cta} className="service-circle service-circle-3">
            <span className="service-circle-title">{circle3Title}</span>
            <span className="service-circle-description">
              {circle3Description}
            </span>
          </a>
        </div>
        <div className="service-circle-column">
          <a href={circle4Cta} className="service-circle service-circle-4">
            <span className="service-circle-title">{circle4Title}</span>
            <span className="service-circle-description">
              {circle4Description}
            </span>
          </a>
        </div>
      </div>

      {primaryCta && (
        <div className="service-circle-primary-link">
          <Link href={primaryCta.fields.url}>
            <a className="btn btn-secondary" title={primaryCta.fields.title}>
              {primaryCta.fields.title}
            </a>
          </Link>
        </div>
      )}

      {secondaryCta && (
        <div className="service-circle-secondary-link">
          <Link href={secondaryCta.fields.url}>
            <a className="cta-animate-arrow" title={secondaryCta.fields.title}>
              {secondaryCta.fields.title}
              <img src="/images/small-right-arrow.svg" alt="Black arrow pointing right" className="black-arrow" />
            </a>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServiceCircles;

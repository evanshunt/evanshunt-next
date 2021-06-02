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
          <Link href={circle1Cta}>
            <div className="service-circle service-circle-1">
              <span className="service-circle-title">{circle1Title}</span>
              <span className="service-circle-description">
                {circle1Description}
              </span>
            </div>
          </Link>
        </div>

        <div className="service-circle-column">
          <Link href={circle2Cta}>
            <div className="service-circle service-circle-2">
              <span className="service-circle-title">{circle2Title}</span>
              <span className="service-circle-description">
                {circle2Description}
              </span>
            </div>
          </Link>
        </div>
        <div className="service-circle-column">
          <Link href={circle3Cta}>
            <div className="service-circle service-circle-3">
              <span className="service-circle-title">{circle3Title}</span>
              <span className="service-circle-description">
                {circle3Description}
              </span>
            </div>
          </Link>
        </div>
        <div className="service-circle-column">
          <Link href={circle4Cta}>
            <div className="service-circle service-circle-4">
              <span className="service-circle-title">{circle4Title}</span>
              <span className="service-circle-description">
                {circle4Description}
              </span>
            </div>
          </Link>
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

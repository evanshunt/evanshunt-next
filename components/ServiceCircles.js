import React from "react";
import Link from 'next/link'

const ServiceCircles = ({
  title,
  smallText,
  circle1Title,
  circle1Description,
  circle2Title,
  circle2Description,
  circle3Title,
  circle3Description,
  circle4Title,
  circle4Description,
  primaryCta,
  secondaryCta,
}) => {
  return (
    <section className="service-circles">
      {title && <h3 className="service-circles-title">{title}</h3>}
      {smallText && <p className="service-circles-copy">{smallText}</p>}

      <div className="service-circles-list">
        <div className="service-circle-column">
          <div className="service-circle service-circle-1">
            <span className="service-circle-title">{circle1Title}</span>
            <span className="service-circle-description">
              {circle1Description}
            </span>
          </div>
        </div>

        <div className="service-circle-column">
          <div className="service-circle service-circle-2">
            <span className="service-circle-title">{circle2Title}</span>
            <span className="service-circle-description">
              {circle2Description}
            </span>
          </div>
        </div>
        <div className="service-circle-column">
          <div className="service-circle service-circle-3">
            <span className="service-circle-title">{circle3Title}</span>
            <span className="service-circle-description">
              {circle3Description}
            </span>
          </div>
        </div>
        <div className="service-circle-column">
          <div className="service-circle service-circle-4">
            <span className="service-circle-title">{circle4Title}</span>
            <span className="service-circle-description">
              {circle4Description}
            </span>
          </div>
        </div>
      </div>

      {primaryCta && (
        <div>
          <Link href={primaryCta.fields.url}>
            <a className="btn btn-secondary" title={primaryCta.fields.title}>
              {primaryCta.fields.title}
            </a>
          </Link>
        </div>
      )}

      {secondaryCta && (
        <div>
          <Link href={secondaryCta.fields.url}>
            <a title={secondaryCta.fields.title}>{secondaryCta.fields.title}</a>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ServiceCircles;

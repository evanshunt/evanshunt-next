import React from "react";
import Link from 'next/link'

const FeaturedProjects = ({ title, projects, cta }) => {
  return (
    <section className="featured-projects">
      <div className="container">
        <h6 className="base-font-medium">{title}</h6>
        <div className="featured-projects-list">
          {/* TODO: link actual projects from Our Work section */}
          <img
            src="//via.placeholder.com/1325x714/FF3E3E/FFFFFF?text=Featured+Project"
            alt=""
            className="img-fluid"
          />
          <img
            src="//via.placeholder.com/1325x714/333333/FFFFFF?text=Featured+Project"
            alt=""
            className="img-fluid"
          />
          {cta && (
            <Link href={cta.fields.url}>
              <a className="btn featured-projects-btn">
                {cta.fields.title}
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

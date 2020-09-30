import React from "react";

const FeaturedProjects = ({ title, projects, cta }) => {
  return (
    <section className="featured-projects">
      <div className="container">
        <p>
          <strong>{title}</strong>
        </p>
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
            <a href={cta.fields.url} className="btn featured-projects-btn">
              {cta.fields.title}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

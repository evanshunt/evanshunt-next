import React from "react";
import Link from 'next/link'

const FeaturedProjects = ({ title, projects, cta }) => {
  
  return (
    <section className="featured-projects">
      <div className="container">
        {title && <h6 className="base-font-medium">{title}</h6>}
        <div className="featured-projects-list">
          {projects && projects.map((project, i) => {
            return (
              <Link href={`/our-work/${project.fields.slug}`} key={i}>
                <a title={project.fields.title}>
                  <img
                    src={project.fields.featuredProjectImage.fields.file.url}
                    alt={project.fields.featuredProjectImage.fields.file.description}
                    className="img-fluid"
                  />
                </a>
              </Link>
            )
          })}
          {cta && (
            <Link href={cta.fields.url}>
              <a className="btn featured-projects-btn" title={cta.fields.title}>
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

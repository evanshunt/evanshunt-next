import React, { useState, useEffect } from "react";
import Link from 'next/link'

const FeaturedProjects = ({ title, projects, cta }) => {
  
  const [ isMobile, setIsMobile ] = useState(false)
  
  useEffect(() => {
    if (window && window.innerWidth < 720) {
      setIsMobile(true)
      window.addEventListener('resize', handleResize)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }
  
  return (
    <section className="featured-projects">
      <div className="container">
        {title && <h6 className="base-font-medium">{title}</h6>}
        <div className="featured-projects-list">
          {projects && projects.map((project, i) => {
            let imgUrl = project.fields.featuredProjectImage.fields.file.url
            let imgDesc = project.fields.featuredProjectImage.fields.file.description
            // if there is a mobile specific image, switch to it
            if (isMobile && project.fields.featuredProjectMobileImage) {
              imgUrl = project.fields.featuredProjectMobileImage.fields.file.url
              imgDesc = project.fields.featuredProjectMobileImage.fields.file.description
            }
            return (
              <Link href={`/our-work/${project.fields.slug}`} key={i}>
                <a title={project.fields.title}>
                  <img
                    src={imgUrl}
                    alt={imgDesc}
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

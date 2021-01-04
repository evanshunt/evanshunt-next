import React, { useState, useEffect, useRef } from "react";
import classNames from 'classnames'
import Link from 'next/link'

const FeaturedProjects = ({ title, projects, cta }) => {

  const [ isMobile, setIsMobile ] = useState(false)
  let hasCustomAnimation = useRef(null);
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (window && window.innerWidth < 720) {
      setIsMobile(true)
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
            // Add in variables for foreground/background images, custom animation field.
            let mediaType = project.fields.featuredProjectImage.fields.file.contentType
            let mediaUrl = project.fields.featuredProjectImage.fields.file.url
            let mediaDesc = project.fields.featuredProjectImage.fields.file.description
            let foregroundImage = null;
            let foregroundDesc = null;
            let customAnimationClass = null;

            if (project.fields.featuredProjectImageForeground) {
              foregroundImage = project.fields.featuredProjectImageForeground
              foregroundDesc = project.fields.featuredProjectImageForeground.fields.file.description
            }

            if (project.fields.featuredProjectAnimationClass) {
              customAnimationClass = project.fields.featuredProjectAnimationClass
            }

            // if there is a mobile specific image, switch to it
            if (isMobile && project.fields.featuredProjectMobileImage) {
              mediaUrl = project.fields.featuredProjectMobileImage.fields.file.url
              mediaDesc = project.fields.featuredProjectMobileImage.fields.file.description
            }

            /*
            Types of Features:
            - default foreground element - image that displays on top of background (featuredProjectImage)
            - default featuredProjectImage field can be either a looping video or a JPG
            - If you need custom styling or animation per feature, use the "featuredProjectAnimationClass" field, otherwise
              if empty use the default styling
            */

           let classes = classNames('featured-project-item', {[`${customAnimationClass}`]: customAnimationClass})

            return (
              <div className={classes} key={i} ref={hasCustomAnimation}>
                <Link href={`/our-work/${project.fields.slug}`}>
                  <a title={project.fields.title}>
                  {mediaType.indexOf('video/') !== -1 &&
                    <video autoPlay muted loop playsinline className="video-fluid">
                      <source src={mediaUrl} type="video/mp4" />
                        Your browser does not support video tags.
                    </video>
                  }
                  {foregroundImage && foregroundImage.fields.file.url && (
                    <div className="foreground-image">
                      <img
                        src={foregroundImage.fields.file.url}
                        alt={foregroundDesc}
                        className="img-fluid"
                      />
                    </div>
                  )}
                  {mediaType.indexOf('image/') !== -1 &&
                    <img
                      src={mediaUrl}
                      alt={mediaDesc}
                      className="img-fluid"
                    />
                  }
                  </a>
                </Link>
              </div>
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

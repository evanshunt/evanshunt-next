import React from "react";
import classNames from "classnames";
import Link from "next/link";

const FeaturedProjects = ({ title, projects, cta }) => {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   if (window && window.innerWidth < 720) {
  //     setIsMobile(true);
  //   }
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const handleResize = () => {
  //   if (window.innerWidth < 720) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // };

  return (
    <section className="featured-projects">
      <div className="container">
        {title && <h6 className="base-font-medium">{title}</h6>}
        <div className="featured-projects-list">
          {projects &&
            projects.map((project, i) => {
              // Add in variables for foreground/background images, custom animation field.
              let mediaType =
                project.fields.featuredProjectImage.fields.file.contentType;
              let mediaUrl =
                project.fields.featuredProjectImage.fields.file.url;
              let mediaDesc =
                project.fields.featuredProjectImage.fields.description;
              let foregroundImage = null;
              let foregroundDesc = null;
              let customAnimationClass = null;

              if (project.fields.featuredProjectImageForeground) {
                foregroundImage = project.fields.featuredProjectImageForeground;
                foregroundDesc =
                  project.fields.featuredProjectImageForeground.fields.title;
              }

              if (project.fields.featuredProjectAnimationClass) {
                customAnimationClass =
                  project.fields.featuredProjectAnimationClass;
              }

              /*
            Types of Features:
            - default foreground element - image that displays on top of background (featuredProjectImage)
            - default featuredProjectImage field can be either a looping video or a JPG
            - If you need custom styling or animation per feature, use the "featuredProjectAnimationClass" field, otherwise
              if empty use the default styling
            */

              let classes = classNames("featured-project-item", {
                [`${customAnimationClass}`]: customAnimationClass,
              });

              return (
                <div className={classes} key={i}>
                  <Link
                    href={`/our-work/${project.fields.slug}`}
                    legacyBehavior
                  >
                    <a title={project.fields.title}>
                      {/* Checking for video */}
                      {mediaType.indexOf("video/") !== -1 && (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="video-fluid"
                          poster={mediaUrl}
                        >
                          <source src={mediaUrl} type="video/mp4" />
                          Your browser does not support video tags.
                        </video>
                      )}
                      {foregroundImage && foregroundImage.fields.file.url && (
                        <div className="foreground-image">
                          <picture>
                            <source
                              srcSet={`${foregroundImage.fields.file.url}?fm=webp`}
                              type="image/webp"
                            />
                            <source
                              srcSet={`${foregroundImage.fields.file.url}?fm=jpg`}
                              type="image/jpeg"
                            />
                            <img
                              className="img-fluid"
                              src={foregroundImage.fields.file.url}
                              alt={foregroundDesc}
                            />
                          </picture>
                        </div>
                      )}
                      {/* Checking for image */}
                      {mediaType.indexOf("image/") !== -1 && (
                        <picture>
                          <source
                            srcSet={`${mediaUrl}?fm=webp`}
                            type="image/webp"
                          />
                          <source
                            srcSet={`${mediaUrl}?fm=jpg`}
                            type="image/jpeg"
                          />
                          <img
                            className="img-fluid"
                            src={mediaUrl}
                            alt={mediaDesc}
                          />
                        </picture>
                      )}
                    </a>
                  </Link>
                </div>
              );
            })}
          {cta && (
            <Link href={cta.fields.url} legacyBehavior>
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

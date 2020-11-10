import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const WorkGrid = (props) => {
  let container = useRef(null);
  let trigger = useRef(null);

  useEffect(() => {

    const tl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: trigger.current,
        scrub: true,
        markers: true
      }
    });

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    tl.to(container.current, {
      x: 500,
      duration: 20,
    });
  }, [container]);

  const { workPages } = props;
  if (!workPages) {
    return null;
  }

  return (
    <section className="work-grid">
      <div className="container">
        <div className="trigger" ref={trigger}>
          trigger
        </div>
        <div className="header" ref={container}>
          <h1>Hello This animates as you scroll!</h1>
        </div>

        <div className="work-grid-columns">
          {workPages.map((page, i) => {
            return (
              <div className="work-grid-column" key={i}>
                <div className="work-grid-img">
                  {page.fields.squareImage && (
                    <Link href={`/our-work/${page.fields.slug}`}>
                      <a
                        title={page.fields.title}
                        className="work-grid-img-link"
                      >
                        <img
                          src={page.fields.squareImage.fields.file.url}
                          className="img-fluid"
                          alt={page.fields.squareImage.fields.file.description}
                        />
                      </a>
                    </Link>
                  )}
                  <div className="work-grid-cta">
                    <Link href={`/our-work/${page.fields.slug}`}>
                      <a title={page.fields.title} className="btn">
                        View case study
                      </a>
                    </Link>
                  </div>
                </div>
                {page.fields.title && (
                  <h5 className="work-grid-title base-font-medium">
                    {page.fields.title}
                  </h5>
                )}
                {page.fields.servicesList && (
                  <p className="work-grid-services">
                    {page.fields.servicesList.join(", ")}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;

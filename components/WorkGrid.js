import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import classNames from 'classnames'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const WorkGrid = (props) => {
  
  const [showMoreTiles, setShowMoreTiles] = useState(false)
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    // Tiles that fade in
    revealRefs.current.forEach((el, index) => {

      gsap.fromTo(el, {
        opacity: 0,
        y: 50
      }, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power4.inOut',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          //start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };

  const { workPages } = props;
  if (!workPages) {
    return null;
  }
  
  const initialTilesToShow = 12

  return (
    <section className="work-grid">
      <div className="container">

        <div className="work-grid-columns">
          {workPages.map((page, i) => {
            // output the first chunk of tiles
            if (i < initialTilesToShow) {
              return (
                <WorkGridColumn page={page} addToRefs={addToRefs} key={i} />
              ); 
            }
          })}
        </div>
        {workPages.length > initialTilesToShow && (
          <div className={classNames('show-all-btn', {'hidden': showMoreTiles})}>
            <button className="btn btn-primary" onClick={() => setShowMoreTiles(true)}>View all</button>
          </div>
        )}
        {workPages.length > initialTilesToShow && (
          <div className={classNames('work-grid-columns', 'more-columns', {'show-all': showMoreTiles})}>
            {workPages.map((page, i) => {
              // output the second chunk of tiles
              if (i >= initialTilesToShow) {
                return (
                  <WorkGridColumn page={page} addToRefs={addToRefs} key={i} />
                );
              }
            })}
          </div>
        )}
      </div>
    </section>
  );
};

// so we don't need to duplicate this
const WorkGridColumn = ({page, addToRefs}) => {
  return (
    <div className="work-grid-column" ref={addToRefs}>
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
  )
}

export default WorkGrid;

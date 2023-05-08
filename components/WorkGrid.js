import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import classNames from "classnames";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WorkGrid = (props) => {
  const [showMoreTiles, setShowMoreTiles] = useState(false);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    // Tiles that fade in
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 50,
        },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: "power4.inOut",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            //start: 'top center+=100',
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      revealRefs.current.forEach((el, index) => {
        ScrollTrigger.getById(`section-${index + 1}`).kill();
      });
    };
  }, [revealRefs]);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const { workPages } = props;
  const initialTilesToShow = 12;

  if (!workPages) {
    return null;
  }

  return (
    <section className="work-grid">
      <div className="container">
        <div className="work-grid-columns">
          {workPages.map((page, i) => {
            // output the first chunk of tiles
            if (i < initialTilesToShow) {
              return (
                <WorkGridColumn
                  squareImage={page.fields.tileDetails.fields.squareImage}
                  title={page.fields.tileDetails.fields.title}
                  slug={page.fields.slug}
                  servicesList={page.fields.servicesList}
                  addToRefs={addToRefs}
                  key={i}
                  isHidden={false}
                />
              );
            }
          })}
        </div>
        {workPages.length > initialTilesToShow && !showMoreTiles && (
          <div
            className={classNames("show-all-btn", { hidden: showMoreTiles })}
          >
            <button
              className="btn btn-primary"
              onClick={() => setShowMoreTiles(true)}
              tabIndex={0}
            >
              View all
            </button>
          </div>
        )}
        {workPages.length > initialTilesToShow && (
          <div
            className={classNames("work-grid-columns", "more-columns", {
              "show-all": showMoreTiles,
            })}
          >
            {workPages.map((page, i) => {
              // output the second chunk of tiles
              if (i >= initialTilesToShow) {
                return (
                  <WorkGridColumn
                    squareImage={page.fields.tileDetails.fields.squareImage}
                    title={page.fields.tileDetails.fields.title}
                    slug={page.fields.slug}
                    servicesList={page.fields.servicesList}
                    addToRefs={addToRefs}
                    key={i}
                    isHidden={!showMoreTiles}
                  />
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
const WorkGridColumn = ({
  squareImage,
  title,
  slug,
  servicesList,
  addToRefs,
  isHidden,
}) => {
  return (
    <div
      className="work-grid-column"
      ref={addToRefs}
      tabIndex={isHidden ? -1 : 0}
      aria-label={title + " Case Study"}
    >
      <div className="work-grid-img">
        {squareImage && (
          <Link
            href={`/our-work/${slug}`}
            title={title}
            className="work-grid-img-link"
            tabIndex={isHidden ? -1 : 0}
          >
            <picture>
              <source
                srcSet={`${squareImage.fields.file.url}?fm=webp`}
                type="image/webp"
              />
              <source
                srcSet={`${squareImage.fields.file.url}?fm=jpg`}
                type="image/jpeg"
              />
              <img
                className="img-fluid"
                src={squareImage.fields.file.url}
                alt={squareImage.fields.description}
                width="520"
                height="570"
              />
            </picture>
            <div className="work-grid-cta">
              <span className="btn">View case study</span>
            </div>
          </Link>
        )}
      </div>
      {title && <h5 className="work-grid-title base-font-medium">{title}</h5>}
      {servicesList && (
        <p className="work-grid-services">{servicesList.join(", ")}</p>
      )}
    </div>
  );
};

export default WorkGrid;

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LogoGrid = (props) => {
  const { smallTitle, largeTitle, addPadding, logos } = props;

  // Variables for Logo Grid Animation
  let logoGridTrigger = useRef(null);
  let aSmallTitle = useRef(null);
  let aLargeTitle = useRef(null);
  let aLogoRow = useRef(null);
  aLogoRow.current = [];

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    const masterTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        id: "logo-grid-st",
        trigger: logoGridTrigger.current,
        scrub: false,
        markers: false,
        start: "top center+=20",
        toggleActions: "play none none reverse",
      },
    });
    const tl1 = new gsap.timeline({ id: "LogoGridAnimation" });

    // animate logo rows
    aLogoRow.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 10,
        },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: "power4.inOut",
          scrollTrigger: {
            id: `logo-${index + 1}`,
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    const animateLogoGrid = () => {
      const smallTitle = aSmallTitle.current;

      if (smallTitle) {
        tl1
          .fromTo(
            aSmallTitle.current,
            { opacity: 0, x: 50 },
            { duration: 0.8, opacity: 1, x: 0, ease: "power4.out" },
            "smallTitle"
          )
          .fromTo(
            aLargeTitle.current,
            { opacity: 0, y: 20 },
            { duration: 0.8, opacity: 1, y: 0, ease: "power4.out" },
            "smallTitle+=0.5"
          );
        return tl1;
      }
    };

    masterTl.add(animateLogoGrid());

    return () => {
      aLogoRow.current.forEach((el, index) => {
        if (ScrollTrigger.getById(`logo-${index + 1}`) !== undefined) {
          ScrollTrigger.getById(`logo-${index + 1}`).kill();
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !aLogoRow.current.includes(el)) {
      aLogoRow.current.push(el);
    }
  };

  // make groups of 4 for each row, for animation by row purposes
  const logosPerRow = 4;
  let logoRows = [];
  let tempArray = [];
  for (let i = 0, j = logos.length; i < j; i += logosPerRow) {
    tempArray = logos.slice(i, i + logosPerRow);
    logoRows.push(tempArray);
  }

  // Add padding? In contentful if nothing is selected - default is no. No in contentful is true. Yes is false. Weird logic at first -RB
  let shouldAddPadding = addPadding
    ? "logo-grid-logo"
    : "logo-grid-logo-no-padding";
  let imageSizeNoPadding = addPadding
    ? "logo-grid-img"
    : "logo-grid-img-no-padding";
  let logoGridContainer = addPadding ? "container" : "container-no-padding";

  return (
    <section className="logo-grid" ref={logoGridTrigger}>
      <div className={logoGridContainer}>
        {smallTitle && (
          <h4 className="small-title base-font-medium" ref={aSmallTitle}>
            {smallTitle}
          </h4>
        )}
        {largeTitle && (
          <h1 className="large-title" ref={aLargeTitle}>
            {largeTitle}
          </h1>
        )}
        {logoRows &&
          logoRows.map((row, i) => {
            return (
              <div className="logo-grid-logos" key={i} ref={addToRefs}>
                {row.map((logo, j) => {
                  return (
                    <div className={shouldAddPadding} key={j}>
                      <img
                        src={logo.fields.logo.fields.file.url}
                        alt={logo.fields?.file?.description}
                        className={imageSizeNoPadding}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default LogoGrid;

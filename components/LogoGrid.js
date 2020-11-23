import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LogoGrid = (props) => {

  const { smallTitle = 'Our Clients', largeTitle = 'We keep good company.', logos } = props

  // Variables for Logo Grid Animation
  let logoGridTrigger = useRef(null);
  let aSmallTitle = useRef(null);
  let aLargeTitle = useRef(null);
  let aLogoRow = useRef(null);

  useEffect(() => {

    const masterTl = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: logoGridTrigger.current,
        scrub: false,
        markers: false,
        start: 'top center+=20',
        toggleActions: 'play none none reverse'
      }
    });
    const tl1 = new gsap.timeline({ id:"LogoGridAnimation" });

    const animateLogoGrid = () => {
      const smallTitle = aSmallTitle.current

      if(smallTitle) {
        tl1.fromTo(aSmallTitle.current, {opacity: 0, x: 50}, { duration: 0.8, opacity: 1, x: 0, ease: 'power4.out' }, "smallTitle")
        .fromTo(aLargeTitle.current, {opacity: 0, y: 20}, { duration: 0.8, opacity: 1, y: 0, ease: 'power4.out'}, "smallTitle+=0.5")
        .fromTo(aLogoRow.current, {opacity: 0, y: 20}, { duration: 0.8, opacity: 1, y: 0, ease: 'power4.out'}, "smallTitle+=1")
        return tl1;
      }
    }

    masterTl.add(animateLogoGrid());

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

  }, []);

  return (
    <section className="logo-grid" ref={logoGridTrigger}>
      <div className="container">
        {smallTitle && <h4 className="small-title base-font-medium" ref={aSmallTitle}>{smallTitle}</h4>}
        {largeTitle && <h1 className="large-title" ref={aLargeTitle}>{largeTitle}</h1>}
        {logos && (
          <div className="logo-grid-logos" ref={aLogoRow}>
            {logos.map((logo, i) => {
              return (
                <div className="logo-grid-logo" key={i}>
                  <img src={logo.fields.logo.fields.file.url} alt={logo.fields.logo.fields.file.description} className="logo-grid-img" />
                </div> 
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default LogoGrid
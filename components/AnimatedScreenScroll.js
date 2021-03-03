import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classNames from 'classnames'
gsap.registerPlugin(ScrollTrigger);

const AnimatedScreenScroll = (props) => {
  const { background, screen, foreground, additionalClass, animationValue } = props;
  let classes = classNames('animated-screen-scroll', {[`${additionalClass}`]: additionalClass})
  let trigger = useRef(null);
  let wrapper = useRef(null);
  let img1 = useRef(null);
  let scrollAmount = animationValue;

  useEffect(() => {
    let c1 = ScrollTrigger.matchMedia({
    '(min-width: 992px)': () => {
    c1 = gsap.timeline({
      scrollTrigger: {
        id: "animated-screen-st",
        trigger: trigger.current,
        pin: wrapper.current,
        scrub: 1,
        markers: true,
        start: "top top"
      }
    });

    c1.to(img1.current, {
      duration: 2,
      yPercent: scrollAmount, // grabbed from Contentful, images are different heights
      ease: "power4.inOut"
    });
    }
  });

    // unmount
    return () => {
      ScrollTrigger.getById("animated-screen-st").kill();
      //c1.kill();
    };
  }, [scrollAmount]);


  return (
    <section className={classes}>
      <div ref={trigger} className="scroll-container">
        <div ref={wrapper} className="wrapper">
          <div className="background-image" style={{backgroundImage: "url(" + background.fields.file.url + ")"}}>
            <div className="device-wrapper">
              {screen && <img className="screen-img img-fluid" src={screen.fields.file.url} alt={screen.fields.file.url} />}
              <div className="device-screen">
                {foreground && <img ref={img1} className="img1" src={foreground.fields.file.url} alt={foreground.fields.file.url} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedScreenScroll;
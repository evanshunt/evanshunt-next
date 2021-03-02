import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classNames from 'classnames'
gsap.registerPlugin(ScrollTrigger);

const AnimatedScreenScroll = (props) => {
  const { background, screen, foreground, additionalClass } = props;
  let classes = classNames('animated-screen-scroll', {[`${additionalClass}`]: additionalClass})
  let trigger = useRef(null);
  let wrapper = useRef(null);
  let img1 = useRef(null);

  useEffect(() => {
    // component #1 animations
    // let c1 = ScrollTrigger.matchMedia({
    // '(min-width: 992px)': () => {
    let c1 = gsap.timeline({
      scrollTrigger: {
        id: "screen",
        trigger: trigger.current,
        pin: wrapper.current,
        scrub: 1,
        markers: true,
        start: "top top"
      }
    });

    c1.to(img1.current, {
      duration: 2,
      yPercent: -70,
      ease: "power4.inOut"
    });
    // }
    // });
    //     window.addEventListener('load', this.afterLoad);
    // }

    // unmount
    return () => {
      //  window.removeEventListener('load', this.afterLoad)
      c1.kill();
    };
  }, []);


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
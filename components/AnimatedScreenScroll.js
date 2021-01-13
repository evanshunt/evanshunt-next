import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import classNames from 'classnames'
gsap.registerPlugin(ScrollTrigger);

class AnimatedScreenScroll extends React.Component {
  
  constructor(props) {
    super(props);
    this.trigger = null;
    this.wrapper = null;
    this.img1 = null;
    this.scrollAmount = props.animationValue;
    console.log(this.scrollAmount);
  }



  startAnimations() {
    this.ml = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        pin: this.wrapper,
        scrub: true,
        start: "bottom 100%"
        // onUpdate: self => {
        //   console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
        // }
      }
    });
    this.ml.to(this.img1, {
      duration: 2,
      yPercent: this.scrollAmount, // TODO - figure out how to dynamically calculate this as differnt blocks have different heights.
      ease: 'power4.inout'
    });
  }

  componentDidMount() {

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    ScrollTrigger.matchMedia({
      /* Only play animation on desktop sizes */
      '(min-width: 992px)': () => {
          this.startAnimations();
      }
    });
  }

  componentWillUnmount() {
    this.ml.kill();
  }

  render() {

    const { background, screen, foreground, additionalClass } = this.props
    let classes = classNames('animated-screen-scroll', {[`${additionalClass}`]: additionalClass})

    return(
      <section className={classes}>
        <div ref={div => (this.trigger = div)} className="scroll-container">
          <div ref={div => (this.wrapper = div)} className="wrapper">
            <div className="background-image" style={{backgroundImage: "url(" + background.fields.file.url + ")"}}>
            <div className="device-wrapper">
            {screen && <img className="screen-img img-fluid" src={screen.fields.file.url} alt={screen.fields.file.url} />}
              <div className="device-screen">
                {foreground && <img ref={div => (this.img1 = div)} className="img1" src={foreground.fields.file.url} alt={foreground.fields.file.url} />}
              </div>

            </div>
          </div>
          </div>
        </div>
      </section>
    )
  }
}

export default AnimatedScreenScroll
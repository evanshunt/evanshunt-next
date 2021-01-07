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
  }

  startAnimations() {
    this.ml = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        pin: this.wrapper,
        scrub: true,
        start: "top top"
        //end: "bottom 150px"
      }
    });
    this.ml.to(this.img1, {
      duration: 2.5,
      yPercent: -85
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

    // this.ml.to(this.img1, { duration: 1, width: '110%', height: '110%' }, 0)
    // this.ml.to(this.title1, { duration: 0.5, opacity: 1 }, 1)
    // this.ml.to(this.title1, { duration: 0.5, opacity: 0 }, 2)
    // this.ml.to(this.img1, { duration: 1, height: '100%' }, 2)
    // this.ml.from(this.title2, { duration: 1, opacity: 0 }, 2.2)
    // this.ml.to(this.img1, { duration: 0.5, opacity: 0 }, 3)
    // this.ml.to(this.img2, { duration: 1, width: '60%', height: '60%', transform: 'translate(-50%, -50%)' }, 3)
    // this.ml.to(this.title2, { duration: 1, color: 'rgba(0, 0, 0, 0)' }, 3);
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
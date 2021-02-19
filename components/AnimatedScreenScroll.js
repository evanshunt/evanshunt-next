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
  }

  componentDidMount() {

    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    // component #1 animations
    let c1 = ScrollTrigger.matchMedia({
      '(min-width: 992px)': () => {
        c1 = gsap.timeline({
          scrollTrigger: {
            id: "animated-screen-st",
            trigger: this.trigger,
            pin: this.wrapper,
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
            start: "top top",
            toggleActions: 'play none none reverse'
          }
        }),
        c1.to(this.img1, {
          duration: 2,
          yPercent: this.scrollAmount,
          ease: 'power4.inout'
        });
      }
    });
    ScrollTrigger.refresh();
  }

  componentWillUnmount() {
    //this.ml.kill();
    //this.ml.scrollTrigger.kill();
    ScrollTrigger.getById("animated-screen-st").kill();
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
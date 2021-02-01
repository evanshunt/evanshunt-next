import React from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class CaseStudyMosiac extends React.Component {
  
  constructor(props) {
    super(props);
    this.trigger = null;
    this.wrapper = null;
    this.featureImg = null;
    this.img1 = null;
    this.img2 = null;
    this.img3 = null;
    this.img4 = null;
  }

  startAnimations() {
    this.ml = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        pin: this.wrapper,
        scrub: true,
        start: "35% center"
      }
    });
    // Feature Image shrinking down from center
    this.ml.to(this.featureImg, {
      duration: 1.5,
      scaleX: 0.4,
      scaleY: 0.35,
      transformOrigin:"center top",
      y: 30,
      ease: "power4.Out"
    }, 'featureDone')
    .fromTo(this.img1, {
      xPercent: -130,
    },
    {
      duration: 1.5,
      xPercent: 0,
      ease: "power4.Out",
    }, 'featureDone')
    .fromTo(this.img2, {
      xPercent: -130,
    },
    {
      duration: 1.5,
      xPercent: 0,
      ease: "power4.Out",
    }, 'featureDone')
    .fromTo(this.img3, {
      yPercent: 130,
    },
    {
      duration: 1.5,
      yPercent: 0,
      ease: "power4.Out",
    }, 'featureDone')
    .fromTo(this.img4, {
      xPercent: 130,
    },
    {
      duration: 1.5,
      xPercent: 0,
      ease: "power4.Out",
    }, 'featureDone');
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

    const { feature, images } = this.props
    const [img1,img2,img3,img4] = images // not sure how this would work with more or less than the 4 images

    return(
      <section className="case-study-mosiac">
        <div ref={div => (this.trigger = div)} className="scroll-container">
          <div className="blank" />
          <div ref={div => (this.wrapper = div)} className="wrapper">
            <div className="case-study-mosiac-columns">
              <div className="case-study-mosiac-column case-study-mosiac-column-1">
                {img1 && <img ref={div => (this.img1 = div)} src={img1.fields.file.url} alt={img1.fields.file.url} className="img-fluid" />}
                {img2 && <img ref={div => (this.img2 = div)} src={img2.fields.file.url} alt={img2.fields.file.url} className="img-fluid" />}
              </div>
              <div className="case-study-mosiac-column case-study-mosiac-column-2">
                {feature && <img src={feature.fields.file.url} alt={feature.fields.file.url} className="img-fluid mobile-feature-image" />}
                {img3 && <img ref={div => (this.img3 = div)} src={img3.fields.file.url} alt={img3.fields.file.url} className="img-fluid" />}
              </div>
              <div className="case-study-mosiac-column case-study-mosiac-column-3">
                {img4 && <img ref={div => (this.img4 = div)} src={img4.fields.file.url} alt={img4.fields.file.url} className="img-fluid" />}
              </div>
            </div>
            {feature && <img ref={div => (this.featureImg = div)} className="feature-img" src={feature.fields.file.url} alt={feature.fields.file.url} />}
          </div>
          <div className="blank" />
        </div>
      </section>
    )
  }
}

export default CaseStudyMosiac
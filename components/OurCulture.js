import React from 'react'
import classNames from 'classnames'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

class OurCulture extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showPlayButton: true
    }
    
    this.handlePlayButton = this.handlePlayButton.bind(this)
    this.handleVideoEnd = this.handleVideoEnd.bind(this)
    this.trigger = null;
    this.centerImg, this.rightImg1, this.rightImg2, this.leftImg1, this.leftImg2 = null;
  }

  startAnimations() {
    this.ml = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: this.trigger,
        scrub: false,
        start: "20% center",
        toggleActions: 'play none none reverse'
      }
    });
    this.ml.fromTo([this.leftImg1, this.leftImg2], {
      opacity: 0,
      xPercent: -100
    }, {
      duration: 1,
      opacity: 1,
      xPercent: 0,
      ease: 'power4.Out'
    }, "leftIn");
    this.ml.fromTo([this.rightImg1, this.rightImg2], {
      opacity: 0,
      xPercent: 100
    }, {
      duration: 1,
      opacity: 1,
      xPercent: 0,
      ease: 'power4.Out'
    }, "leftIn+=0.25");
    this.ml.fromTo(this.centerImg, {
      opacity: 0,
      yPercent: 20
    }, {
      duration: 1,
      opacity: 1,
      yPercent: 0,
      ease: 'power4.Out'
    }, "leftIn+=0.5");
  }

  // Custom Play/Pause button functionality 
  handlePlayButton() {
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.setState({
        showPlayButton: false
      })
    }
    else {
      this.video.pause();
      this.setState({
        showPlayButton: true
      })
    }
  }
  
  handleVideoEnd() {
    this.setState({
      showPlayButton: true
    })
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    // Lets Play the Animation at all breakpoints for now
    this.startAnimations();
    // ScrollTrigger.matchMedia({
    //   /* Only play animation on desktop sizes */
    //   '(min-width: 992px)': () => {
    //       this.startAnimations();
    //   }
    // });
  }

  componentWillUnmount() {
    this.ml.kill();
  }
  
  render() {
    
    const { title, centerMedia, images } = this.props
    const [img1,img2,img3,img4] = images // not sure how this would work with more or less than the 4 images
    const centerMediaType = centerMedia.fields.file.contentType;
    const playButtonClasses = classNames('play-btn', 'img-fluid', {'hidden': !this.state.showPlayButton})

    return(
      <section className="our-culture" ref={div => (this.trigger = div)}>
        {title && <h6 className="our-culture-title base-font-medium">{title}</h6>}
        <div className="our-culture-columns">
          <div className="our-culture-column our-culture-column-1">
            {img1 && <img src={img1.fields.file.url} alt={img1.fields.file.url} className="img-fluid" ref={div => (this.leftImg1 = div)} />}
            {img2 && <img src={img2.fields.file.url} alt={img2.fields.file.url} className="img-fluid" ref={div => (this.leftImg2 = div)} />}
          </div>
          <div className="our-culture-column our-culture-column-2" ref={div => (this.centerImg = div)}>
            {/* Center Media can be a video or image */}
            {centerMediaType.indexOf('video/') !== -1 &&
              <div className="video-wrapper" onClick={this.handlePlayButton}>
                <video ref={video => (this.video = video)} className="video-fluid" onEnded={this.handleVideoEnd}>
                  <source src={centerMedia.fields.file.url} type="video/mp4" />
                  Your browser does not support video tags.
                </video>
                <div className="our-culture-play">
                  <button className="our-culture-play-btn">
                    <img src="/images/instagram-play.png" alt="play button" height="100" width="100" className={playButtonClasses} />
                  </button>
                </div>
              </div>
            }

            {centerMediaType.indexOf('image/') !== -1 &&
              <div className="image-wrapper">
                <img src={centerMedia.fields.file.url} alt={centerMedia.fields.file.url} className="img-fluid" />
              </div>
            }

          </div>
          <div className="our-culture-column our-culture-column-3">
            {img3 && <img src={img3.fields.file.url} alt={img3.fields.file.url} className="img-fluid" ref={div => (this.rightImg1 = div)} />}
            {img4 && <img src={img4.fields.file.url} alt={img4.fields.file.url} className="img-fluid" ref={div => (this.rightImg2 = div)} />}
          </div>
        </div>
      </section>
    )
  }
}

export default OurCulture
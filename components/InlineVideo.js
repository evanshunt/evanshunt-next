import React from 'react'
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
gsap.registerPlugin(MorphSVGPlugin);

class InlineVideo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playButton: 'Play'
    }

    this.handlePlayButton = this.handlePlayButton.bind(this)
    this.handleVideoEnd = this.handleVideoEnd.bind(this)

    /* Animated pieces */
    this.play1 = null;
    this.play2 = null;
    this.pause1 = null;
    this.pause2 = null;
  }

  componentDidMount() {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(MorphSVGPlugin);
      gsap.core.globals("MorphSVGPlugin", MorphSVGPlugin)
    }

    this.tl = gsap.timeline({
      paused: true
    });

    this.tl.to(this.play1, 0.3, {
      morphSVG: this.pause1, ease: 'power3.inOut'
    })
      .to(this.play2, 0.3, {
        morphSVG: this.pause2, ease: 'power3.inOut'
      }, 0.05);
  }

  componentWillUnmount() {
    this.tl.kill();
  }

  // Custom Play/Pause button functionality
  handlePlayButton() {
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.tl.play(0);
      this.setState({
        playButton: 'Pause'
      })
    }
    else {
      this.video.pause();
      this.tl.reverse(0);
      this.setState({
        playButton: 'Play'
      })
    }
  }

  // When video ends, animate the play/pause icon
  handleVideoEnd() {
    this.tl.reverse(0);
    this.setState({
      playButton: 'Play'
    })
  }

  render() {
    const { title, image, video } = this.props

    return (
      <div className="inline-video">
        <div className="video-wrapper">
          <video ref={video => (this.video = video)} muted playsInline className="video-fluid" poster={image.fields.file.url} onEnded={this.handleVideoEnd}>
            <source src={video.fields.file.url} type="video/mp4" />
              Your browser does not support video tags.
            </video>
        </div>
        <div className="text-wrapper">
          <div className="inline-video-play">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.97 25.67" className="play-pause" onClick={this.handlePlayButton}>
              <g className="pause">
                <rect ref={div => (this.pause1 = div)} className="pause-1" x="0.75" y="3.13" width="5" height="20" />
                <rect ref={div => (this.pause2 = div)} className="pause-2" x="11.38" y="3.13" width="5" height="20" />
              </g>
              <g className="play">
                <path ref={div => (this.play1 = div)} className="play-1" d="M0 0 0 25.67 8 20.79 8 4.88 0 0" />
                <path ref={div => (this.play2 = div)} className="play-2" d="M8 4.88 8 20.79 20.97 12.83 8 4.88" />
              </g>
            </svg>
          </div>
          {title && <h6 className="inline-video-title">{title}</h6>}
        </div>
      </div>
    )
  }
}

export default InlineVideo
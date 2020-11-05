import React from 'react'
import classNames from 'classnames'

class OurCulture extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showPlayButton: true
    }
    
    this.handlePlayButton = this.handlePlayButton.bind(this)
    this.handleVideoEnd = this.handleVideoEnd.bind(this)
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
  
  render() {
    
    const { title, video, images } = this.props
    
    const [img1,img2,img3,img4] = images // not sure how this would work with more or less than the 4 images
    
    const playButtonClasses = classNames('play-btn', 'img-fluid', {'hidden': !this.state.showPlayButton})
    
    return(
      <section className="our-culture">
        {title && <h6 className="our-culture-title base-font-medium">{title}</h6>}
        <div className="our-culture-columns">
          <div className="our-culture-column our-culture-column-1">
            {img1 && <img src={img1.fields.file.url} alt={img1.fields.file.url} className="img-fluid" />}
            {img2 && <img src={img2.fields.file.url} alt={img2.fields.file.url} className="img-fluid" />}
          </div>
          <div className="our-culture-column our-culture-column-2" onClick={this.handlePlayButton}>
            <video ref={video => (this.video = video)} className="video-fluid" onEnded={this.handleVideoEnd}>
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              Your browser does not support video tags.
            </video>
            <div className="our-culture-play">
              <button className="our-culture-play-btn">
                <img src="/images/instagram-play.png" alt="play button" height="100" width="100" className={playButtonClasses} />
              </button>
            </div>
          </div>
          <div className="our-culture-column our-culture-column-3">
            {img3 && <img src={img3.fields.file.url} alt={img3.fields.file.url} className="img-fluid" />}
            {img4 && <img src={img4.fields.file.url} alt={img4.fields.file.url} className="img-fluid" />}
          </div>
        </div>
      </section>
    )
  }
}

export default OurCulture
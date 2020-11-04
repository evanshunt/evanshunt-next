import React from 'react'

class OurCulture extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      playButton: 'Play'
    }
    
    this.handlePlayButton = this.handlePlayButton.bind(this)
  }

  // Custom Play/Pause button functionality 
  handlePlayButton() {
    if (this.video.paused || this.video.ended) {
      this.video.play();
      this.setState({
        playButton: 'Pause'
      })
    }
    else {
      this.video.pause();
      this.setState({
        playButton: 'Play'
      })
    }
  }
  
  render() {
    
    const { title, video, images } = this.props
    
    const [img1,img2,img3,img4] = images // not sure how this would work with more or less than the 4 images
    
    return(
      <section className="our-culture">
        {title && <h6 className="our-culture-title base-font-medium">{title}</h6>}
        <div className="our-culture-columns">
          <div className="our-culture-column our-culture-column-1">
            {img1 && <img src={img1.fields.file.url} alt={img1.fields.file.url} className="img-fluid" />}
            {img2 && <img src={img2.fields.file.url} alt={img2.fields.file.url} className="img-fluid" />}
          </div>
          <div className="our-culture-column our-culture-column-2">
            <video ref={video => (this.video = video)} className="video-fluid">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
              Your browser does not support video tags.
            </video>
            <div className="our-culture-play">
              <button className="our-culture-play-btn" onClick={this.handlePlayButton}>{this.state.playButton}</button>
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
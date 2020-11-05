import React from 'react'

class InlineVideo extends React.Component {
  
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
    const { title = 'How we work', image, video } = this.props

    return (
      <div className="inline-video">
        {/* TODO: Hook up actual video from contentful */}
        <video ref={video => (this.video = video)} className="video-fluid" poster={image.fields.file.url}>
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
          Your browser does not support video tags.
        </video>

        <div className="inline-video-control">
          <button className="inline-video-play" onClick={this.handlePlayButton}>{this.state.playButton}</button>
          {title && <h3 className="inline-video-title base-font">{title}</h3>}
        </div>
      </div>
    )
  }
}

export default InlineVideo
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
          <button className="inline-video-play" onClick={this.handlePlayButton}>
            {this.state.playButton == 'Play' &&
            <svg id="play-video" data-name="play-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
              <path id="Path" className="cls-1" d="M1.34,0A1.45,1.45,0,0,0,0,1.44V28.57A1.47,1.47,0,0,0,1.5,30a1.56,1.56,0,0,0,.84-.25l21-13.56a1.39,1.39,0,0,0,.4-2,1.45,1.45,0,0,0-.4-.38L2.34.25a1.53,1.53,0,0,0-1-.24" transform="translate(0 0)"/>
            </svg>
            }
            {this.state.playButton == 'Pause' &&
              <svg id="pause-video" data-name="pause-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 30">
                <line id="Line-2" className="cls-1" x1="22" y1="3" x2="22" y2="27"/>
                <line id="Line-2-2" data-name="Line-2" className="cls-1" x1="3" y1="3" x2="3" y2="27"/>
              </svg>
            }
          </button>
          {title && <h3 className="inline-video-title base-font">{title}</h3>}
        </div>
      </div>
    )
  }
}

export default InlineVideo
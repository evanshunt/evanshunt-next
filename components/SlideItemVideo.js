import React from 'react'
import { Image } from "pure-react-carousel";
import Modal from 'react-modal'

Modal.setAppElement('#__next')

class SlideItemVideo extends React.Component {

  constructor(props) {
    super(props);
    this.modalWrapper = null;
    this.state = {
      setIsOpen: false
    };

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)

  }

  openModal() {
    this.setState({ setIsOpen: true });
  }

  afterOpenModal() {
    document.body.style.top = `-${window.scrollY}px`
    document.body.style.position = 'fixed'
  }

  onAfterClose() {
    const scrollY = document.body.style.top
    document.body.style.position = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  closeModal(){
    this.setState({ setIsOpen: false });
  }

  render() {
    const { title, image, videoPreview, videoDownload } = this.props;

    return (
      <div className="slide-item-video-wrapper">
        <div className="slide-item-video">
          <div className="text-on-image">
            <div className="image-wrapper">
              <Image
                src={image.file.url}
                className="img-fluid"
                alt={image.file.description}
                onClick={this.openModal}
              />
            </div>
            <div className="text-wrapper">
              {title && <h6 className="slide-title">{title}</h6>}
            </div>
          </div>
        </div>
        <Modal
          isOpen={this.state.setIsOpen}
          onAfterOpen={this.afterOpenModal}
          onAfterClose={this.onAfterClose}
          onRequestClose={this.closeModal}
          contentLabel={title}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content">
            {title && <h6 className="slide-title">{title}</h6>}
              {videoPreview &&
                <div className="embed-responsive embed-responsive-16by9">
                  <video controls>
                    <source src={videoPreview.fields.file.url} type="video/mp4" />
                  </video>
                </div>
              }
              {videoDownload &&
                <div className="download-video-link">
                  <a className="external-link" href={videoDownload.fields.file.url} target="_blank" rel="noreferrer">
                    Download Full Video here
                    <img className="external-link-icon" src="/images/external-link.svg" alt="external link icon"/>
                  </a>
                </div>
              }
              <button onClick={this.closeModal}>close</button>
            </div>
        </Modal>
      </div>
    );
  }
}

export default SlideItemVideo;

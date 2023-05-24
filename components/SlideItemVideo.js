import React from "react";
import { Image } from "pure-react-carousel";
import Modal from "react-modal";

Modal.setAppElement("#__next");

class SlideItemVideo extends React.Component {
  constructor(props) {
    super(props);
    this.modalWrapper = null;
    this.state = {
      setIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ setIsOpen: true });
  }

  afterOpenModal() {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  }

  onAfterClose() {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  closeModal() {
    this.setState({ setIsOpen: false });
  }

  render() {
    const { title, image, videoPreview, videoDownload } = this.props;

    return (
      <div className="slide-item-video-wrapper">
        <div className="slide-item-video">
          <div className="text-on-image" onClick={this.openModal}>
            <div className="image-wrapper">
              <Image
                src={image.file.url}
                className="img-fluid"
                alt={image.file.description}
              />
            </div>
            <div className="text-wrapper">
              <button className="video-control">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20.97 25.67"
                  className="play-pause"
                >
                  <g className="play">
                    <path
                      className="play-1"
                      d="M0 0 0 25.67 8 20.79 8 4.88 0 0"
                    />
                    <path
                      className="play-2"
                      d="M8 4.88 8 20.79 20.97 12.83 8 4.88"
                    />
                  </g>
                </svg>
              </button>
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
            <button onClick={this.closeModal} className="close">
              <svg
                width="68"
                height="68"
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7593 18.0067L49.9933 51.2407"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
                <path
                  d="M51.655 18.0067L18.4209 51.2407"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="square"
                />
              </svg>
            </button>
            {videoPreview && (
              <div className="embed-responsive embed-responsive-16by9">
                <video controls>
                  <source src={videoPreview.fields.file.url} type="video/mp4" />
                </video>
              </div>
            )}
            {title && <h6 className="slide-title">{title}</h6>}
            {videoDownload && (
              <div className="download-video-link">
                <a
                  className="external-link"
                  href={videoDownload.fields.file.url}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download video
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="link-download"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="21"
                      fill="white"
                      stroke="black"
                      strokeWidth="2"
                    />
                    <mask
                      id="mask0"
                      maskUnits="userSpaceOnUse"
                      x="15"
                      y="13"
                      width="13"
                      height="17"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M27.25 13.25V29.25H15.25L15.25 13.25H27.25Z"
                        fill="black"
                      />
                    </mask>
                    <g mask="url(#mask0)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.3452 28.9417L27.25 22.8704L26.0599 21.222L22.6156 25.4909V-9.75H20.8844V25.4909L17.4401 21.222L16.25 22.8704L21.1548 28.9417C21.3227 29.1492 21.5198 29.2506 21.75 29.2498C21.9563 29.2392 22.1946 29.1276 22.3452 28.9417Z"
                        fill="black"
                      />
                    </g>
                    <rect x="16" y="31" width="12" height="1" fill="black" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </Modal>
      </div>
    );
  }
}

export default SlideItemVideo;

import React from "react";
import { Image } from "pure-react-carousel";
import { PortalWithState } from 'react-portal';

//import Link from "next/link";

class SlideItemVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    const { title, image, videoPreview, videoDownload } = this.props;

    return (
      <div className="slide-item-video-wrapper">
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <div className="slide-item-video">
              <div className="text-on-image">
                <div className="image-wrapper">
                  <Image
                    src={image.file.url}
                    className="img-fluid"
                    alt={image.file.description}
                    onClick={openPortal}
                  />
                </div>
                <div className="text-wrapper">
                  {title && <h6 className="slide-title">{title}</h6>}
                </div>
              </div>
            </div>
            {portal(
              <div className={isOpen ? 'modal open' : 'modal'}>
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
                       <a href={videoDownload.fields.file.url} target="_blank" rel="noreferrer">
                       Download Full Video here
                        </a>
                      </div>
                  }
                  <button onClick={closePortal}>Close me!</button>
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    </div>

    );
  }
}

export default SlideItemVideo;

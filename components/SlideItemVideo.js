import React from "react";
import { Image } from "pure-react-carousel";
//import Link from "next/link";

class SlideItemVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this);
    const { title, image } = this.props;

    return (
      <div className="slide-item-video">
        <div className="text-on-image">
          <div className="image-wrapper">
            <Image
              src={image.file.url}
              className="img-fluid"
              alt={image.file.description}
            />
          </div>
          <div className="text-wrapper">
            {title && <h6 className="slide-title">{title}</h6>}
          </div>
        </div>
      </div>
    );
  }
}

export default SlideItemVideo;

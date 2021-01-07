import React from "react";
import { Image } from "pure-react-carousel";
//import classNames from "classnames";
//import Link from "next/link";

class SlideItemVideo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this);
    const { title, description } = this.props;
    // const titleClass = classNames(
    //   "slide-title",
    //   { "base-font-medium": slideType === "normal" },
    //   { "base-font": slideType === "client" }
    // );

    return (
      <div>
      <p>Video thingy!</p>
      <p>{title}</p>
      <p>{description}</p>
      <Image
                src="#"
                className="img-fluid"
                alt="Thing"
              />
      </div>
    );
  }
}

export default SlideItemVideo;

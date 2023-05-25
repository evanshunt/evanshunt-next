import React from "react";
import { Image } from "pure-react-carousel";
import classNames from "classnames";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

class SlideItemImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, description, textLayout, image, link, slideType } =
      this.props;
    const titleClass = classNames(
      "slide-title",
      { "base-font-medium": slideType === "normal" },
      { "base-font": slideType === "client" }
    );

    return (
      <div className="slide-item-image">
        {/* Need to adjust layout if Text sits on top of image
          field: textLayout
          options: "below-image", "on-image"
        */}

        {/* On Image Variant Start */}
        {textLayout === "on-image" ? (
          <div className="text-on-image">
            {link && (
              <Link href={link} legacyBehavior>
                <a aria-label={image.title}>
                  <div className="image-wrapper">
                    <Image
                      src={image.file.url}
                      className="img-fluid"
                      alt={image.description}
                    />
                  </div>
                  <div className="text-wrapper">
                    {title && <h6 className={titleClass}>{title}</h6>}
                    {description && (
                      <ReactMarkdown className="slide-description">
                        {description}
                      </ReactMarkdown>
                    )}
                  </div>
                </a>
              </Link>
            )}
            {!link && (
              <div>
                <div className="image-wrapper">
                  <Image
                    src={image.file.url}
                    className="img-fluid"
                    alt={image.description}
                  />
                </div>
                <div className="text-wrapper">
                  {title && <h6 className={titleClass}>{title}</h6>}
                  {description && (
                    <ReactMarkdown className="slide-description">
                      {description}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="text-below-image">
            {/* Text Below Image Variant Start - assume this is default */}
            {link && (
              <Link href={link} legacyBehavior>
                <a aria-label={image.title}>
                  <Image
                    src={image.file.url}
                    className="img-fluid"
                    alt={image.description}
                  />
                </a>
              </Link>
            )}

            {!link && (
              <Image
                src={image.file.url}
                className="img-fluid"
                alt={image.description}
              />
            )}

            {title && <h6 className={titleClass}>{title}</h6>}
            {description && (
              <ReactMarkdown className="slide-description">
                {description}
              </ReactMarkdown>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default SlideItemImage;

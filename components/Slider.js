import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import classNames from "classnames";
import Link from "next/link";

// Settings for types of slider - client slide & global slide item with Square images,
// global slide item with landscape images & video

// Square ratio image slides
const clientSlideDimensions = {
  desktopWidth: 430,
  desktopHeight: 500,
  visibleSlides: 3.05,
  mobileWidth: 240,
  mobileHeight: 300,
  mobileVisibleSlides: 1.25,
};

// Landscape image slides
const normalSlideDimensions = {
  desktopWidth: 757,
  desktopHeight: 600,
  visibleSlides: 1.75,
  mobileWidth: 380,
  mobileHeight: 214,
  mobileVisibleSlides: 1.05,
};

class SliderComponent extends React.Component {
  constructor(props) {
    super(props);

    let slideDimensions = {};
    let slideType = "normal";
    if (props && props.slides) {
      // determine which settings to use based on the content type of the first item
      if (props.slides[0].sys.contentType.sys.id === "globalElementCarouselItem") {
        if (props.style === 'square') {
          slideDimensions = clientSlideDimensions;
        } else {
          // Assume landscape
          slideDimensions = normalSlideDimensions;
        }
      } else {
        slideDimensions = clientSlideDimensions;
        slideType = "client";
      }
    }

    this.state = {
      visibleSlides: slideDimensions.visibleSlides,
      slideWidth: slideDimensions.desktopWidth,
      slideHeight: slideDimensions.desktopHeight,
      slideDimensions: slideDimensions,
      slideType: slideType,
    };

    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.onResize);
  }

  onResize() {
    const { slideDimensions } = this.state;
    if (window.innerWidth < 768) {
      this.setState({
        visibleSlides: slideDimensions.mobileVisibleSlides,
        slideWidth: slideDimensions.mobileWidth,
        slideHeight: slideDimensions.mobileHeight,
      });
    } else {
      this.setState({
        visibleSlides: slideDimensions.visibleSlides,
        slideWidth: slideDimensions.desktopWidth,
        slideHeight: slideDimensions.desktopHeight,
      });
    }
  }

  render() {
    const { title, slides } = this.props;
    const { visibleSlides, slideWidth, slideHeight, slideType } = this.state;

    if (!slides) {
      return null;
    }

    // this deals with the different property names for the images between normal and client style slides
    const imagePropertyName = slideType === "normal" ? "image" : "largeImage";

    const titleClass = classNames(
      'slide-title',
      { "base-font-medium": slideType === "normal" },
      { "base-font": slideType === "client" }
    );
    
    
    // if there's not enough slides to make it a carousel, hide arrows and progress bar
    let showArrows = true
    if (slides.length < visibleSlides) {
      showArrows = false
    }

    return (
      <section
        className={classNames("react-slider-wrap", {
          narrower: slideType === "normal",
        })}
      >
        {title && <h6 className="base-font-medium">{title}</h6>}

        <CarouselProvider
          naturalSlideWidth={slideWidth}
          naturalSlideHeight={slideHeight}
          totalSlides={slides.length}
          visibleSlides={visibleSlides}
          className="react-slider"
          isIntrinsicHeight={true}
        >
          <div className="slider-relative">
          <Slider>
            {slides &&
              slides.map((slide, i) => {
                return (
                  <Slide
                    className="react-slider-slide"
                    innerClassName="slide-inner"
                    index={i}
                    key={i}
                  >
                    {/* Need to adjust layout if Text sits on top of image
                    field: textLayout
                    options: "below-image", "on-image"
                    */}

                    {/* On Image Variant Start */}
                    {slide.fields.textLayout === 'on-image'  ? (
                      <div className="text-on-image">
                        {slide.fields.link && (<Link href={slide.fields.link}><a>
                          <div className="image-wrapper">
                            <Image
                              src={
                              slide.fields[`${imagePropertyName}`].fields.file
                                .url
                              }
                              className="img-fluid"
                              alt={
                                slide.fields[`${imagePropertyName}`].fields.file
                                .description
                              }
                            />
                          </div>
                          <div className="text-wrapper">
                            {slide.fields.title && (
                              <h6 className={titleClass}>{slide.fields.title}</h6>
                            )}
                            {slide.fields.description && (
                              <p className="slide-description">{slide.fields.description}</p>
                            )}
                          </div>
                        </a></Link>)}
                        {!slide.fields.link && (
                          <div>
                            <div className="image-wrapper">
                              <Image
                                src={
                                  slide.fields[`${imagePropertyName}`].fields.file
                                  .url
                                }
                                className="img-fluid"
                                alt={
                                  slide.fields[`${imagePropertyName}`].fields.file
                                  .description
                                }
                              />
                            </div>
                            <div className="text-wrapper">
                              {slide.fields.title && (
                                <h6 className={titleClass}>{slide.fields.title}</h6>
                              )}
                              {slide.fields.description && (
                                <p className="slide-description">{slide.fields.description}</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                    ) : (
                      <div className="text-below-image">
                        {/* Text Below Image Variant Start - assume this is default */}
                        {slide.fields.link && (<Link href={slide.fields.link}><a>
                          <Image
                            src={
                              slide.fields[`${imagePropertyName}`].fields.file.url
                            }
                            className="img-fluid"
                            alt={
                              slide.fields[`${imagePropertyName}`].fields.file
                              .description
                            }
                          />
                        </a></Link>)}

                        {!slide.fields.link && (
                          <Image
                            src={
                              slide.fields[`${imagePropertyName}`].fields.file.url
                            }
                            className="img-fluid"
                            alt={
                              slide.fields[`${imagePropertyName}`].fields.file
                              .description
                            }
                          />
                        )}

                        {slide.fields.title && (
                          <h6 className={titleClass}>{slide.fields.title}</h6>
                        )}
                        {slide.fields.description && (
                          <p className="slide-description">{slide.fields.description}</p>
                        )}
                      </div>
                    )}

                  </Slide>
                );
              })}
          </Slider>
          <ButtonBack className={classNames({'inactive': !showArrows})}><img src="/images/arrow-left-lg-white.svg" alt="arrow-left-lg-white" /></ButtonBack>
          <ButtonNext className={classNames({'inactive': !showArrows})}><img src="/images/arrow-right-lg-white.svg" alt="arrow-right-lg-white" /></ButtonNext>
          </div>
          <DotGroup className={classNames('react-slider-dot-group', {'inactive': !showArrows})} />
        </CarouselProvider>
      </section>
    );
  }
}

export default SliderComponent;

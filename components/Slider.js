import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import classNames from "classnames";
import SlideItemImage from "./SlideItemImage";
import SlideItemVideo from "./SlideItemVideo";

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
        if (props.style === "square") {
          slideDimensions = clientSlideDimensions;
        } else {
          // Assume landscape
          slideDimensions = normalSlideDimensions;
        }
      } else if (props.slides[0].sys.contentType.sys.id === "globalElementSliderVideoItem") {
        slideDimensions = normalSlideDimensions;
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
    const { slideDimensions } = this.state;
    // need to get this sorted initially, not just on resize (desktop vs mobile)
    if (window.innerWidth < 768) {
      this.setState({
        visibleSlides: slideDimensions.mobileVisibleSlides,
        slideWidth: slideDimensions.mobileWidth,
        slideHeight: slideDimensions.mobileHeight,
      });
    }
    window.addEventListener("resize", this.onResize);
  }

  componentWillUnmount() {
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
    var { visibleSlides, slideWidth, slideHeight, slideType } = this.state;

    if (!slides) {
      return null;
    }

    // this deals with the different property names for the images between normal and client style slides
    // This is passed into the child components so it grabs the correct field
    const imagePropertyName = slideType === "normal" ? "image" : "largeImage";

    // if there's not enough slides to make it a carousel, hide arrows and progress bar
    let showArrows = true;
    if (slides.length < visibleSlides) {
      showArrows = false;
    }
    visibleSlides = Math.ceil(visibleSlides);

    return (
      <section
        className={classNames("react-slider-wrap", {
          narrower: slideType === "normal",
          client: slideType === "client",
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
          aria-label="carousel-provider"
          role="listbox"
        >
          <div className="slider-relative" role="option">
            <Slider aria-label="slider" trayTag="div">
              {slides &&
                slides.map((slide, i) => {
                  switch (slide.sys.contentType.sys.id) {
                    case "globalElementSliderVideoItem":
                      return (
                        <Slide
                          tag="div"
                          aria-label="slide"
                          className="react-slider-slide"
                          innerClassName="slide-inner"
                          index={i}
                          key={i}
                        >
                          <SlideItemVideo
                            title={slide.fields.title}
                            image={slide.fields.image.fields}
                            videoPreview={slide.fields.videoPreview}
                            videoDownload={slide.fields.videoDownload}
                          />
                        </Slide>
                      );
                    case "globalElementCarouselItem":
                    case "globalElementClient":
                      return (
                        <Slide
                          tag="div"
                          aria-label="slide"
                          className="react-slider-slide"
                          innerClassName="slide-inner"
                          index={i}
                          key={i}
                        >
                          <SlideItemImage
                            title={slide.fields.title}
                            description={slide.fields.description}
                            textLayout={slide.fields.textLayout}
                            image={slide.fields[`${imagePropertyName}`].fields}
                            link={slide.fields.link}
                            slideType={slideType}
                          />
                        </Slide>
                      );
                    default:
                      return (
                        <p key={`slide-${i}`}>
                          {slide.sys.contentType.sys.id} not defined in code
                        </p>
                      );
                  }
                })}
            </Slider>
            <ButtonBack className={classNames({ inactive: !showArrows })}>
              <img
                src="/images/arrow-left-lg-white.svg"
                alt="arrow-left-lg-white"
              />
            </ButtonBack>
            <ButtonNext className={classNames({ inactive: !showArrows })}>
              <img
                src="/images/arrow-right-lg-white.svg"
                alt="arrow-right-lg-white"
              />
            </ButtonNext>
          </div>
          <DotGroup
            className={classNames("react-slider-dot-group", {
              inactive: !showArrows,
            })}
          />
        </CarouselProvider>
      </section>
    );
  }
}

export default SliderComponent;

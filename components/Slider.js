import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import classNames from 'classnames'


// Settings for both types of slider - client slide / global slide item
const clientSlideDimensions = {
  desktopWidth: 430,
  desktopHeight: 500,
  visibleSlides: 3.05,
  mobileWidth: 240,
  mobileHeight: 300,
  mobileVisibleSlides: 1.25
}

const normalSlideDimensions = {
  desktopWidth: 757,
  desktopHeight: 600,
  visibleSlides: 1.75,
  mobileWidth: 380,
  mobileHeight: 214,
  mobileVisibleSlides: 1.05
}

class SliderComponent extends React.Component {
  
  constructor(props){
    super(props)
    
    let slideDimensions = {}
    let slideType = 'normal'
    if (props && props.slides) {
      // determine which settings to use based on the content type of the first item
      if (props.slides[0].sys.contentType.sys.id === 'globalElementCarouselItem') {
        slideDimensions = normalSlideDimensions
      } else {
        slideDimensions = clientSlideDimensions
        slideType = 'client'
      }
    }
    
    this.state = {
      visibleSlides: slideDimensions.visibleSlides,
      slideWidth: slideDimensions.desktopWidth,
      slideHeight: slideDimensions.desktopHeight,
      slideDimensions: slideDimensions,
      slideType: slideType
    }
    
    this.onResize = this.onResize.bind(this)
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }
  
  onResize() {
    const { slideDimensions } = this.state
    if (window.innerWidth < 768) {
      this.setState({
        visibleSlides: slideDimensions.mobileVisibleSlides,
        slideWidth: slideDimensions.mobileWidth,
        slideHeight: slideDimensions.mobileHeight
      })
    } else {
      this.setState({
        visibleSlides: slideDimensions.visibleSlides,
        slideWidth: slideDimensions.desktopWidth,
        slideHeight: slideDimensions.desktopHeight
      })
    }
  }
  
  render() {
    
    const { title, slides } = this.props
    const { visibleSlides, slideWidth, slideHeight, slideType } = this.state
    
    if (!slides) {
      return null
    }
    
    // this deals with the different property names for the images between normal and client style slides
    const imagePropertyName = (slideType === 'normal') ? 'image' : 'largeImage'
    
    const titleClass = classNames({'base-font-medium': slideType === 'normal'}, {'base-font': slideType === 'client'})
    
    return (
      <section className="react-slider-wrap">
        
        {title && <h6 className="base-font-medium">{title}</h6>}
        
        <CarouselProvider
          naturalSlideWidth={slideWidth}
          naturalSlideHeight={slideHeight}
          totalSlides={slides.length}
          visibleSlides={visibleSlides}
          className="react-slider"
          isIntrinsicHeight={true}
        >
          <Slider>
            {slides && slides.map((slide, i) => {
              return (
                <Slide className="react-slider-slide" innerClassName="slide-inner" index={i} key={i}>
                  <Image src={slide.fields[`${imagePropertyName}`].fields.file.url} className="img-fluid" alt={slide.fields[`${imagePropertyName}`].fields.file.description} />
                  {slide.fields.title && <h6 className={titleClass}>{slide.fields.title}</h6>}
                  {slide.fields.description && <p>{slide.fields.description}</p>}
                </Slide>
              )
            })}
            
          </Slider>
          
          <DotGroup className="react-slider-dot-group" />
          
        </CarouselProvider>
      </section>
    )
  }
}

export default SliderComponent
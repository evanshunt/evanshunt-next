import React from 'react'
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';

class SliderComponent extends React.Component {
  
  constructor(props){
    super(props)
    
    this.state = {
      visibleSlides: 3.05,
      slideWidth: 430,
      slideHeight: 500
    }
    this.onResize = this.onResize.bind(this)
  }
  
  componentDidMount() {
    
    window.addEventListener('resize', this.onResize)
  }
  
  onResize() {
    if (window.innerWidth < 768) {
      this.setState({
        visibleSlides: 1.25,
        slideWidth: 240,
        slideHeight: 300
      })
    } else {
      this.setState({
        visibleSlides: 3.05,
        slideWidth: 430,
        slideHeight: 500
      })
    }
  }
  
  render() {
    
    const { title = 'Featured Clients', slides } = this.props
    const { visibleSlides, slideWidth, slideHeight } = this.state
    
    return (
      <section className="react-slider-wrap">
        
        {title && <p><strong>{title}</strong></p>}
        
        <CarouselProvider
          naturalSlideWidth={slideWidth}
          naturalSlideHeight={slideHeight}
          totalSlides={5}
          visibleSlides={visibleSlides}
          className="react-slider"
        >
          <Slider>
            
            <Slide className="react-slider-slide" innerClassName="slide-inner" index={0}>
              <Image src="//via.placeholder.com/430x430/ff0000" className="img-fluid" alt="" />
              <p>Alterra</p>
            </Slide>
            <Slide className="react-slider-slide" innerClassName="slide-inner" index={1}>
              <Image src="//via.placeholder.com/430x430/ff6600" className="img-fluid" alt="" />
              <p>Pursuit</p>
            </Slide>
            <Slide className="react-slider-slide" innerClassName="slide-inner" index={2}>
              <Image src="//via.placeholder.com/430x430/ff3e3e" className="img-fluid" alt="" />
              <p>Glassdoor</p>
            </Slide>
            <Slide className="react-slider-slide" innerClassName="slide-inner" index={3}>
              <Image src="//via.placeholder.com/430x430/ff0000" className="img-fluid" alt="" />
              <p>Another</p>
            </Slide>
            <Slide className="react-slider-slide" innerClassName="slide-inner" index={4}>
              <Image src="//via.placeholder.com/430x430/ff6600" className="img-fluid" alt="" />
              <p>Another+</p>
            </Slide>
            
          </Slider>
          
          <DotGroup className="react-slider-dot-group" />
          
        </CarouselProvider>
      </section>
    )
  }
}

export default SliderComponent
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';

const ImagesBlock = (props) => {
  const { images } = props
  
  return (
    <section className="images-block container-medium">
      
      <div className="images-block-columns">
        {images && images.map((img, i) => {
          return (
            <div className="images-block-column">
              <img src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid" />
            </div>
          )
        })}
      </div>
      
      <CarouselProvider
        naturalSlideWidth={260}
        naturalSlideHeight={315}
        totalSlides={images.length}
        visibleSlides={1}
        className="react-slider-images"
        isIntrinsicHeight={true}
      >
        <Slider>
          {images && images.map((img, i) => {
            return (
              <Slide key={i}>
                <Image src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid images-block-slider-img" />
              </Slide>
            )
          })}
        </Slider>
        <DotGroup className="react-slider-dot-group" />
      </CarouselProvider>
    </section>
  )
}

export default ImagesBlock
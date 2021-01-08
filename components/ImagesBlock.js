import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';

const ImagesBlock = (props) => {
  const { images } = props
  const [img1,img2,img3,img4] = images

  return (
    <section className="images-block container-medium">

      <div className="images-block-columns">
        <div className="images-block-column images-block-column-1">
          {img1 && <img src={img1.fields.file.url} alt={img1.fields.file.description} className="img-fluid" />}
          {img2 && <img src={img2.fields.file.url} alt={img2.fields.file.description} className="img-fluid" />}
        </div>
        <div className="images-block-column images-block-column-2">
          {img3 && <img src={img3.fields.file.url} alt={img3.fields.file.description} className="img-fluid" />}
          {img4 && <img src={img4.fields.file.url} alt={img4.fields.file.description} className="img-fluid" />}
        </div>
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
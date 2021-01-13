import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import classNames from 'classnames'

const ImagesBlock = (props) => {
  const { style, firstColumn, secondColumn } = props
  let classes = classNames('images-block container-medium', {[`${style}`]: style})
  const mobileImages = [...firstColumn, ...secondColumn]

  return (
    <section className={classes}>
      <div className="images-block-columns">
      {firstColumn && <div className="images-block-column images-block-column-1">
        {firstColumn.map((img, i) => {
          return (
            <img key={i} src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid" />
          )
        })}
        </div>}
        {secondColumn &&<div className="images-block-column images-block-column-2">
        {secondColumn.map((img, i) => {
          return (
            <img key={i} src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid" />
          )
        })}
        </div>}
      </div>
      
      <CarouselProvider
        naturalSlideWidth={260}
        naturalSlideHeight={315}
        totalSlides={mobileImages.length}
        visibleSlides={1}
        className="react-slider-images"
        isIntrinsicHeight={true}
      >
        <Slider>
          {mobileImages && mobileImages.map((img, i) => {
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
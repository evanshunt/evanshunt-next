import Link from 'next/link'
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';

const RelatedWork = (props) => {
  const { items } = props

  return (
    <section className="related-work">
      <div className="container">
        <div className="related-work-header">
          <h6 className="base-font-medium">Related Work</h6>
          <Link href="/our-work">
            <a className="cta-animate-arrow">See all work
              <img src="/images/small-right-arrow.svg" alt="Black arrow pointing right" className="black-arrow" />
            </a>
          </Link>
        </div>
        <div className="related-work-flex">
          {items && items.map((work, i) => {
            return (
              <div className="related-work-flex-item" key={i}>
                <Link href={`${work.fields.link}`}>
                  <a title={work.fields.title} className="related-work-link">
                    {work.fields.squareImage && (
                      <img src={work.fields.squareImage.fields.file.url} alt={work.fields.squareImage.fields.file.description} className="img-fluid" />
                    )}
                  </a>
                </Link>
                {work.fields.title && (
                  <h6 className="base-font-medium related-work-title">{work.fields.title}</h6>
                )}
              </div>
            )
          })}
        </div>
        <CarouselProvider
        naturalSlideWidth={260}
        naturalSlideHeight={315}
        totalSlides={items.length}
        visibleSlides={1}
        className="react-slider-images"
        isIntrinsicHeight={true}
      >
        <Slider>
        {items && items.map((work, i) => {
            return (
              <Slide key={i}>
                <Link href={`${work.fields.link}`}>
                  <a title={work.fields.title} className="related-work-link">
                    {work.fields.squareImage && (
                      <Image src={work.fields.squareImage.fields.file.url} alt={work.fields.squareImage.fields.file.description}  className="img-fluid images-block-slider-img" />
                    )}
                    {work.fields.title && (
                      <h6 className="base-font-medium related-work-title">{work.fields.title}</h6>
                    )}
                  </a>
                </Link>
              </Slide>
            )
          })}
        </Slider>
        <DotGroup className="react-slider-dot-group" />
      </CarouselProvider>
      </div>
    </section>
  )
}

export default RelatedWork
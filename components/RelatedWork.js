import Link from "next/link";
import {
  CarouselProvider,
  Slider,
  Slide,
  DotGroup,
  Image,
} from "pure-react-carousel";

const RelatedWork = (props) => {
  const { items } = props;

  console.log(items);

  return (
    <section className="related-work">
      <div className="container">
        <div className="related-work-header">
          <h6 className="base-font-medium">Related Work</h6>
          <Link href="/our-work" legacyBehavior>
            <a className="cta-animate-arrow">
              See all work
              <img
                className="dark-arrow"
                src="/images/small-right-arrow.svg"
                alt="Right pointing arrow"
              />
              <img
                className="light-arrow"
                src="/images/small-right-arrow-white.svg"
                alt="Right pointing arrow"
              />
            </a>
          </Link>
        </div>
        <div className="related-work-flex">
          {items &&
            items.map((work, i) => {
              return (
                <div className="related-work-flex-item" key={i}>
                  <Link href={`${work.fields.link}`} legacyBehavior>
                    <a title={work.fields.title} className="related-work-link">
                      {work.fields.squareImage && (
                        <picture>
                          <source
                            srcSet={`${work.fields.squareImage.fields.file.url}?fm=webp`}
                            type="image/webp"
                          />
                          <source
                            srcSet={`${work.fields.squareImage.fields.file.url}?fm=jpg`}
                            type="image/jpeg"
                          />
                          <img
                            className="img-fluid"
                            src={work.fields.squareImage.fields.file.url}
                            alt={work.fields.squareImage.fields.description}
                          />
                        </picture>
                      )}
                    </a>
                  </Link>
                  {work.fields.title && (
                    <h6 className="base-font-medium related-work-title">
                      {work.fields.title}
                    </h6>
                  )}
                </div>
              );
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
            {items &&
              items.map((work, i) => {
                return (
                  <Slide key={i}>
                    <Link href={`${work.fields.link}`} legacyBehavior>
                      <a
                        title={work.fields.title}
                        className="related-work-link"
                      >
                        {work.fields.squareImage && (
                          <Image
                            src={`${work.fields.squareImage.fields.file.url}?fm=webp`}
                            alt={
                              work.fields.squareImage.fields.file.description
                            }
                            className="img-fluid images-block-slider-img"
                          />
                        )}
                        {work.fields.title && (
                          <h6 className="base-font-medium related-work-title">
                            {work.fields.title}
                          </h6>
                        )}
                      </a>
                    </Link>
                  </Slide>
                );
              })}
          </Slider>
          <DotGroup className="react-slider-dot-group" />
        </CarouselProvider>
      </div>
    </section>
  );
};

export default RelatedWork;

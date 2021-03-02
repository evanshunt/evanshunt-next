import React, { useEffect, useRef } from "react";
import { CarouselProvider, Slider, Slide, DotGroup, Image } from 'pure-react-carousel';
import classNames from 'classnames'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ImagesBlock = (props) => {

  const revealRefs = useRef([]);
  const { style, firstColumn, secondColumn } = props
  let classes = classNames('images-block container-medium', {[`${style}`]: style})
  const mobileImages = [...firstColumn, ...secondColumn]
  revealRefs.current = [];

  useEffect(() => {

    //ScrollTrigger.matchMedia({
      /* Only play animation on desktop sizes */
      //'(min-width: 992px)': () => {
        // Tiles that fade in
        revealRefs.current.forEach((el, index) => {
          gsap.to(el, {
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: "power4.inOut",
            scrollTrigger: {
              id: `images-block-item-${index + 1}`,
              trigger: el,
              start: "top center+=150",
              markers: true,
              toggleActions: "play none none reverse"
            }
          });
        });
      //}
    //});

    return () => {
      revealRefs.current.forEach((el, index) => {
        ScrollTrigger.getById(`images-block-item-${index+1}`).kill();
      })
    }

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className={classes}>
      <div className="images-block-columns">
      {firstColumn && <div className="images-block-column images-block-column-1">
        {firstColumn.map((img, i) => {
          return (
            <img key={i} ref={addToRefs} src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid" />
          )
        })}
        </div>}
        {secondColumn &&<div className="images-block-column images-block-column-2">
        {secondColumn.map((img, i) => {
          return (
            <img key={i} ref={addToRefs} src={img.fields.file.url} alt={img.fields.file.description} className="img-fluid" />
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
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ServiceBlock = (props) => {
  const { textLeftOrRight } = props
  const serviceClass = props.title.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word characters
    .replace(/--+/g, '-') // Replace multiple - with single

  return (
    <section className={`service-block ${serviceClass}`}>
      <div className="container">

        {textLeftOrRight ? (
          <div className="service-block-flex text-left">
            <ServiceBlockText {...props} />
            <ServiceBlockImage {...props} />
          </div>
        ) : (
          <div className="service-block-flex text-right">
            <ServiceBlockImage {...props} />
            <ServiceBlockText {...props} />
          </div>
        )}
        
      </div>
    </section>
  )
}


// separate components to keep things tidy
const ServiceBlockText = (props) => {
  
  const {
    title,
    introText,
    servicesList,
    link,
  } = props
  
  
  return (
    <div className="service-block-text">
      {title && <h1 className="service-block-title">{title}</h1>}
      <div className="service-block-copy">
        {introText && <p className="service-block-intro">{introText}</p>}
        {servicesList && (
          <ul className="service-block-services">
            {servicesList.map((service, i) => {
              return (
                <li className="service-block-service" key={i}>{service}</li>
              )
            })}
          </ul>
        )}
        {link && (
          <Link href={link.fields.url}>
            <a className="btn btn-secondary btn-outline" title={link.fields.title}>{link.fields.title}</a>
          </Link>
        )}
      </div>
    </div>
  )
}

const ServiceBlockImage = (props) => {
  const { imageBackground, imageForegroundRight, imageForegroundLeft} = props
  let imgTrigger = useRef(null);
  let imgBg = useRef(null);
  let imgLeft = useRef(null);
  let imgRight = useRef(null);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    if (imgTrigger.current != null) {
      const tl = gsap.timeline({defaults: {duration: 10, ease:'none' },
        paused: true,
        scrollTrigger: {
          trigger: imgTrigger.current,
          scrub: false,
          start: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      tl.fromTo(imgBg.current, {opacity: 0, y: 50}, { duration: 1, opacity: 1, y: 0, ease: 'power4.out' }, "bgIn")
        .fromTo(imgRight.current, {opacity: 0, x: 50}, { duration: 0.8, opacity: 1, x: 0, ease: 'power4.out' }, "bgIn+=0.5")
        .fromTo(imgLeft.current, {opacity: 0, x: -50}, { duration: 0.8, opacity: 1, x: 0, ease: 'power4.out'}, "bgIn+=1");
    }

  }, [])


  return (
    <div ref={imgTrigger} className="service-block-img">
      {imageBackground && (
        <div className="img-background">
          <img ref={imgBg} src={imageBackground.fields.file.url} className="img-fluid" alt={imageBackground.fields.file.description} />
        </div>
      )}
      {imageForegroundRight && (
        <div className="img-right-side">
          <img ref={imgRight} src={imageForegroundRight.fields.file.url} className="img-fluid" alt={imageForegroundRight.fields.file.description} />
        </div>
      )}
      {imageForegroundLeft && (
        <div className="img-left-side">
          <img ref={imgLeft} src={imageForegroundLeft.fields.file.url} className="img-fluid" alt={imageForegroundLeft.fields.file.description} />
        </div>
      )}
    </div>

  )
}

export default ServiceBlock
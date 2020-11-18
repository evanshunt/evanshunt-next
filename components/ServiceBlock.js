import React from 'react'
import Link from 'next/link'

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
  const { image } = props
  return (
    <div className="service-block-img">
      <img src={image.fields.file.url} className="img-fluid" alt={image.fields.file.description} />
    </div>
  )
}

export default ServiceBlock
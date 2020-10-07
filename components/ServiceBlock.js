import React from 'react'
import Link from 'next/link'

const ServiceBlock = (props) => {
  
  const { textLeftOrRight } = props
  
  return (
    <section className="service-block">
      <div className="container">
        
        {textLeftOrRight ? (
          <div className="service-block-flex">
            <ServiceBlockText {...props} />
            <ServiceBlockImage {...props} />
          </div>
        ) : (
          <div className="service-block-flex">
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
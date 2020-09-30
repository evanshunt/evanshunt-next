import React from 'react'

const ServiceBlock = (props) => {
  
  const { textLeftOrRight = true } = props
  
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
    title = "Strategy",
    introText = "Like you, we’ve seen our share of beautiful, functional creative that nobody uses. We say, why not do some strategy first? We’ll figure out who you’re talking to, the best ways to reach them and how you’ll know when your message is connecting.",
    servicesList = ['Research', 'Strategy Development', 'Experience Design', 'Analytics and Data'],
    link = 'Learn More',
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
        {link && <a href="/our-services/strategy" className="btn btn-secondary btn-outline">{link}</a>}
      </div>
    </div>
  )
}

const ServiceBlockImage = (props) => {
  const { image } = props
  return (
    <div className="service-block-img">
      <img src="//via.placeholder.com/605x471/cccccc" className="img-fluid" alt=""/>
    </div>
  )
}

export default ServiceBlock
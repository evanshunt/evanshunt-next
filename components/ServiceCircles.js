import React from 'react'

const ServiceCircles = (props) => {
  
  const { 
    title = 'How Can We Help?', 
    smallText = 'Some small text', 
    circle1Title, 
    circle1Description,
    circle2Title,
    circle2Description,
    circle3Title,
    circle3Description,
    circle4Title,
    circle4Description,
    primaryCta = true,
    secondaryCta = true
  } = props
  
  return (
    <section className="service-circles">
      
      {title && <h3 className="service-circles-title">{title}</h3>}
      {smallText && <p className="service-circles-copy">{smallText}</p>}
      
      <div className="service-circles-list">
        
        <div className="service-circle-column">
          <div className="service-circle service-circle-1">
            <span className="service-circle-title">Strategy</span>
            <span className="service-circle-description">A bunch of text</span>
          </div>
        </div>

        <div className="service-circle-column">
          <div className="service-circle service-circle-2">
            <span className="service-circle-title">Digital</span>
            <span className="service-circle-description">A bunch of text</span>
          </div>
        </div>
        <div className="service-circle-column">
          <div className="service-circle service-circle-3">
            <span className="service-circle-title">Branding</span>
            <span className="service-circle-description">A bunch of text</span>
          </div>
        </div>
        <div className="service-circle-column">
          <div className="service-circle service-circle-4">
            <span className="service-circle-title">Marketing</span>
            <span className="service-circle-description">A bunch of text</span>
          </div>
        </div>
        
      </div>
      
      {primaryCta && (
        <div>
          <a href="/" className="btn btn-secondary">Get in touch</a>
        </div>
      )}

      {secondaryCta && (
        <div>
          <a href="/">View All Services</a>
        </div>
      )}
      
    </section>
  )
}

export default ServiceCircles
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const breakpointChange = 992

const WorkPageIntro = ({ title, industry, introTextLong, externalLink, servicesList }) => {
  const [showAllServices, setShowAllServices] = useState(false)
  const [servicesShowing, setServicesShowing] = useState(4) // default for desktop is 4
  const [showMoreText, setShowMoreText] = useState('View all') // default for desktop is 4
  
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    
    if (window && window.innerWidth < breakpointChange) {
      setServicesShowing(0)
      setShowMoreText('View related services')
    }
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleServiceToggle = () => {
    document.activeElement.blur(); // prevent chrome from scrolling oddly with new content
    setShowAllServices(!showAllServices)
  }
  
  const handleResize = () => {
    if (window.innerWidth < breakpointChange) {
      setServicesShowing(0)
      setShowMoreText('View related services')
    } else {
      setServicesShowing(4)
      setShowMoreText('View all')
    }
  }
  
  return (
    <section className="work-page-intro">
      <div className="container-medium">
        <div className="work-page-intro-flex">
          <div className="work-page-intro-flex-item">
            {title && <h1 className="title">{title}</h1>}
            {industry && <h6 className="base-font">{industry}</h6>}
            {introTextLong && <p className="description">{introTextLong}</p>}
            {externalLink && (
              <Link href={externalLink} >
                <a className="external-link" title={externalLink} target="_blank" rel="noreferrer">
                  {externalLink}
                  <img className="external-link-icon" src="/images/external-link.svg" alt="external link icon"/>
                </a>
              </Link>
            )}
          </div>

          <div className="work-page-intro-flex-item">
            <h6 className="service-list-title base-font-medium">Key Services</h6>


            {/* This is an odd set up, but its an odd area */}
            {servicesList && (
              <div className="service-list">
                {/* first 4 services */}
                {servicesList.map((service, i) => {
                  if (i < servicesShowing) {
                    return (
                      <div className="service-list-item" key={i}>{service}</div>
                    )
                  }
                })}

                {/* the rest of the services, if more than 4 */}
                {servicesList.length > servicesShowing && (
                  <div className={`service-list-more ${showAllServices ? 'active' : ''}`}>
                    {servicesList.map((service, i) => {
                      if (i >= servicesShowing) {
                        return (
                          <div className="service-list-item" key={i}>{service}</div>
                        )
                      }
                    })}
                  </div>
                )}
              </div>
            )}

            {servicesList && servicesList.length > servicesShowing && (
              <button className="service-list-toggle" onClick={handleServiceToggle}>
                {showAllServices ? (
                  <span><img src="/images/red-minus.svg" alt=""/> View less</span>
                ) : (
                  <span><img src="/images/red-plus.svg" alt=""/> {showMoreText}</span>
                )}
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default WorkPageIntro
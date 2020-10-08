import React from 'react'
import Link from 'next/link'

class WorkPageIntro extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      showAllServices: false
    }
    
    this.toggleServices = this.toggleServices.bind(this)
  }
  
  toggleServices() {
    this.setState({
      showAllServices: !this.state.showAllServices
    })
  }
  
  render() {
    const { title, industry, introText, externalLink, servicesList } = this.props
    
    return (
      <section className="work-page-intro">
        <div className="container">
          <div className="work-page-intro-flex">
            <div className="work-page-intro-flex-item">
              {title && <h1 className="title">{title}</h1>}
              {industry && <h6 className="base-font">{industry}</h6>}
              {introText && <p className="description">{introText}</p>}
              {externalLink && (
                <Link href={externalLink}>
                  <a title={externalLink}>{externalLink}</a>
                </Link>
              )}
            </div>

            <div className="work-page-intro-flex-item">
              <h6 className="base-font-medium">Key Services</h6>
              {servicesList && (
                <ul className="service-list">
                  {servicesList.map((service, i) => {
                    let itemClass = ''
                    if (i > 4) {
                      itemClass = 'hidden'
                    }
                    if (this.state.showAllServices) {
                      itemClass = ''
                    }
                    return (
                      <li className={itemClass} key={i}>{service}</li>
                    )
                  })}
                </ul>
              )}
              {servicesList && servicesList.length > 4 && (
                <button className="service-list-toggle" onClick={this.toggleServices}>
                  {this.state.showAllServices ? (
                    <span>- View Less</span>
                  ) : (
                    <span>+ View All</span>
                  )}
                </button>
              )}
            </div>
          </div>
          
        </div>
      </section>
    )
  }
}

export default WorkPageIntro
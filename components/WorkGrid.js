import React from 'react'

const WorkGrid = (props) => {
  
  const { workPages } = props
  
  return (
    <section className="work-grid">
      <div className="container">
        
        <div className="work-grid-columns">
          
          <div className="work-grid-column">
            <a href="/">
              <img src="//via.placeholder.com/520x580" className="img-fluid" alt=""/>
            </a>
            <div className="work-grid-cta">
              <a href="/" className="btn">View Case Study</a>
            </div>
            <h5 className="work-grid-title base-font-medium">Bad Coffee</h5>
            <p>Branding, Campaigns</p>
          </div>
          
          <div className="work-grid-column">
            <a href="/">
              <img src="//via.placeholder.com/520x580" className="img-fluid" alt=""/>
            </a>
            <div className="work-grid-cta">
              <a href="/" className="btn">View Case Study</a>
            </div>
            <h5 className="work-grid-title base-font-medium">Ikon Pass</h5>
            <p>eCommerce, Experience Design, Digital Transformation</p>
          </div>

          <div className="work-grid-column">
            <a href="/">
              <img src="//via.placeholder.com/520x580" className="img-fluid" alt=""/>
            </a>
            <div className="work-grid-cta">
              <a href="/" className="btn">View Case Study</a>
            </div>
            <h5 className="work-grid-title base-font-medium">Shaw</h5>
            <p>Digital Transformation, Creative, Website</p>
          </div>

          <div className="work-grid-column">
            <a href="/">
              <img src="//via.placeholder.com/520x580" className="img-fluid" alt=""/>
            </a>
            <div className="work-grid-cta">
              <a href="/" className="btn">View Case Study</a>
            </div>
            <h5 className="work-grid-title base-font-medium">Pursuit</h5>
            <p>Branding, Experience Design, Campaigns</p>
          </div>
          
        </div>
        
      </div>
    </section>
  )
}

export default WorkGrid
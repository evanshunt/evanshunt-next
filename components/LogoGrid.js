import React from 'react'

const LogoGrid = (props) => {
  const { smallTitle = 'Our Clients', largeTitle = 'We keep good company.', logos } = props
  
  return (
    <section className="logo-grid">
      <div className="container">
        {smallTitle && <h4 className="small-title base-font-medium">{smallTitle}</h4>}
        {largeTitle && <h1 className="large-title">{largeTitle}</h1>}
        <div className="logo-grid-logos">
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
          <div className="logo-grid-logo">
            <img src="//via.placeholder.com/140x67" alt="" className="logo-grid-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoGrid
import React from 'react'

const LogoGrid = (props) => {
  const { smallTitle = 'Our Clients', largeTitle = 'We keep good company.', logos } = props
  
  return (
    <section className="logo-grid">
      <div className="container">
        {smallTitle && <h4 className="small-title base-font-medium">{smallTitle}</h4>}
        {largeTitle && <h1 className="large-title">{largeTitle}</h1>}
        {logos && (
          <div className="logo-grid-logos">
            {logos.map((logo, i) => {
              return (
                <div className="logo-grid-logo" key={i}>
                  <img src={logo.fields.logo.fields.file.url} alt={logo.fields.logo.fields.file.description} className="logo-grid-img" />
                </div> 
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}

export default LogoGrid
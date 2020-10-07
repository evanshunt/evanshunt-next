import React from 'react'

const WorkGrid = (props) => {
  
  const { workPages } = props
  if (!workPages) {
    return null
  }
  
  return (
    <section className="work-grid">
      <div className="container">
        <div className="work-grid-columns">
          {workPages.map((page, i) => {
            return (
              <div className="work-grid-column" key={i}>
                <div className="work-grid-img">
                  {page.fields.squareImage && (
                    <a href={`/our-work/${page.fields.slug}`}>
                      <img src={page.fields.squareImage.fields.file.url} className="img-fluid" alt={page.fields.squareImage.fields.file.description} />
                    </a>
                  )}
                  <div className="work-grid-cta">
                    <a href={`/our-work/${page.fields.slug}`} className="btn">View Case Study</a>
                  </div>
                </div>
                {page.fields.title && <h5 className="work-grid-title base-font-medium">{page.fields.title}</h5>}
                {page.fields.servicesList && <p>{page.fields.servicesList.join(', ')}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
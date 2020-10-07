import React from 'react'
import Link from 'next/link'

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
                    <Link href={`/our-work/${page.fields.slug}`}>
                      <a title={page.fields.title}>
                        <img src={page.fields.squareImage.fields.file.url} className="img-fluid" alt={page.fields.squareImage.fields.file.description} />
                      </a>
                    </Link>
                  )}
                  <div className="work-grid-cta">
                    <Link href={`/our-work/${page.fields.slug}`}>
                      <a title={page.fields.title} className="btn">View Case Study</a>
                    </Link>
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
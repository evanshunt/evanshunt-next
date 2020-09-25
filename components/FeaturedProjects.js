import React from 'react'

const FeaturedProjects = (props) => {
  
  const { projects, cta } = props
  
  return (
    <section className="featured-projects">
      <p><strong>Featured Projects</strong></p>
      <div className="featured-projects-list">
        <img src="//via.placeholder.com/1325x714/FF3E3E/FFFFFF?text=Featured+Project" alt="" className="img-fluid" />
        <img src="//via.placeholder.com/1325x714/333333/FFFFFF?text=Featured+Project" alt="" className="img-fluid" />
      </div>
      <div className="featured-projects-btn">
        <a href="/" className="btn">View All Work</a>
      </div>
    </section>
  )
}

export default FeaturedProjects
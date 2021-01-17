import Link from 'next/link'

const RelatedWork = (props) => {
  const { items } = props

  // still needs some responsive work - turn into carousel
  return (
    <section className="related-work">
      <div className="container">
        <div className="related-work-header">
          <h6 className="base-font-medium">Related Work</h6>
          <Link href="/our-work">
            <a>See all work &gt;</a>
          </Link>
        </div>
        <div className="related-work-flex">
          {items && items.map((work, i) => {
            return (
              <div className="related-work-flex-item" key={i}>
                {work.fields.squareImage && (
                  <img src={work.fields.squareImage.fields.file.url} alt={work.fields.squareImage.fields.file.description} className="img-fluid" />
                )}
                {work.fields.title && (
                  <h6 className="base-font-medium">{work.fields.title}</h6>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default RelatedWork
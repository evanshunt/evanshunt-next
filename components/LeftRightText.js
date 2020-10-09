const LeftRightText = (props) => {
  
  const { title, text, externalLink } = props
  
  return (
    <section className="left-right-text">
      <div className="container-medium">
        <div className="left-right-text-flex">
          <div className="left-text">
            <h2 className="title">{title}</h2>
          </div>
          <div className="right-text">
            <p className="description">{text}</p>
            {externalLink && (
              <a href={externalLink.fields.url} title={externalLink.fields.title} target="_blank">{externalLink.fields.title}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftRightText
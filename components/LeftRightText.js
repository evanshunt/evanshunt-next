const LeftRightText = (props) => {
  
  const { title, text, externalLink } = props
  
  return (
    <section className="left-right-text">
      <div className="container">
        <div className="left-right-text-flex">
          <div className="left-text">
            <h2 className="title">{title}</h2>
          </div>
          <div className="right-text">
            <p className="description">{text}</p>
            {externalLink && (
              <a href={externalLink} title={externalLink} target="_blank">{externalLink}</a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeftRightText
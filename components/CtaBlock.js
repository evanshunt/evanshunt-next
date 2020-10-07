const CtaBlock = (props) => {
  const { title, cta } = props
  
  return (
    <div className="cta-block container">
      {title && <h2 className="title">{title}</h2>}
      {cta && <a href={cta.fields.url} className="btn">{cta.fields.title}</a>}
    </div>
  )
}

export default CtaBlock
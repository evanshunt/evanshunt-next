
const CentreAlignedText = (props) => {
  const { title, text } = props
  
  return (
    <section className="centre-aligned-text">
      <div className="container-narrow">
        {title && <h2 className="title">{title}</h2>}
        {text && <p className="text">{text}</p>}
      </div>
    </section>
  )
}

export default CentreAlignedText
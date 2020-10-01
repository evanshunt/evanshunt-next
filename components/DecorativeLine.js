const DecorativeLine = (props) => {
  const { image } = props
  return (
    <div className="decorative-line">
      <img src={image.fields.file.url} alt={image.fields.file.url} className="img-fluid" />
    </div>
  )
}

export default DecorativeLine
import classNames from 'classnames'

const FullWidthImage = (props) => {
  
  const { title, image, addPadding } = props
  
  const classes = classNames('full-width-image', {'with-padding': addPadding})
  
  return (
    <section className={classes}>
      <div className="full-width-image-inner">
        {title && <h6 className="full-width-image-title base-font-medium">{title}</h6>}
        {image && <img src={image.fields.file.url} className="img-fluid" alt={image.fields.file.description}/>}
      </div>
    </section>
  )
}


export default FullWidthImage
import classNames from 'classnames'

const FullWidthImage = (props) => {
  
  const { title, image, addPadding } = props
  
  const classes = classNames('full-width-image', {'with-padding': addPadding})
  
  return (
    <section className={classes}>
      <div className="full-width-image-inner">
        {title && <h6 className="full-width-image-title base-font-medium">{title}</h6>}
        {image &&
          <picture>
            <source srcSet={`${image.fields.file.url}?fm=webp`} type="image/webp" />
            <source srcSet={`${image.fields.file.url}?fm=jpg`} type="image/jpeg" />
            <img className="img-fluid" src={image.fields.file.url} alt={image.fields.file.fileName} />
          </picture>
        }
      </div>
    </section>
  )
}


export default FullWidthImage
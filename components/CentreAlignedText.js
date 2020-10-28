import classNames from 'classnames'

const CentreAlignedText = (props) => {
  const { title, text, removePadding } = props
  
  let paddingClass = ''
  if (removePadding) {
    paddingClass = getPaddingClass(removePadding)
  }
  
  const classes = classNames('centre-aligned-text', {[`${paddingClass}`]: removePadding})
  
  return (
    <section className={classes}>
      <div className="container-narrow">
        {title && <h2 className="title">{title}</h2>}
        {text && <p className="text">{text}</p>}
      </div>
    </section>
  )
}

// just to keep it tidy
const getPaddingClass = (removePadding) => {
  let paddingClass = ''
  
  // these match values from Contentful
  if (removePadding === 'Top Padding') {
    paddingClass = 'no-padding-top'
  }
  if (removePadding === 'Bottom Padding') {
    paddingClass = 'no-padding-bottom'
  }
  if (removePadding === 'Top and Bottom Padding') {
    paddingClass = 'no-padding'
  }
  return paddingClass
}

export default CentreAlignedText
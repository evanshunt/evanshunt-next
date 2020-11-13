import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import SVG from 'react-inlinesvg';

const DecorativeLine = (props) => {
  const { image, mobileImage, overlap, hideOnMobile } = props
  const [lineImage, setLineImage] = useState(null)

  // mobile image is optional
  useEffect(() => {
    window.addEventListener('resize', handleResize)
    if (mobileImage && window.innerWidth < 720) {
      setLineImage(mobileImage)
    } else {
      setLineImage(image)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (mobileImage && window.innerWidth < 720) {
      setLineImage(mobileImage)
    } else {
      setLineImage(image)
    }
  }
  
  let overlapClass = getOverlapClass(overlap)
  let classes = classNames('decorative-line', {[`${overlapClass}`]: overlapClass}, {'hidden-on-mobile': hideOnMobile})
  
  return (
    <div className={classes}>
      {lineImage && <SVG className="img-fluid" src={lineImage.fields.file.url} />}
    </div>
  )
}

// this is a nice idea, not sure it will work for all our use cases..
const getOverlapClass = (overlap) => {
  if (!overlap) return ''
  let overlapClass = ''

  // these match values from Contentful
  if (overlap === 'Above') {
    overlapClass = 'overlap-above'
  }
  if (overlap === 'Below') {
    overlapClass = 'overlap-below'
  }
  if (overlap === 'Both') {
    overlapClass = 'overlap-both'
  }
  
  return overlapClass
}

export default DecorativeLine
import React, { useEffect, useState } from 'react'

const DecorativeLine = (props) => {
  const { image, mobileImage } = props
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
  
  return (
    <div className="decorative-line">
      {lineImage && <img src={lineImage.fields.file.url} alt={lineImage.fields.file.url} className="img-fluid"/>}
    </div>
  )
}

export default DecorativeLine
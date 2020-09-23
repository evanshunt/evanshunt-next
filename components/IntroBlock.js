import React from 'react'
import classNames from 'classnames'

// Intro Block
const IntroBlock = (props) => {
  const { largeText, introText, centreAlign, cta } = props
  
  const introBlockClasses = classNames('intro-block', {'centered': centreAlign})
  
  return (
    <section className={introBlockClasses}>
      <h1 className="intro-block-title">Let's do great things</h1>
      <div className="intro-block-text">
        <p>
          We’re marketers, researchers, creatives and developers working on the difficult task of achieving simplicity.
          We don’t arrive with any fixed notions. Instead, we listen and collaborate. Then we create meaningful
          connections that transform businesses and improve daily life.
        </p>
      </div>
    </section>
  )
}

export default IntroBlock
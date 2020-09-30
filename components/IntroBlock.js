import React from 'react'
import classNames from 'classnames'

// Intro Block
const IntroBlock = (props) => {
  
  const { 
    largeText = "Let's do great things", 
    introText = "We’re marketers, researchers, creatives and developers working on the difficult task of achieving simplicity. We don’t arrive with any fixed notions. Instead, we listen and collaborate. Then we create meaningful connections that transform businesses and improve daily life.", 
    centreAlign, 
    cta 
  } = props
  
  const introBlockClasses = classNames('intro-block', {'centered': centreAlign})
  
  return (
    <section className={introBlockClasses}>
      {largeText && <h1 className="intro-block-title">{largeText}</h1>}
      {introText && (
        <div className="intro-block-text">
          <p>
            {introText}
          </p>
          {cta && <a href="/" className="btn">Button</a>}
        </div>
      )}
      {!introText && cta && (
        <a href="/" className="btn">Button</a>
      )}
    </section>
  )
}

export default IntroBlock
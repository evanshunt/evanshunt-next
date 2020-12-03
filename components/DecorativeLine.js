import React, { useEffect, useRef } from 'react'
// import React, { useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import classNames from 'classnames'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
gsap.registerPlugin(ScrollTrigger);

const DecorativeLine = (props) => {
  const { overlap, hideOnMobile, desktopStyle, additionalClass } = props
  let lineTrigger = useRef(null);
  let lineRef = useRef(null);

  // mobile image is optional
  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(DrawSVGPlugin);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    if (lineRef.current != null) {
      const tl = gsap.timeline({defaults: {duration: 10, ease:'none' },
        paused: true,
        scrollTrigger: {
          trigger: lineTrigger.current,
          scrub: true,
          start: 'top center',
          toggleActions: 'play none none reverse',
          markers: false
        }
      });

      tl.fromTo(lineRef.current, {drawSVG: "0%"}, {drawSVG: "100%", ease: 'power4.inout'}, 0)
  }

  // Commenting this out for now as hoping we can always use the Desktop Style,
    // window.addEventListener('resize', handleResize)
    // if (desktopStyle && window.innerWidth < 720) {
    //   setLineImage(getLineImage(desktopStyle, lineRef))
    // } else {
    //   setLineImage(getLineImage(desktopStyle, lineRef))
    // }
    // return () => {
    //   window.removeEventListener('resize', handleResize)
    // }


  }, [desktopStyle])

  // const handleResize = () => {
  //   if (desktopStyle && window.innerWidth < 720) {
  //     setLineImage(getLineImage(desktopStyle, lineRef))
  //   } else {
  //     setLineImage(getLineImage(desktopStyle, lineRef))
  //   }
  // }

  let overlapClass = getOverlapClass(overlap)
  let classes = classNames('decorative-line', {[`${overlapClass}`]: overlapClass}, {'hidden-on-mobile': hideOnMobile}, {[`${additionalClass}`]: additionalClass})

  return (
    <div ref={lineTrigger} className={classes}>
      <div className="svg-wrapper">
        {/* Ugh hate this, but need the SVG markup output here so can adjust the ref value
          inlining the SVG didn't let me modify the ref on the path element */}

        {desktopStyle === 'curve-left-to-right' && (
          <svg
            className="svg-curve-left-to-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 827 339.5">
            <path
              ref={lineRef}
              d="M2,0V.5A140.52,140.52,0,0,0,142.5,141h543A140.52,140.52,0,0,1,826,281.59V328.1"
              transform="translate(-0.5 1)"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
        {desktopStyle === 'curve-right-to-left' && (
          <svg
            className="svg-curve-right-to-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 827 339.5">
            <path
              ref={lineRef}
              className="cls-1"
              d="M826,0V.5A140.52,140.52,0,0,1,685.5,141h-543A140.52,140.52,0,0,0,2,281.59V328.1"
              transform="translate(-0.5 1)"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
        {desktopStyle === 'down-left' && (
          <svg
            className="svg-down-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 101.95 213.5">
            <path
              ref={lineRef}
              d="M99,0V114C99,168.1,54.7,212,.05,212H0"
              transform="translate(1.45)"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
        {desktopStyle === 'down-long-left' && (
          <svg
            className="svg-down-long-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.5 357.5">
            <path
              ref={lineRef}
              d="M129,0V250.55A105.45,105.45,0,0,1,23.55,356H0"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
        {desktopStyle === 'down-right' && (
          <svg
            className="svg-down-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 108.95 318.5">
            <path
              ref={lineRef}
              d="M2,0V211.55C2,269.79,49.43,317,108,317h0"
              transform="translate(-0.5)"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
        {/* TO DO - may need to convert this one to path element instead of line */}
        {desktopStyle === 'down-short' && (
          <svg
            className="svg-down-short"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3.51 194.01">
            <line
              ref={lineRef}
              x1="1.5"
              y1="1.5"
              x2="2"
              y2="192.5"
              style={{
                fill: "none",
                stroke: "#d6dde0",
                strokeLinecap: "square",
                strokeWidth: "3px"
              }}
            />
          </svg>
        )}
      </div>
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
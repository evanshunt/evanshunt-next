import { useEffect, useRef } from "react";
import gsap from "gsap";

const OpenPositions = ({ title, introText, openPositions }) => {
  const tl = useRef(gsap.timeline({ paused: true }));
  let hoverAnimation = useRef(null);
  let buttonLabel = useRef(null);
  let buttonBg = useRef(null);
  let arrow = useRef(null);

  /* Play Timeline Animation on Hover */
  const onEnter = () => {
    tl.current.play(0);
  };

  /* Reverse Timeline Animation when user hovers off */
  const onExit = () => {
    tl.current.reverse();
  };

  useEffect(() => {

    /* Check if the Animation wrapper exists, if so, add our animation
    Animation Steps:
    1.  Arrow slides slightly to left, turns white
    2. Label goes from 0 to 1 opacity
    3. black pill background goes from 0 to 1 opacity, appears to "grow" with transform origin on right side
    */
    if (hoverAnimation.current != null) {
      tl.current.fromTo(arrow.current, {
        opacity: 1,
        fill: '#000000',
        xPercent: 50
      }, {
        duration: 0.3,
        fill: '#ffffff',
        xPercent: 0,
        ease: 'power4.Out'
      }, 0)
      .fromTo(buttonLabel.current, {
        opacity: 0,
        xPercent: 50
      }, {
        duration: 0.3,
        opacity: 1,
        xPercent: 0,
        ease: 'power4.Out'
      }, 0)
      .fromTo(buttonBg.current, {
        xPercent: 80,
        scale: 0
      }, {
        xPercent: 0,
        scale: 1,
        fill: '#000000',
        duration: 0.3,
        ease: 'power4.InOut'
      }, 0)
    }
  }, []);

  return (
    <section className="open-positions" id="open-positions">
      {title && <h1>{title}</h1>}
      {introText && <p className="intro-text">{introText}</p>}

      {openPositions.map((job, i) => (
        <a
          href={job.fields.jobPostingURL}
          key={`open-position${i}`}
          className="position"
          target="_blank"
          rel="noreferrer"
          onMouseEnter={onEnter}
          onMouseLeave={onExit}
        >
          <div className="job-description">
            {job.fields.jobTitle && <p className="title">{job.fields.jobTitle}</p>}
            {job.fields.department && <p className="department">{job.fields.department}</p>}
          </div>

          <svg className="svg-open-position" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 70" ref={hoverAnimation}>
            <path className="bg" d="M35,0H145a35,35,0,0,1,35,35h0a35,35,0,0,1-35,35H35A35,35,0,0,1,0,35H0A35,35,0,0,1,35,0Z" ref={buttonBg}/>
            <text className="label" transform="translate(49.08 41)" ref={buttonLabel}>View</text>
            <path className="arrow" d="M145.62,35.13,138.15,28l-2,1.73,5.25,5H114v2.52h27.37l-5.25,5,2,1.73,7.47-7.13A1.16,1.16,0,0,0,146,36,1.33,1.33,0,0,0,145.62,35.13Z" ref={arrow}/>
          </svg>

        </a>
      ))}
    </section>
  );
};

export default OpenPositions;

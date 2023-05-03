import { useCallback, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import RichText from "./RichText";
import gsap from "gsap";

function useHover() {
  const mouseOver = useCallback((event) => {
    const target = event.currentTarget;
    target.animation.play();
  }, []);

  const mouseOut = useCallback((event) => {
    const target = event.currentTarget;
    target.animation.reverse();
  }, []);

  return { mouseOver, mouseOut };
}

/* Animation Steps:
  1. Arrow slides slightly to left, turns white
  2. Label goes from 0 to 1 opacity
  3. black pill background goes from 0 to 1 opacity, appears to "grow" with transform origin on right side
*/
const pillArrowTween = (element) => {
  var tl = gsap.timeline({
    id: "openPositionAnimation",
    paused: true,
    delay: 0.2,
  });
  var arrow = element.querySelector(".arrow");
  var label = element.querySelector(".label");
  var bg = element.querySelector(".bg");

  tl.fromTo(
    arrow,
    {
      fill: "#000000",
      xPercent: 50,
    },
    {
      duration: 0.3,
      fill: "#ffffff",
      xPercent: 0,
      ease: "power4.Out",
    },
    0
  )
    .fromTo(
      label,
      {
        opacity: 0,
        xPercent: 50,
      },
      {
        duration: 0.3,
        opacity: 1,
        xPercent: 0,
        ease: "power4.Out",
      },
      0
    )
    .fromTo(
      bg,
      {
        opacity: 0,
        scaleX: 0,
        xPercent: 20,
      },
      {
        opacity: 1,
        scaleX: 1,
        xPercent: 0,
        fill: "#000000",
        duration: 0.3,
        ease: "power4.InOut",
      },
      0
    );

  // store the tween timeline in the javascript DOM node
  element.animation = tl;
  return element.animation;
};

const OpenPositions = ({ title, introText, openPositions }) => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  const { mouseOver, mouseOut } = useHover();

  /* Create array of buttons so we can initialize the animation */
  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Initialize Animation for Buttons
    revealRefs.current.forEach((el, index) => {
      pillArrowTween(el);
    });
  }, []);

  return (
    <section className="open-positions" id="open-positions">
      {title && <h1>{title}</h1>}
      {introText && <p className="intro-text">{introText}</p>}

      {openPositions.map((job, i) => (
        <div className="content-wrapper" key={`open-position${i}`}>
          {/* If child is markdown field - like if there aren't any job posts to show */}
          {job.sys.contentType.sys.id === "globalElementMarkdown" && (
            <ReactMarkdown className="markdown">
              {job.fields.markdown}
            </ReactMarkdown>
          )}

          {/* If child is richtext field - like if there aren't any job posts to show */}
          {job.sys.contentType.sys.id === "globalElementRichText" && (
            <RichText content={job.fields.richText} />
          )}

          {job.sys.contentType.sys.id === "globalElementOpenPosition" && (
            <a
              href={job.fields.jobPostingURL}
              className="position"
              target="_blank"
              rel="noreferrer"
              ref={addToRefs}
              onMouseOver={mouseOver}
              onMouseOut={mouseOut}
            >
              <div className="job-description">
                {job.fields.jobTitle && (
                  <p className="title">{job.fields.jobTitle}</p>
                )}
                {job.fields.department && (
                  <p className="department">{job.fields.department}</p>
                )}
              </div>

              <svg
                className={`svg-open-position item-${i}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 70"
              >
                <path
                  className={`bg`}
                  d="M35,0H145a35,35,0,0,1,35,35h0a35,35,0,0,1-35,35H35A35,35,0,0,1,0,35H0A35,35,0,0,1,35,0Z"
                />
                <text className={`label`} transform="translate(49.08 41)">
                  View
                </text>
                <path
                  className={`arrow`}
                  d="M145.62,35.13,138.15,28l-2,1.73,5.25,5H114v2.52h27.37l-5.25,5,2,1.73,7.47-7.13A1.16,1.16,0,0,0,146,36,1.33,1.33,0,0,0,145.62,35.13Z"
                />
              </svg>
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default OpenPositions;

import React, { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurTeam = (props) => {
  const { title, intro, leaders } = props;

  // Variables for Our Team Grid Animation
  let leadersGridTrigger = useRef(null);
  let aLeaderRow = useRef(null);
  aLeaderRow.current = [];

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

    // animate logo rows
    aLeaderRow.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 10,
        },
        {
          duration: 1.5,
          opacity: 1,
          y: 0,
          ease: "power4.inOut",
          scrollTrigger: {
            id: `team-${index + 1}`,
            trigger: el,
            start: "top center+=1100px",
            scrub: 1,
            toggleActions: "play none none none",
            once: true,
          },
        }
      );
    });

    return () => {
      aLeaderRow.current.forEach((el, index) => {
        if (ScrollTrigger.getById(`team-${index + 1}`) !== undefined) {
          ScrollTrigger.getById(`team-${index + 1}`).kill();
        }
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !aLeaderRow.current.includes(el)) {
      aLeaderRow.current.push(el);
    }
  };

  // make groups of 4 for each row, for animation by row purposes
  const leaderPerRow = 2;
  let leaderRows = [];
  let tempArray = [];
  for (let i = 0, j = leaders.length; i < j; i += leaderPerRow) {
    tempArray = leaders.slice(i, i + leaderPerRow);
    leaderRows.push(tempArray);
  }

  return (
    <section className="our-team" ref={leadersGridTrigger}>
      <TitleAndLogo title={title} />
      {intro && <p className="our-team-intro">{intro}</p>}
      <div className="our-team-leaders">
        {leaderRows &&
          leaderRows.map((row, i) => {
            return (
              <div className="our-team-row" key={i} ref={addToRefs}>
                {row.map((leader, j) => {
                  return (
                    <div className="our-team-leader" key={j}>
                      <ReactMarkdown>{leader.fields.markdown}</ReactMarkdown>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </section>
  );
};

const TitleAndLogo = ({ title }) => {
  const titleParts = title.split(" ");
  return (
    <div className="our-team-title">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 465.12 130.73"
        className="our-team-svg"
      >
        <g id="Monogram">
          <path
            className="cls-1"
            d="M212.7,7.5c-32.31,0-58.6,26-58.6,57.87s26.29,57.87,58.6,57.87,58.59-26,58.59-57.87S245,7.5,212.7,7.5Zm0,123.23c-36.5,0-66.19-29.32-66.19-65.36S176.2,0,212.7,0s66.18,29.32,66.18,65.37-29.69,65.36-66.18,65.36ZM197.53,48c-.23-2.76-2.21-4.08-4.93-4.13-2.89-.06-4.86,1.15-5.22,4-.5,3.95-.46,8-.65,12h10.88c0-4,.24-8-.08-11.9Zm10.93,19.48V68.6H186.9c0,.93,0,1.71,0,2.49.07,3.59,0,7.2.26,10.77.27,3.31,2.19,4.93,5.23,5s4.91-1.53,5.29-4.86c.31-2.63.3-5.3.44-8.13h10.33c-.08,4.77.73,9.56-1.35,14.1-2.22,4.83-6.38,7-11.44,7.68a21.16,21.16,0,0,1-10.4-1c-5.18-2-8.15-5.72-8.67-11.13-.31-3.26-.19-6.57-.2-9.85q0-11.73,0-23.45c0-9.36,4.85-14.53,14.29-15.24a23.53,23.53,0,0,1,5.81.24c7.27,1.26,11.81,5.67,11.87,13,.06,6.51.1,19.26.1,19.26ZM249,36.77V95H238.68V69.53h-11v25.6H217.25V36.8h10.38V60.52h11V36.77Z"
          />
        </g>
        <g id="Our-team" className="cls-2">
          <text className="cls-4" transform="translate(0 82.6)">
            {titleParts[0]}
          </text>
          <text className="cls-3" transform="translate(308.06 83.28)">
            {titleParts[1]}
          </text>
        </g>
      </svg>
    </div>
  );
};

export default OurTeam;

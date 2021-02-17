
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StaggeredImagesWithText = (props) => {
  
  const { imageAndTextBlocks } = props
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    if (typeof window !== `undefined`) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.core.globals("ScrollTrigger", ScrollTrigger);
    }

     // Tiles that fade in
     revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        opacity: 0,
        y: 50
      }, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        ease: 'power4.inOut',
        scrollTrigger: {
          id: `section-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

    return () => {
      revealRefs.current.forEach((el, index) => {
        ScrollTrigger.getById(`section-${index+1}`).kill();
      })
    }

  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
        revealRefs.current.push(el);
    }
  };
  
  return (
    <section className="staggered-images-with-text container">
      {imageAndTextBlocks && imageAndTextBlocks.map((block, i) => {
        return (
          <div className="staggered-column" key={i} ref={addToRefs}>
            <img className="img-fluid" src={block.fields.image.fields.file.url} alt={block.fields.image.fields.description} />
            {block.fields.title && <h2 className="title">{block.fields.title}</h2>}
            {block.fields.text && <p className="text">{block.fields.text}</p>}
          </div>
        )
      })}
    </section>
  )
}

export default StaggeredImagesWithText
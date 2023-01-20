
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from 'next/link';
gsap.registerPlugin(ScrollTrigger);

const StaggeredImagesWithText = (props) => {
  const { imageAndTextBlocks, id } = props;
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
          id: `section-${id}-${index+1}`,
          trigger: el,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

    });

    return () => {
      revealRefs.current.forEach((el, index) => {
        ScrollTrigger.getById(`section-${id}-${index+1}`).kill();
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
            <picture>
              <source srcSet={`${block.fields.image.fields.file.url}?fm=webp`} type="image/webp" />
              <source srcSet={`${block.fields.image.fields.file.url}?fm=jpg`} type="image/jpeg" />
              <img className="img-fluid" src={block.fields.image.fields.file.url} alt={block.fields.image.fields.description} />
            </picture>
            {block.fields.title && <h2 className="title">{block.fields.title}</h2>}
            {block.fields.text && <p className="text">{block.fields.text}</p>}
            {block.fields.link && (
            <Link href={block.fields.link.fields.url}>
              <a className="btn btn-secondary btn-outline-alt" title={block.fields.link.fields.title}>{block.fields.link.fields.title}</a>
            </Link>
            )}
          </div>
        )
      })}
    </section>
  )
}

export default StaggeredImagesWithText
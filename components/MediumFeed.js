import { useEffect, useState } from "react";

const MediumFeed = ({ title }) => {
  const [posts, setPosts] = useState({});

  // fetch posts
  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@evanshunt`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="medium-feed">
      <div className="container-medium">
        <div className="column left">
          {title && <p className="title">{title}</p>}
        </div>

        <div className="column right">
          {posts &&
            posts.length &&
            posts.map((post, i) => {
              return (
                i < 3 && (
                  <article className="post" key={`medium-${i}`}>
                    <div className="icon">
                      <img src="/images/monogram.svg" alt="" />
                    </div>
                    <a href={post.link} className="text" target="_blank" rel="noreferrer">
                      <h3>{post.title}</h3>
                      Read story{" "}
                      <img className="dark-arrow" src="/images/small-right-arrow.svg" alt="Right pointing arrow" />
                      <img className="light-arrow" src="/images/small-right-arrow-white.svg" alt="Right pointing arrow" />
                    </a>
                  </article>
                )
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default MediumFeed;

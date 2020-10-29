import { useEffect, useState } from "react";

const MediumFeed = ({ title }) => {
  const [posts, setPosts] = useState({});

  // fetch posts
  useEffect(() => {
    // fetch(`https://api.medium.com/v1/users/@evanshunt/publications`)
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@evanshunt`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
          {posts.length > 0 &&
            posts.map((post, i) => {
              return (
                i < 3 && (
                  <article className="post" key={`medium-${i}`}>
                    <div className="icon">
                      <img src="/images/monogram.svg" alt="" />
                    </div>
                    <div className="text">
                      <a href={post.link} target="_blank" rel="noreferrer">
                        <h3>{post.title}</h3>
                      </a>
                      <a href={post.link} target="_blank" rel="noreferrer">
                        Read story{" "}
                        <img src="/images/small-right-arrow.svg" alt="" />
                      </a>
                    </div>
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

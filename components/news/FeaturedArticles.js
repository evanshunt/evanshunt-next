import React from "react";

const FeaturedArticles = ({ articles }) => {
  //console.log(articles);
  return (
    <div className="featured-articles">
      <div className="container">
        <div className="featured-articles__wrapper">
          <div className="featured-articles__title">
            <h3>Featured</h3>
          </div>

          {/* Map through all articles in the Featured Articles array */}
          <div className="featured-articles__container">
            {/* Main featured article */}
            <div className="featured-articles__main">
              <div className="featured-articles__main__image">
                <img
                  src={articles[0].fields.mainArticleImage.fields.file.url}
                  alt={articles[0].fields.mainArticleImage.fields.title}
                />
              </div>
              <div className="featured-articles__main__content">
                <h3>{articles[0].fields.title}</h3>
                <p>{articles[0].fields.previewText}</p>
                <a href={articles[0].fields.cta.fields.url}>
                  {articles[0].fields.cta.fields.title}
                </a>
              </div>
            </div>

            {/* Secondary featured articles, skipping first article as the first article is the main featured article */}
            <div className="secondary-articles__wrapper">
              {articles.map((article, index) => {
                console.log(article);
                if (index >= 1) {
                  return (
                    <div className="secondary-articles__item" key={index}>
                      <div className="secondary-articles__item__image">
                        <img
                          src={article.fields.mainArticleImage.fields.file.url}
                          alt={article.fields.mainArticleImage.fields.title}
                        />
                      </div>
                      <div className="secondary-articles__item__content">
                        <h3>{article.fields.title}</h3>
                        <p>{article.fields.previewText}</p>
                        <a href={article.fields.cta.fields.url}>
                          {article.fields.cta.fields.title}
                        </a>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticles;

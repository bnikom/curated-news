import React from 'react';
import { Col, Row } from 'reactstrap';

const ArticleBody = ({ articles, colSize }) => {

  return (
      <Row className="mt-4">
        {articles.map((article) => {
          const {
           author,
            description,
            source: {
              name,
            },
            title,
            url,
            urlToImage,
            publishedAt,
          } = article;

          const articleLink = `/curated/article/${name}-${publishedAt}`;
          console.log(articleLink)
          return(
            <Col xs={colSize} className="">
              <div>
                <a href={articleLink}>
                  <img
                    className="article-img mb-2 p-2"
                    key={name}
                    src={(urlToImage) ? urlToImage : '/images/no-image.png' }
                    alt={(urlToImage )? title : "No Image Available"}
                  />
                </a>
              </div>
              <div className="content-info">
                <a href={articleLink}>{title}</a>
                {author && <p>By: {author}</p>}
              </div>
            </Col>
          )
        })}  
      </Row>
  )
}

export default ArticleBody;
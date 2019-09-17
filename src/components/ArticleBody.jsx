import React from 'react';
import { Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

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
          return(
            <Col xs={colSize} key={url} className="article-square">
              <div>
                <Link
                  to={{
                    pathname: articleLink,
                    state: { url, author, title }
                }}>
                  <img
                    className="article-img mb-2 p-2"
                    key={name}
                    src={(urlToImage) ? urlToImage : '/images/no-image.png' }
                    alt={(urlToImage )? title : "No Image Available"}
                  />
                </Link>
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
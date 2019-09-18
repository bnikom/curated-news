import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Col, Row } from 'reactstrap';

import NavBar from './Navbar/Navbar'
import ArticleBody from './ArticleBody';

class NewsType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

  }

  async componentDidMount() {
    const { type } = this.props; 
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${type}&apiKey=703c21d15eb941f7bac49340b26f4aa1`);
    this.setState({ articles: response.data.articles, loading: false })
  }

  render() {
    const { loading } = this.state;
    const { type } = this.props;

    if (loading) return null;

    const { articles } = this.state;

    return(
      <div>
        <NavBar />
        <div className="mt-4">
          <h1>Top <span className="capitalize">{type}</span> News</h1>
          <ArticleBody 
            articles={articles}
            colSize={4}
          />
        </div>
      </div>
    );
  }

}

export default NewsType;
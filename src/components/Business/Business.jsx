import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Col, Row } from 'reactstrap';

import NavBar from '../Navbar/Navbar'
import ArticleBody from '../ArticleBody';

class Business extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

  }

  async componentDidMount() {
    console.log('HHIHIHIH')
    const response = await axios.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=703c21d15eb941f7bac49340b26f4aa1');
    console.log(response.data)
    this.setState({ articles: response.data.articles, loading: false })
  }

  render() {
    const { loading } = this.state;

    if (loading) return null;

    const { articles } = this.state;
    console.log(articles)

    return(
      <div className="mt-4">
        <NavBar />
        <div>
          <h1>Top Business News</h1>
          <ArticleBody 
            articles={articles}
            colSize={3}
          />
        </div>
      </div>
    );
  }

}

export default Business;
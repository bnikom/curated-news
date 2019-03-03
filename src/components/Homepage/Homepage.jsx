import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Col, Row } from 'reactstrap';

import NavBar from '../Navbar/Navbar'
import ArticleBody from '../ArticleBody';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

  }

  async componentDidMount() {
    console.log('HHIHIHIH')
    const response = await axios.get('https://newsapi.org/v2/everything?pageSize=15&domains=wsj.com,nytimes.com, wapo.com&apiKey=703c21d15eb941f7bac49340b26f4aa1');
    console.log(response.data)
    this.setState({ articles: response.data.articles, loading: false })
  }

  render() {
    const { loading } = this.state;

    if (loading) return null;

    const { articles } = this.state;
    console.log(articles)

    return(
      <div>
        <NavBar />
        <div className="mt-4">
          <h1>Top News</h1>
          <ArticleBody 
            articles={articles}
            colSize={4}
          />
        </div>
      </div>
    );
  }

}

export default HomePage;
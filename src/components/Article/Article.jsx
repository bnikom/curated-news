import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Col, Row } from 'reactstrap';

import NavBar from '../Navbar/Navbar'

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    
  }

  render() {
    const { loading } = this.state;
    const { url, author, title } = this.props.location.state;

    return(
      <div>
        <NavBar />
        <div className="mt-4">
          <h1>{title}</h1>
          <h2>By {author}</h2>
          <iframe title={title} src={url}></iframe>
        </div>
      </div>
    );
  }

}

export default Article;
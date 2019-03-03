import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import { Col, Row } from 'reactstrap';

import NavBar from '../Navbar/Navbar'

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  async componentDidMount() {
    console.log('HHIHIHIH')
  }

  render() {
    const { loading } = this.state;

    if (loading) return null;

    return(
      <div>
        <NavBar />
        <div className="mt-4">
        </div>
      </div>
    );
  }

}

export default Entertainment;
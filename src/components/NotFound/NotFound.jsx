import React, {Component} from 'react';
import {withRouter} from 'react-router';

class NotFound extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <p>oh shit, you're out of luck</p>;
  }

}

export default NotFound;
import React, { Component } from 'react';
import './App.scss';
import { inject, observer } from 'mobx-react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

@inject('store') @observer
class Home extends Component {
  render() {
    return (
      <div className="Home">
      </div>
    );
  }
}

export default Home;

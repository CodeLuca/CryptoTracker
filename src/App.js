import "bulma/css/bulma.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import Store from "./Store";

import Nav from "./Nav";
import Home from "./Home";

class App extends Component {
  componentWillMount() {
    Store.updateData();
  }

  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div>
            <Nav />

            <br />

            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

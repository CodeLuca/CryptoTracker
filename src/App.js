import 'bulma/css/bulma.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Nav from "./Nav";
import Home from "./Home";

export default () => (
  <Router>
    <div>
      <Nav />

      <Route exact path="/" component={Home} />
    </div>
  </Router>
);
  
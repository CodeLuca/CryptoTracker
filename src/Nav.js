import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <nav className="navbar is-transparent">
    <div className="column is-three-fifths is-offset-one-fifth">
      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>

        <div className="navbar-end">
          <Link className="navbar-item" to="/settings">
            Settings
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

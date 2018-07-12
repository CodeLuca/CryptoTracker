import React, { Component } from "react";
import "./App.scss";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Settings extends Component {
  render() {
    return (
      <div className="Settings columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="current-currency">
            <b>Current currency:</b>{" "}
            <span>{this.props.store.currency}</span>
          </div>
          <div className="select-currency">
            <b>Set currency:</b>
            <button
              className="button currency-button"
              onClick={() => this.props.store.setCurrency("USD")}
            >
              USD
            </button>
            <button
              className="button currency-button"
              onClick={() => this.props.store.setCurrency("EUR")}
            >
              EUR
            </button>
            <button
              className="button currency-button"
              onClick={() => this.props.store.setCurrency("CNY")}
            >
              CNY
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;

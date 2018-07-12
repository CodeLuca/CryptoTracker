import React, { Component } from "react";
import "./App.scss";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Details extends Component {
  componentWillMount() {
    if (!this.props.store.selected) {
      this.props.history.push("/");
    }
  }

  render() {
    const currency = this.props.store.currency,
      selected = this.props.store.selected;

    return (
      <div className="Details columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <button
            className="button refresh-button"
            onClick={() => this.props.store.updateData()}
          >
            Refresh
          </button>
          <p>
            <b>Rank:</b> {selected.rank}
          </p>
          <p>
            <b>Symbol:</b> {selected.symbol}
          </p>
          <p>
            <b>Name:</b> {selected.name}
          </p>
          <p>
            <b>Price:</b> {selected.quotes[currency].price} {currency}
          </p>
          <p>
            <b>1hr Change:</b> {selected.quotes[currency].percent_change_1h}%
          </p>
          <p>
            <b>24hr Change:</b> {selected.quotes[currency].percent_change_24h}%
          </p>
          <p>
            <b>7 day Change:</b> {selected.quotes[currency].percent_change_7d}%
          </p>
          <p>
            <b>Total:</b> {selected.total_supply}
          </p>
          <p>
            <b>Available supply:</b> {selected.circulating_supply}
          </p>
        </div>
      </div>
    );
  }
}

export default Details;

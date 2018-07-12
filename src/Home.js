import React, { Component } from "react";
import "./App.scss";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Home extends Component {
  getDetails(selected) {
    this.props.store.selected = selected;
    this.props.history.push("details");
  }

  chartData() {
    const currency = this.props.store.currency;

    if (this.props.store.data) {
      return this.props.store.data.map((current, i) => {
        return (
          <tr key={i} onClick={() => this.getDetails(current)}>
            <td>{current.rank}</td>
            <td>{current.symbol}</td>
            <td>{current.quotes[currency].price} {currency}</td>
            <td>{current.quotes[currency].percent_change_24h} %</td>
          </tr>
        );
      });
    }
  }

  render() {
    return (
      <div className="Home columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <button
            className="button refresh-button"
            onClick={() => this.props.store.updateData()}
          >
            Refresh
          </button>
          <table className="table" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24 hrs</th>
              </tr>
            </thead>

            <tbody>{this.chartData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Home;

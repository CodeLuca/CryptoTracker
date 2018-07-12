import { observable } from "mobx";

let index = 0;

class Store {
  @observable data = null;
  @observable currency = "USD";

  updateData() {
    console.info("Updating Data...");

    return new Promise((resolve, reject) => {
      fetch("https://api.coinmarketcap.com/v2/ticker/?convert=" + this.currency)
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.data = Object.keys(response.data).map((current, i) => {
            return response.data[current];
          });

          resolve();
        });
    });
  }

  setCurrency(newCurrency) {
    this.currency = newCurrency;
    this.updateData();
  }
}

const exportStore = new Store();
export default exportStore;

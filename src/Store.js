import { observable } from "mobx";

let index = 0;

class Store {
  @observable data = {};

  updateData() {
    return new Promise((resolve, reject) => {
      fetch("https://api.coinmarketcap.com/v2/ticker/")
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.activeRoutes = response.map((item, i) => {
            return {
              name: item.meta.meta_title,
              nav: item.meta.navigation_label
            };
          });
        });

      resolve();
    });
  }
}

const exportStore = new Store();
export default exportStore;

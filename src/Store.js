import { observable } from "mobx";

let index = 0;

class Store {
  @observable data = null;

  updateData() {

    return new Promise((resolve, reject) => {
      fetch("https://api.coinmarketcap.com/v2/ticker/")
        .then(response => {
          return response.json();
        })
        .then(response => {
          console.log(Object.keys(response.data));
          
          this.data = Object.keys(response.data).map((current, i) => {
            return response.data[current];
          });

          resolve();
        });
    });
  }
}

const exportStore = new Store();
export default exportStore;

export default class BaseStore {
  constructor(stores) {
    this.stores = stores;
  }
  getStore(store) {
    return this.stores[store]
  }
}
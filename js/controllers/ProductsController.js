import Observer from "../common/Observer.js";
import ProductsModel from "../models/ProductsModel.js";
import ProductsView from "../views/ProductsView.js";

export default class ProductsController {
  constructor() {
    this.model = new ProductsModel();
    this.view = new ProductsView();
    Observer.subscribe(Observer.events.filterProducts, this.onFilterProducts);
  }

  onFilterProducts = (filterData) => {
    const data = this.model.filter(filterData);
    this.view.render(data);
  };

  async init() {
    const data = await this.model.getProducts();
    this.view.render(data);
  }
}

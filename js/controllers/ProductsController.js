import ProductsModel from "../models/ProductsModel.js";
import ProductsView from "../views/ProductsView.js";

export default class ProductsController {
  constructor() {
    this.model = new ProductsModel();
    this.view = new ProductsView();
  }

  async init() {
    const data = await this.model.getProducts();
    this.view.render(data);
  }
}

import Model from "../common/Model.js";

export default class ProductsModel extends Model {
  async getProducts() {
    return await this.fetcher("/products");
  }
}

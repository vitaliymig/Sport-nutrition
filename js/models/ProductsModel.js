import Model from "../common/Model.js";

export default class ProductsModel extends Model {
  async getProducts() {
    this.data = await this.fetcher("/products");
    return this.data;
  }

  filter(filterData) {
    return this.data.filter((product) => {
      return filterData.filterQuery.every((values, i) => {
        return values.length > 0
          ? values.includes(product[filterData.filterFields[i].type])
          : true;
      });
    });
  }
}

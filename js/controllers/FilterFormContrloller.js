import Observer from "../common/Observer.js";
import ProductsModel from "../models/ProductsModel.js";
import FilterFormView from "../views/FilterFormView.js";

export default class FilterFormController {
  constructor() {
    this.model = new ProductsModel();
    this.view = new FilterFormView(this.onFilter);
  }
  onFilter(event, filterFields) {
    event.preventDefault();
    const filterQuery = filterFields.map(({ type }) => {
      const checkedInputs = Array.from(event.target[type]).filter(
        (input) => input.checked
      );
      return checkedInputs.map((checkedInput) => checkedInput.value);
    });
    Observer.notify(Observer.events.filterProducts, {
      filterFields,
      filterQuery,
    });
  }
  async init() {
    const data = await this.model.getProducts();
    this.view.render(data);
  }
}

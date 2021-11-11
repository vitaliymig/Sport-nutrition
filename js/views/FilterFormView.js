import View from "../common/View.js";

export default class FilterFormView extends View {
  domStr = [
    { name: "container", selector: "#filterFields" },
    { name: "form", selector: "#filterForm" },
  ];
  fields = [{ type: "category", name: "По категориям" }];

  constructor(onFilter) {
    super();
    this.linkDOMElements();
    this.dom.form.addEventListener("submit", (event) =>
      onFilter(event, this.fields)
    );
  }

  render(products) {
    const filterFormHTML = this.fields
      .map((field) => {
        const values = [
          ...new Set(products.map((product) => product[field.type])),
        ];
        return this.renderFilterBlock(field, values);
      })
      .join("");
    this.dom.container.insertAdjacentHTML("beforeend", filterFormHTML);
  }

  renderFilterBlock(field, values) {
    const filtersHTML = values
      .map((value) => this.renderFilter(field, value))
      .join("");
    return `<fieldset>
      <legend>${field.name}</legend>
      ${filtersHTML}
    </fieldset>`;
  }
  renderFilter(field, value) {
    console.log(field, value);
    return `
      <label class="d-block mb-3">
        <input type="checkbox" name="${field.type}" value="${value}">
        <span>${value}</span>
        </label>
      `;
  }
}

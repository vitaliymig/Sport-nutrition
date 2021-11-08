import View from "../common/View.js";

export default class ProductsView extends View {
  domStr = [{ name: "container", selector: "#products" }];
  constructor() {
    super();
    this.linkDOMElements();
  }

  render(products) {
    const productsHTML = products.map(this.renderCard).join("");
    this.dom.container.insertAdjacentHTML("beforeend", productsHTML);
  }

  renderCard({ name, img }) {
    return `
      <div class="col mb-4">
        <div class="card product-card">
          <img src="${img}" width="1" height="1" loading="lazy" decoding="async" class="card-img-top product-card__img" alt="${name}">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <button class="btn btn-success prodcuct-card__btn">Купить</button>
          </div>
        </div>
      </div>
    `;
  }
}

import View from "../common/View.js";

export default class ProductsView extends View {
  domStr = [{ name: "container", selector: "#products" }];
  constructor() {
    super();
    this.linkDOMElements();
  }

  render(products) {
    const productsHTML = products.map(this.renderCard).join("");
    this.dom.container.innerHTML = productsHTML;
  }

  renderCard({ name, img, category, rating, price }) {
    return `
      <div class="col mb-4">
        <div class="card product-card">
          <img src="${img}" width="1" height="1" loading="lazy" decoding="async" class="card-img-top product-card__img" alt="${name}">
          <div class="card-body">
            <h5 class="card-title"><a href="#">${name}</a></h5>
            <h6 class="card-category">${category}</h6>
            <div class="card-rating">${rating}</div>
            <div class="car-price">
              <span class="price-usa">${price}</span>
            </div>
            <button class="btn btn-success prodcuct-card__btn">Купить</button>
          </div>
        </div>
      </div>
    `;
  }
}

//        "id": 1,
//       "name": "100% Whey Gold Standard",
//       "category": "Протеин",
//       "price": 2942,
//       "sale": false,
//       "rating": 3,
//       "img": "https://bodymarket.ua/img/p/4/2/7/8/4278-home_default.jpg",
//       "views": 114,
//       "top": false,
//       "count": 91,
//       "description": "Лучший протеин в мире уже 12 лет подряд, призер самых престижных наград качества.",
//       "type": "Соевый",
//       "portions": 48,
//       "taste": "Ванильный"

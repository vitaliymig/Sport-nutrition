import FilterFormController from "./controllers/FilterFormContrloller.js";
import ProductsController from "./controllers/ProductsController.js";

const products = new ProductsController();
products.init();

const filterForm = new FilterFormController();
filterForm.init();

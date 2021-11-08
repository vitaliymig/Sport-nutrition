export default class View {
  linkDOMElements = () => {
    this.dom = this.domStr.reduce((acc, { name, selector }) => {
      acc[name] = document.querySelector(selector);
      console.log(selector);
      return acc;
    }, {});
  };
}

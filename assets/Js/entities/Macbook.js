export class Macbook {
  static #data = {
    name: `Macbook Air M2`,
    inStock: 10,
    price: "17.199,00",
  };

  static get stock() {
    return Macbook.#data.inStock;
  }

  static get price() {
    return Macbook.#data.price;
  }

  static get name() {
    return Macbook.#data.name;
  }

  addMacbookToCart() {
    document.getElementById("add-to-cart").addEventListener("click", () => {
      User.addToCart(Macbook.data);
    });
  }

  addToCart(product) {
    const cart = Cart.addToCart(product);
    User.addToCart(cart);
  }
}

const titleproduct = document.createElement("h1");
titleproduct.id = "title-product";
titleproduct.innerText = Macbook.name;

const contentTitleProduct = document.getElementById("content-title-product");
contentTitleProduct.appendChild(titleproduct);

const priceProduct = (document.getElementById(
  "price"
).innerText = `R$ ${Macbook.price}`);

const inStock = (document.getElementById(
  "inStock"
).innerText = `${Macbook.stock} unidades em estoque`);

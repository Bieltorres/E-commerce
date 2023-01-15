import { Cart } from "./Cart.js";

export class AirPodsMax {
  static #data = {
    name: "Airpods Max",
    inStock: 10,
    price: "6.590,00",
  };

  static get stock() {
    return AirPodsMax.#data.inStock;
  }

  static get price() {
    return AirPodsMax.#data.price;
  }

  static get name() {
    return AirPodsMax.#data.name;
  }

  addAirPodsMaxToCart() {
    document.getElementById("add-to-cart").addEventListener("click", () => {
      User.addToCart(AirPodsMax.data);
    });
  }

  addToCart(product) {
    const cart = Cart.addToCart(product);
    User.addToCart(cart);
  }
}

const titleproduct = document.createElement("h1");
titleproduct.id = "title-product";
titleproduct.innerText = AirPodsMax.name;

const contentTitleProduct = document.getElementById("content-title-product");
contentTitleProduct.appendChild(titleproduct);

const priceProduct = AirPodsMax.price;
const price = document.getElementById("price");
price.innerText = `R$ ${priceProduct}`;

const inStock = (document.getElementById(
  "inStock"
).innerText = `${AirPodsMax.stock} unidades em estoque`);

fetch("https://ipapi.co/json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("region").innerHTML = data.city;
  });

export class Cart {
  static dataCar = [];

  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  static addToCart(product, quantity) {
    const cartProduct = Cart.dataCar.push({ product, quantity });
    User.addToCart(cartProduct);
  }
}

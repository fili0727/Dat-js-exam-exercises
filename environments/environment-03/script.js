"use strict";
// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
const products = [
  { name: "shampoo", price: 30, inStock: true },
  { name: "conditioner", price: 20, inStock: false },
  { name: "neglelak", price: 40, inStock: true },
];
// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun produkter hvor `inStock` er `true`.
window.addEventListener("load", start);

function start() {
  document.querySelector("#create-form").addEventListener("submit", form);
  showProducts(products);
}

function showProducts() {
  document.querySelector("#list-container").innerHTML = "";

  products.forEach(showProductsInStock);
}

function showProductsInStock(product) {
  if (product.inStock === true) {
    const HTML = /*HTML*/ `
  <li>${product.name}, ${product.price},-</li>
  `;
    document
      .querySelector("#list-container")
      .insertAdjacentHTML("beforeend", HTML);
  }
}
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.

function addProduct(name, price, inStock) {
  const newProduct = { name: name, price: price, inStock: inStock };

  products.push(newProduct);
  showProducts(products);
}
function form(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = form.price.value;
  const inStock = form.inStock.value;
  // form.reset();
  addProduct(name, price, inStock);
  console.log(products);
}

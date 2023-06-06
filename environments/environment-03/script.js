"use strict";

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties:
//`name` (string), `price` (number) og `inStock` (boolean).
const products = [
  {
    name: "shampoo",
    price: 20,
    inStock: true,
  },
  {
    name: "balsam",
    price: 25,
    inStock: false,
  },
  {
    name: "neglelak",
    price: 30,
    inStock: true,
  },
];

window.addEventListener("load", start);

function start() {
  document
    .querySelector("#create-form")
    .addEventListener("submit", submitClicked);
  showProducts();
}

// 2. Lav en funktion der viser listen af alle `product`-objekter - vis kun
//produkter hvor `inStock` er `true`.
function showProducts() {
  document.querySelector("#list-container").innerHTML = "";
  filterInStock(products).forEach(showProduct);
}

function showProduct(product) {
  const html = /*HTML*/ `
  <li>${product.name}, ${product.price},-</li>
  `;
  document
    .querySelector("#list-container")
    .insertAdjacentHTML("beforeend", html);
}

function filterInStock() {
  return products.filter(a => a.inStock == true);
}
// 3. Lav en funktion der ved hjælp af formularen, opretter et nyt `product`-objekt og
//tilføjer det til listen. Listen på websiden opdateres hver gang, der oprettes et nyt objekt.
function addProduct(name, price, inStock) {
  const newProduct = {
    name,
    price,
    inStock,
  };
  products.push(newProduct);
  showProducts();
}
function submitClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const price = Number(form.price.value);
  const inStock = form.inStock.checked;

  addProduct(name, price, inStock);
  showProducts();
}

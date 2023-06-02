"use strict";

// 1. Lav en liste med tre `product`-objekter. Hvert objekt har følgende properties: `name` (string), `price` (number) og `inStock` (boolean).
const products = [
  { name: "markus", price: 30, inStock: true },
  { name: "benjamin", price: 20, inStock: false },
  { name: "gustav", price: 2, inStock: true },
];

window.addEventListener("load", start);

function start() {
  showProducts(products);
  document.querySelector("#select-sort-by").addEventListener("change", sortBy);
}
// 2. Lav en funktion der viser listen af alle `product`-objekter på websiden.
function showProducts() {
  document.querySelector("#list-container").innerHTML = "";
  products.forEach(showProduct);
}

function showProduct(product) {
  const HTML = /*HTML*/ `
  <li>${product.name}, ${product.inStock}, ${product.price},-</li>
  `;
  document
    .querySelector("#list-container")
    .insertAdjacentHTML("beforeend", HTML);
}
// 3. Lav en funktion der kan sortere listen efter `name`, `price` og `inStock`.
//Sorteringen skal ske på baggrund af valgte `option` i `select` (se `environment-03`).
//Sortering ændrer sig hver gang en ny sortering `option` vælges.

function sortBy(event) {
  console.log(event.target.value);
  if (event.target.value === "name") {
    products.sort((a, b) => a.name.localeCompare(b.name));
  } else if (event.target.value === "price") {
    products.sort((a, b) => a.price - b.price);
  } else if (event.target.value === "inStock") {
    products.sort((a, b) => b.inStock - a.inStock);
  }

  showProducts(products);
}

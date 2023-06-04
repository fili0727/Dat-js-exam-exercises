"use strict";

// 1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
// 2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
// 3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)
window.addEventListener("load", start);

let basket = [];

async function start() {
  const products = await getData();
  console.log(products);
  showProducts(products);

  document
    .querySelector("#products article lastchild")
    .addEventListener("click", addToBasket);
}

async function getData() {
  const response = await fetch("products.json");
  const data = await response.json();
  return data;
}

function showProducts(list) {
  list.forEach(showProduct);
}

function showProduct(product) {
  const html = /*html*/ `
  <article> 
    <h3>${product.name}</h3>
    <p>vægt: ${product.weight} g</p>
    <p>pris: ${product.price},-</p>
    <button>Læg i kurv</button>
  </article>
`;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
}

function addToBasket(name, weight, price) {
  const itemToAdd = {
    name: name,
    weight: weight,
    price: price,
  };
  console.log("clicked");
  basket.push(itemToAdd);
}

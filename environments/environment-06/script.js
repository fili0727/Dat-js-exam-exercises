"use strict";

window.addEventListener("load", start);

// 1. Indlæs JSON-filen `products.json` og vis listen af produkter på siden. Brug den udkommenterede HTML-kode som skabelon.
let products = [];
async function start() {
  products = await getData("products.json");

  products.forEach(showProducts);
}

async function getData() {
  const data = await fetch("products.json");
  const response = data.json();
  return response;
}

function showProducts(products) {
  const html =
    /*HTML*/
    `<article>
               <h3>${products.name}</h3>
               <p>vægt: ${products.weight} g</p>
               <p>pris: ${products.price},-</p>
               <button>Læg i kurv</button>
            </article>`;
  document.querySelector("#products").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#products article:last-child button")
    .addEventListener("click", () => addToBasketClicked(products));
}

// 2. Lav en global liste `basket`, og en funktion der tilføjer et produkt til den liste når der trykkes på "Læg i kurv"-knappen
let basket = [];
let amount = 0;

function addToBasketClicked(products) {
  console.log(products);
  addToBasket(products);
  console.log(basket);
}

// 3. Vis indholdet af kurven på siden (opdatér når der bliver tilføjet et produkt)

function showProduct(obj) {
  console.log(obj);
  const html =
    /*HTML*/
    `<tr>
              <td>
                <button class="remove">-</button>
                  ${obj.antal}
                <button class="add">+</button>
              </td>
              <td>${obj.product.name}</td>
              <td> ${obj.product.price},-</td>
              <td>${obj.product.price * obj.antal},-</td>
            </tr>`;

  document.querySelector("tbody").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#basket tbody tr:last-child button.remove")
    .addEventListener("click", () => removeFromBasket(obj.product));
  document
    .querySelector("#basket tbody tr:last-child button.add")
    .addEventListener("click", () => addToBasket(obj.product));
}

function addToBasket(product) {
  const findes = basket.find(obj => obj.product === product);

  if (findes) {
    findes.antal++;
  } else {
    const obj = {
      product: product,
      antal: 1,
    };
    basket.push(obj);
  }
  document.querySelector("tbody").innerHTML = "";
  basket.forEach(showProduct);
}

function removeFromBasket(product) {
  const findes = basket.find(obj => obj.product === product);
  if (findes) {
    findes.antal--;
  }
  if (findes.antal === 0) {
    const currentProduct = basket.indexOf(findes);
    basket.splice(currentProduct, 1);
  }
  document.querySelector("tbody").innerHTML = "";
  basket.forEach(showProduct);
}

function showBasketsTotals() {
  const totalProducts = basket.length;
  document.querySelector("#total-products").textContent = totalProducts;

  let totalInBasket = 0;
  for (const productInBasket of basket) {
    totalInBasket += productInBasket.count;
  }
  document.querySelector("#total-in-basket").textContent = totalInBasket;

  let totalPrice = 0;
  let totalWeight = 0;

  for (const productInBasket of basket) {
    totalPrice += productInBasket.product.price * productInBasket.count;
    totalWeight += productInBasket.product.weight * productInBasket.counts;
  }
  document.querySelector("#total-price").textContent = totalPrice;
  document.querySelector("#total-weight").textContent = totalWeight;

  if (totalWeight < 2000) {
  }
}
// 2. Lav en funktion `addToBasket` der modtager et produkt,
// og putter et objekt i kurven bestående af det produkt og et antal (1).
// Hvis et produktet allerede er i kurven skal der ikke tilføjes et nyt objekt,
//men antallet skal tælles op.
// 3. Lav en funktion `removeFromBasket` der modtager et produkt,
//og hvis det allerede er i kurven skal der trækkes en fra dets antal -
//hvis antallet ender på 0, skal objektet fjernes fra kurven.

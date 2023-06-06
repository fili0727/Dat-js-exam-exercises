"use strict";

window.addEventListener("load", start);
// 1. Lav en funktion der indlæser JSON-filen `users.json` og gemmer
//listen i en variabel.
async function start() {
  const users = await getData();
  console.log(users);
  showUsers(users);
}

async function getData() {
  const response = await fetch("users.json");
  const data = response.json();
  return data;
}

// 2. Lav en funktion der viser listen på websiden -
//hver user skal vises med navn og hvorvidt de er aktive eller ej.

function showUsers(list) {
  filterByAdmin(list).forEach(showUser);
  // list.forEach(showUser);
}

function showUser(user) {
  const html = /*HTML*/ `
  <li>${user.name}, ${user.active}</li>
  `;
  document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
}

// 3. Filtrér listen så den kun viser admin-brugere.

function filterByAdmin(list) {
  return list.filter(a => a.role === "admin");
}

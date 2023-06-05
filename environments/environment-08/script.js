"use strict";

window.addEventListener("load", start);

let playlist;
async function start() {
  playlist = await getData();
  showPlaylist();
}

async function getData() {
  const response = await fetch("playlist.json");
  const data = response.json();
  return data;
}

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";
  playlist.forEach(showSong);
}
function showSong(song, id) {
  console.log(id);
  const html = /*HTML*/ `
  <li>${song.artist}: ${song.title} (${song.duration}) <button>-</button></li>
  `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
  document
    .querySelector("#songlist li:last-child button")
    .addEventListener("click", () => removeSong(id));
}

function removeSong(id) {
  console.log(id);
  playlist.splice(id, 1);
  showPlaylist();
}
// 1. Lav en funktion der indlæser JSON-filen `playlist.json` og gemmer listen i en variabel.
// 2. Lav en funktion til at udskrive listen af sange på websiden- tilføj en `remove`-knap til hver sang.
// 3. Få remove-knappen til at fjerne den pågældende sang fra listen, og udskriv listen igen.

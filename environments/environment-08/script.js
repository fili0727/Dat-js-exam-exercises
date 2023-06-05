"use strict";

const playlist = [
  { artist: "Taylor Swift", title: "Blank space", duration: "4:33" },
  { artist: "Beastie Boys", title: "Sabotage", duration: "3:02" },
  { artist: "Skrillex", title: "Bangarang", duration: "3:35" },
  { artist: "Coldplay", title: "Yellow", duration: "4:27" },
  { artist: "Metallica", title: "Enter Sandman", duration: "5:32" },
];
// 1. Lav en liste over sange, og lav en funktion til at tilføje et
//sang-objekt med `artist`, `title` og `duration` fra formularen på websiden.
window.addEventListener("load", start);

function start() {
  showPlaylist();

  document
    .querySelector("#add-song-form")
    .addEventListener("submit", submitClicked);
  document
    .querySelector("#sort-songs-form")
    .addEventListener("change", sortPlaylist);
}

function addSong(artist, title, duration) {
  const newSong = { artist: artist, title: title, duration: duration };
  playlist.push(newSong);
}
function submitClicked(event) {
  event.preventDefault();
  const form = event.target;
  const artist = form.name.value;
  const title = form.title.value;
  const duration = form.duration.value;
  form.reset();
  addSong(artist, title, duration);
  showPlaylist();
}
// 2. Lav en funktion til at udskrive listen af sange på websiden.

function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";
  playlist.forEach(showSong);
}

function showSong(song) {
  const html = /*HTML*/ `
  <li>${song.artist}: ${song.title} (${song.duration})</li> 
  `;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);
}
// 3. Sortér listen alfabetisk efter `artist` eller `title` alt efter hvad
//der bliver valgt på websiden.

// function sortByArtist() {
//   playlist.sort((a, b) => a.artist.localeCompare(b.artist));
// }
function sortPlaylist(event) {
  const sortMode = event.target.value;
  playlist.sort((a, b) => a[sortMode].localeCompare(b[sortMode]));
  showPlaylist();
}

// function sortByTitle() {
//   playlist.sort((a, b) => a.title.localeCompare(b.title));
// }

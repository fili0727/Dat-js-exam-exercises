"use strict";

// 1. Opret en liste af sang-objekter, hvor hver sang indeholder `artist`,
//`title` og `duration` (i form af minutter:sekunder, fx 3:21)
const playlist = [
  { artist: "Taylor Swift", title: "Blank space", duration: "4:33" },
  { artist: "Beastie Boys", title: "Sabotage", duration: "3:02" },
  { artist: "Skrillex", title: "Bangarang", duration: "3:35" },
  { artist: "Coldplay", title: "Yellow", duration: "4:27" },
  { artist: "Metallica", title: "Enter Sandman", duration: "5:32" },
];

window.addEventListener("load", start);

function start() {
  showPlaylist();
}
// 2. Lav en funktion til at udskrive listen af sange på websiden -
//tilføj en `upvote`-knap til hver sang.
function showPlaylist() {
  document.querySelector("#songlist").innerHTML = "";

  playlist.forEach(showSong);
}

function showSong(song, id) {
  const html = /*HTML*/ `
<li>${song.artist}: ${song.title} (${song.duration}) <button>^</button></li>
`;
  document.querySelector("#songlist").insertAdjacentHTML("beforeend", html);

  document
    .querySelector("#songlist li:last-child button")
    .addEventListener("click", () => upvoteClicked(song, id));
}

// 3. Få `upvote`-knappen til flytte den pågældende sang én tak op i listen
//- udskriv derefter listen igen.

function upvoteClicked(song, id) {
  if (id != 0) {
    playlist.splice(id, 1);
    playlist.splice(id - 1, 0, song);
    showPlaylist();
  }
}

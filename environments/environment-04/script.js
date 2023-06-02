"use strict";

import { teachers } from "./teachers.js";

// 1. Importer `teachers`-listen i `script.js`.
window.addEventListener("load", start);

function start() {
  showTeachers(teachers);
}

function showTeachers() {
  console.log(teachers);
  sortBy(["email"]);
  teachers.forEach(showTeacher);
}

function showTeacher(teacher) {
  const HTML = /*HTML*/ `
  <li>${teacher.name}, ${teacher.email}</li>
  `;
  document
    .querySelector("#teachers-list")
    .insertAdjacentHTML("beforeend", HTML);
}
// 2. Lav en funktion i `script.js`, der viser listen af alle `teacher`-objekter på websiden.
// 3. Lav en funktion der kan sortere listen efter `name` og en anden funktion, der kan sortere listen efter `email`.
function sortBy(mode) {
  teachers.sort((a, b) => a[mode].localeCompare(b[mode]));
}

function sortByEmail() {
  teachers.sort((a, b) => b.email.localeCompare(a.email));
}

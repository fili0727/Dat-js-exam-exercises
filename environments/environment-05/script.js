"use strict";

import { courses } from "./courses.js";
// 1. Importér `courses`-listen i `script.js`.
window.addEventListener("load", start);

function start() {
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", selected);
  showCourses();
}
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden.
//Vis som minimum `name` og `ectsPoints`.
function showCourses() {
  console.log(courses);
  document.querySelector("#courses-list").innerHTML = "";
  courses.forEach(showCourse);
}

function showCourse(course) {
  const HTML = /*HTML*/ `
  <li>${course.name}, ${course.ectsPoints}</li>
  `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", HTML);
}
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`).
//Filtreringen ændrer sig hver gang en ny `option` vælges.

function selected(event) {
  console.log(event.target.value);
  if (event.target.value == 5) {
    courses.filter(a => a.ectsPoints == 5);
  } else if (event.target.value == "10") {
    courses.filter(a => a.ectsPoints == 10);
  } else if (event.target.value == 15) {
    courses.filter(a => a.ectsPoints == 15);
  } else if (event.target.value == 20) {
    courses.filter(a => a.ectsPoints == 20);
  }
  showCourses();
}

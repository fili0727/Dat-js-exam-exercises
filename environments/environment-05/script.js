"use strict";

import { courses } from "./courses.js";

// 1. Importér `courses`-listen i `script.js`.
window.addEventListener("load", start);

function start() {
  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", pointsSelected);
  showCourses(courses);
}
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden.
//Vis som minimum `name` og `ectsPoints`.
function showCourses(list) {
  document.querySelector("#courses-list").innerHTML = "";
  list.forEach(showCourse);
}

function showCourse(course) {
  const HTML = /*HTML*/ `
  <li>${course.name}, ${course.ectsPoints}</li>
  `;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", HTML);
}
// 3. Lav en funktion, der filtrer listen af `courses` på baggrund af valgte `option` i `select` (se `environment-05`).
//Filtreringen ændrer sig hver gang en ny `option` vælges.

function pointsSelected(event) {
  showCourses(filterByPoints(courses, Number(event.target.value)));
}
function filterByPoints(list, points) {
  return list.filter(a => a.ectsPoints === points);
}

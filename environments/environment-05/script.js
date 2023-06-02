"use strict";

import { courses } from "./courses.js";
// 1. Importer `courses`-listen i `script.js`.

window.addEventListener("load", start);

function start() {
  showCourses();
}
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.
function showCourses() {
  sortByPoints();
  courses.forEach(showCourse);
}

function showCourse(course) {
  const html = /*HTML*/ `
  <li>${course.name},${course.ectsPoints},${course.teacher} </li>
  `;

  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}
// 3. Lav en funktion, der sorterer listen af `courses` efter stigende antal ECTS. Vis den sorterde liste på websiden.
function sortByPoints() {
  courses.sort((a, b) => a.ectsPoints - b.ectsPoints);
}

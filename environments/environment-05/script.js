"use strict";

import { courses } from "./courses.js";
// 1. Importer `courses`-listen i `script.js`.
window.addEventListener("load", start);

function start() {
  addCourse("programmering", "2023-02-01", "2023-04-04", 30, 40, "peter lind");
  showCourses();
}

function showCourses() {
  document.querySelector("#courses-list").innerHTML = "";
  courses.forEach(showCourse);
}

function showCourse(course) {
  const HTML = /*HTML*/ `
<li>${course.name}, ${course.ectsPoints}, ${course.teacher}</li>
`;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", HTML);
}
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden. Vis som minimum `name`, `ectsPoints` og `teacher`.

function addCourse(name, startDate, endDate, ectsPoints, maxStudents, teacher) {
  const newCourse = {
    name,
    startDate,
    endDate,
    ectsPoints,
    maxStudents,
    teacher,
  };
  courses.push(newCourse);
  showCourses();
}
// 3. Lav en funktion der tilføjer et nyt `course`-objekt til listen. Sørg for at nye `course`-objekter vises på websiden.

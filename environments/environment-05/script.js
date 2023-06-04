"use strict";

// 1. Importér `courses`-listen i `script.js`.
import { courses } from "./courses.js";
// 2. Lav en funktion, der viser listen af alle `course`-objekter på websiden.
//Vis som minimum `name`, `startDate` `ectsPoints`.
window.addEventListener("load", start);

function start() {
  showCourses(courses);
}

function showCourses(list) {
  console.log(list);
  document.querySelector("#courses-list").innerHTML = "";
  sortByStartDate(list);
  list.forEach(showCourse);
}

function showCourse(course) {
  const html = /*HTML*/ ` 
<li>${course.name}, ${course.ectsPoints}, ${course.startDate}</li>
`;
  document.querySelector("#courses-list").insertAdjacentHTML("beforeend", html);
}
// 3. Lav en funktion, der sorterer listen af `courses` stigende efter `startDate`.
//Vis sorteringen på websiden.
function sortByStartDate(list) {
  list.sort((a, b) => a.startDate.localeCompare(b.startDate));
  return list;
}

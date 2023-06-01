"use strict";

import { teachers } from "./teachers.js";

window.addEventListener("load", start);
// 1. Importer `teachers`-listen i `script.js`.
function start() {
  addTeacher("Peter", "petl@kea.dk");
  teachers.forEach(displayTeachers);
}
// 2. Lav en funktion, der viser listen af alle `teacher`-objekter på websiden.

function displayTeachers(teacher) {
  const HTML = /*HTML*/ `
 <li>Name: ${teacher.name}, Email: ${teacher.email}</li> `;
  document
    .querySelector("#teachers-list")
    .insertAdjacentHTML("beforeend", HTML);
}
// 3. Lav en funktion der tilføjer et nyt `teacher`-objekt til listen.
//Sørg for at nye `teacher`-objekter vises på websiden.
function addTeacher(name, email) {
  const newTeacher = {
    name: name,
    email: email,
  };
  teachers.push(newTeacher);
}

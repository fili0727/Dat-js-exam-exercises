"use strict";

window.addEventListener("load", start);
const students = [];
function start() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", submitClicked);
  showStudents(students);
}

// 1. Lav en funktion der opretter et `student` objekt med `name`, `email`
// og `age`, fra formularen på websiden og tilføjer det til en liste.
function addStudent(name, email, age) {
  const newStudent = { name: name, email: email, age: age };

  students.push(newStudent);
  console.log(students);
  showStudents(students);
}

function submitClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;
  form.reset();
  addStudent(name, email, age);
}

function showStudents(list) {
  sortByAge();
  document.querySelector("#students-table-body").innerHTML = "";
  console.log(list);
  list.forEach(showStudent);
}

function showStudent(student) {
  const html = /*HTML*/ `
  <tr>
    <td>${student.name}</td>
    <td>${student.email}</td>
    <td>${student.age}</td>
  </tr>
  `;
  document
    .querySelector("#students-table-body")
    .insertAdjacentHTML("beforeend", html);
}

// 2. Udskriv listen til websiden hver gang der bliver tilføjet en ny student.
// 3. Sortér listen efter `age` så de yngste vises først.
function sortByAge() {
  students.sort((a, b) => a.age - b.age);
}

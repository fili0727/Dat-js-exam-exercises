"use strict";

const students = [];
// 1. Lav en funktion der opretter et `student` objekt med `name`, `email`
// og `age`, fra formularen på websiden og tilføjer det til en liste.
window.addEventListener("load", start);

function start() {
  document
    .querySelector("#create-student-form")
    .addEventListener("submit", submitClicked);
}

function addStudent(name, email, age) {
  const newStudent = {
    name: name,
    email: email,
    age: age,
  };
  students.push(newStudent);
  console.log(students);
}
function submitClicked(event) {
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const age = form.age.value;

  addStudent(name, email, age);
  showStudents(filterAge);
}

function showStudents() {
  document.querySelector("#students-table-body").innerHTML = "";
  sortByName();
  filterAge(students).forEach(showStudent);
}
// 2. Lav en anden funktion til at vise listen på websiden,
//men undlad eventuelle students der er under 18 år.
function showStudent(student) {
  // for (const student of students) {
  // if (student.age > 18) {
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
  //   } else {
  //     console.log("under 18");
  //   }
}

function filterAge() {
  return students.filter(a => a.age > 18);
}
// 3. Sortér listen alfabetisk efter `name`.
function sortByName() {
  students.sort((a, b) => a.name.localeCompare(b.name));
}

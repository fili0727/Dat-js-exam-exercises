"use strict";

window.addEventListener("load", initApp);

function initApp() {
  clicked();
  hideText();
}

function clicked() {
  document.querySelector("#btn-knap").addEventListener("click", function () {
    console.log("Det virker");
    document.querySelector("#result_failure").classList.add("hide");
    // document.querySelector("#result_success").classList.remove("hide");
    document.querySelector("#result_success").classList.add("show");
  });
}
function hideText() {
  document.querySelector("#result_success").classList.add("hide");
  document.querySelector("#result_failure").classList.add("hide");
}
// 1. Lav en funktion `clicked`, der udskriver "Det virker" i konsollen, når man trykker på knappen på HTML-siden.
// 2. Udvid funktionen så den skjuler teksten `#result_failure` og viser teksten `#result_success` ved hjælp af klasserne `hide` og `show`.
// 3. Tilføj en funktion der automatisk skjuler begge tekster så snart siden loades - sørg for at knappen stadig virker og viser den rette tekst.

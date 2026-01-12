window.addEventListener("DOMContentLoaded", () => {
  let plateau = ["", "", "", "", "", "", "", "", ""];
  let joueurActuel = "X";
  let jeuActif = true;

  const combinaisonsGagnantes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Lignes
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Colonnes
    [0, 4, 8],
    [2, 4, 6], // Diagonales
  ];

  const cases = document.querySelectorAll("#game-board > div");
  const boutonReset = document.getElementById("reset");

  function gererClic(event) {
    const caseCliquee = event.target;
    const indexCase = parseInt(caseCliquee.id.split("-")[1]);

    if (plateau[indexCase] || !jeuActif) {
      return;
    }

    plateau[indexCase] = joueurActuel;
    caseCliquee.textContent = joueurActuel;
  }

  
});

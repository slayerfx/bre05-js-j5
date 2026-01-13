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

    if (plateau[indexCase] !== "" || !jeuActif) {
      return;
    }

    plateau[indexCase] = joueurActuel;
    caseCliquee.textContent = joueurActuel;
    verifierResultat();
  }

  function verifierResultat() {
    let victoire = false;

    for (let i = 0; i < combinaisonsGagnantes.length; i++) {
      const combinaison = combinaisonsGagnantes[i];
      const a = combinaison[0];
      const b = combinaison[1];
      const c = combinaison[2];

      if (
        plateau[a] !== "" &&
        plateau[a] === plateau[b] &&
        plateau[a] === plateau[c]
      ) {
        victoire = true;
        break;
      }
    }

    if (victoire) {
      alert(`le joueur ${joueurActuel} a gagné`);
      jeuActif = false;
      return;
    }

    let matchNul = true;
    for (let i = 0; i < plateau.length; i++) {
      if (plateau[i] === "") {
        matchNul = false;
        break;
      }
    }

    if (matchNul) {
      alert("Match nul");
      jeuActif = false;
      return;
    }

    if (joueurActuel === "X") {
      joueurActuel = "O";
    } else {
      joueurActuel = "X";
    }
  }

  function reinitialiserJeu() {
    plateau = ["", "", "", "", "", "", "", "", ""];
    joueurActuel = "X";
    jeuActif = true;

    for (let i = 0; i < cases.length; i++) {
      cases[i].textContent = "";
    }
  }

  // Ajouter les écouteurs d'événements (une seule fois au chargement)
  for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", gererClic);
  }

  boutonReset.addEventListener("click", reinitialiserJeu);
});

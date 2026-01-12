window.addEventListener("DOMContentLoaded", () => {
  let todos = [
    "Rappeler l'école",
    "Faire les courses",
    "Récupérer le colis à la Poste",
    "Faire la litière du chat",
    "Ranger le bureau",
  ];

  let ul = document.createElement("ul");

  for (let todo of todos) {
    let li = document.createElement("li");
    li.textContent = todo;

    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
    });

    ul.append(li);
  }

  document.body.append(ul);
});

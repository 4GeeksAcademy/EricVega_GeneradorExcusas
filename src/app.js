/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  // Elemento donde se mostrará la excusa
  const excuseElement = document.getElementById("excuse");
  const button = document.getElementById("generateExcuse");

  // Listas para generar excusas en castellano
  const who = ["El perro", "Mi abuela", "El cartero", "Mi loro"];
  const action = ["se comió", "meó en", "rompió", "aplastó"];
  const what = ["mis deberes", "mi teléfono", "el coche"];
  const when = [
    "antes de la clase",
    "mientras dormía",
    "mientras hacía ejercicio",
    "durante el almuerzo",
    "mientras rezaba"
  ];

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }

  // Establece una excusa inicial al cargar la página
  excuseElement.innerHTML = generateExcuse();

  // Genera una nueva excusa al hacer clic en el botón
  button.addEventListener("click", () => {
    excuseElement.innerHTML = generateExcuse();
  });
};

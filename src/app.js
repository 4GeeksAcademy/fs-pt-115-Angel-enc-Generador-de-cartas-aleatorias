import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//Carga la carta al cargar la página. 
window.onload = function () {
  //write your code here

  //1. Lista de los palos.
  const palos = [
    { Simbolo: "♦", color: "red" },
    { Simbolo: "♥", color: "red" },
    { Simbolo: "♠", color: "black" },
    { Simbolo: "♣", color: "black" }
  ];

  //2.Lista de los valores.
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  //3.Aqui para seleccionar los elementos HTML.
  const valorItem = document.getElementById("valor");
  const izquierda = document.getElementById("izquierda");
  const derecha = document.getElementById("derecha");

  //4.Aqui genera una carta aleatoria:elige un valor y un palo aleatorio.
  function newCard() {
    const valorChange = valores[Math.floor(Math.random() * valores.length)];
    const paloChange = palos[Math.floor(Math.random() * palos.length)];

    //5.Aqui mete el palo y el valor dentro del HTML.
    valorItem.textContent = valorChange;
    izquierda.textContent = paloChange.Simbolo;
    derecha.textContent = paloChange.Simbolo;

    valorItem.style.color = paloChange.color;
    izquierda.style.color = paloChange.color;
    derecha.style.color = paloChange.color;
  }
  // Generar carta cada 10 segundos.
  setInterval(newCard, 10000);


  
  newCard();
  //6.Genera la carta al pulsar el boton(.addEventListener()=>escucha el "click")
  document.getElementById("newCardBtn").addEventListener("click", newCard);
};

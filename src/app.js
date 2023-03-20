/* eslint-disable */
import "bootstrap";
import "./style.css";

function Numero() {
  let ArrNum = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomNum = Math.floor(Math.random() * 14);
  return ArrNum[randomNum];
}

function crearPinta() {
  let ArrPinta = ["♥", "♠", "♦", "♣"];
  let randomPinta = Math.floor(Math.random() * 4);
  if (ArrPinta[randomPinta] === "♥" || ArrPinta[randomPinta] === "♦") {
    document.querySelector("#header-card").style.color = "red";
    document.querySelector("#footer-card").style.color = "red";
  }

  return ArrPinta[randomPinta];
}

window.onload = function generar() {
  document.querySelector("#center-card").innerHTML = Numero();
  const pinta = crearPinta();
  if (pinta === "♥" || pinta === "♦") {
    document.querySelector("#center-card").style.color = "red";
  } else {
    document.querySelector("#center-card").style.color = "black";
    document.querySelector("#footer-card").style.color = "black";
    document.querySelector("#header-card").style.color = "black";
  }
  document.querySelector("#header-card").innerHTML = pinta;
  document.querySelector("#footer-card").innerHTML = pinta;
  document.querySelector("button").addEventListener("click", generar);
};

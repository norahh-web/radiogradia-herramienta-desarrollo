import { mostrarMensaje, alternarInfo } from "./interfaz.js";

const btnMensaje = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");
const btnInfo = document.querySelector("#btn-info");
const infoExtra = document.querySelector("#info-extra");

btnMensaje.addEventListener("click", function () {
    mostrarMensaje(mensaje, "Has pulsado el botón");
});

btnMensaje.addEventListener("click", function () {
    console.log("botón pulsado");
});

btnInfo.addEventListener("click", function () {
    alternarInfo(btnInfo, infoExtra);
});
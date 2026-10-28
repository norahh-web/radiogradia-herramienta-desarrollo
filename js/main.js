import { caracteristicasBoot } from "./datos.js";
import { mostrarMensaje, alternarInfo, pintarLista } from "./interfaz.js";

const btnMensaje = document.querySelector("#btn-mensaje");
const mensaje = document.querySelector("#mensaje");
const btnInfo = document.querySelector("#btn-info");
const infoExtra = document.querySelector("#info-extra");
// para la Fase C:
const lista = document.querySelector("#lista");
// para la fase D
const buscador = document.querySelector("#buscador");
const sinResultados = document.querySelector("#sin-resultados");

btnMensaje.addEventListener("click", function () {
    mostrarMensaje(mensaje, "Has pulsado el botón");
});

btnMensaje.addEventListener("click", function () {
    console.log("botón pulsado");
});

btnInfo.addEventListener("click", function () {
    alternarInfo(btnInfo, infoExtra);
});

pintarLista(lista, caracteristicasBoot);

buscador.addEventListener("input", function() {
    const texto = buscador.value.toLowerCase();
    const filtradas = caracteristicasBoot.filter(function (c) {
        return c.nombre.toLowerCase().includes(texto) || c.descripcion.toLowerCase().includes(texto) ||
    c.categoria.toLowerCase().includes(texto);
    });
    pintarLista(lista, filtradas);
    if (filtradas.length === 0) {
        sinResultados.classList.remove("oculto");
    } else {
        sinResultados.classList.add("oculto");
    }
});
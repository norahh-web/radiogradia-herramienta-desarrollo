export function mostrarMensaje(elemento, texto) {
    elemento.textContent = texto;
}

export function alternarInfo(boton, panel) {
    panel.classList.toggle("oculto");
    const abierto = !panel.classList.contains("oculto");
    boton.setAttribute("aria-expanded", abierto);
    if (abierto) {
        boton.textContent = "Ocultar información";
    } else {
        boton.textContent = "Mostrar información";
    }
}
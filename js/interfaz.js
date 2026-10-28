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

export function pintarLista(contenedor, lista) {
    contenedor.textContent = "";
    lista.forEach(function (c) {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta");

        const titulo = document.createElement("h3");
        titulo.textContent = c.nombre;

        const categoria = document.createElement("p");
        categoria.textContent = c.categoria;
        categoria.classList.add("categoria");

        const descripcion = document.createElement("p");
        descripcion.textContent=c.descripcion;

        tarjeta.append(titulo, categoria, descripcion);
        contenedor.append(tarjeta);
    }
    )
}
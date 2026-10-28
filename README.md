# Radiografía de Bootstrap

Página informativa sobre Bootstrap, el framework de CSS y JavaScript para maquetar páginas web responsive. Práctica del Tema 5 de Desarrollo Web en Entorno Cliente.

## Cómo ejecutarla

Los módulos de JavaScript no cargan si abres `index.html` directamente, hay que usar un servidor local.
  - En VS Code: instala la extensión Live Server, haz clic derecho en `index.html` y elige "Open with Live Server".

## Funcionalidades añadidas

- **Botón con dos manejadores:** al pulsar "Pulsa aquí" se escribe un mensaje visible en la página (`textContent`) y otro en la consola, ambos con `addEventListener("click", ...)`.
- **Mostrar y ocultar información:** un botón alterna la sección "Más información" con `classList.toggle` y mantiene sincronizado `aria-expanded` y el texto del botón.
- **Características generadas con JavaScript:** las tarjetas se crean a partir de un array de objetos con `createElement`, `textContent` y `append`.
- **Búsqueda interactiva:** el campo de búsqueda filtra las características mientras se escribe, por nombre, descripción o categoría, y muestra un mensaje si no hay coincidencias.
    (El enunciado no pedía la búsqueda por categoría, pero lo he añadido porque al final solo es añadir una línea de código más)

## Estructura

    index.html
    css/estilos.css
    js/main.js
    js/datos.js
    js/interfaz.js
    README.md
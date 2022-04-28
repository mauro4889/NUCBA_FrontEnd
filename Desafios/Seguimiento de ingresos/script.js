const descripcion = document.getElementById('description');
const monto = document.getElementById('monto');
const selection = document.getElementById("menu");
const aceptar = document.getElementById('btn-aceptar');
const mostar = document.getElementsByClassName('muestra')

aceptar.addEventListener('click', () => {
    let contenido_selection = document.createTextNode(selection.value);
    let contenido_descriptcion = document.createTextNode(descripcion.innerText);
    let contenido_monto = document.createTextNode(monto.innerText);
    mostar.appendChild(contenido_selection);
    mostar.appendChild(contenido_descriptcion);
    mostar.appendChild(contenido_monto);
})
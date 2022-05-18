const descripcion = document.getElementById('descripcion');
const importe = document.getElementById('importe');
const tipo = document.getElementById("menu");
const aceptar = document.getElementById('btn-aceptar');
const importeTotal = document.getElementById('td-total');
const row = document.getElementById('row');
let total = 0;


window.onload = function() {
    localStorage.getItem('descipcion');
    localStorage.getItem('tipo');
    localStorage.getItem('importe');
    console.log(`${descripcion}${tipo}${importe}`)
}



const agregarLocalStorage = () => {

    localStorage.setItem('descripcion', descripcion.value);
    localStorage.setItem('tipo', tipo.value);
    localStorage.setItem('importe', importe.value);
}

aceptar.addEventListener('click', () => {
    const nuevoTdDescripcion = document.createElement('td');
    const nuevoTdTipo = document.createElement('td');
    const nuevoTdImporte = document.createElement('td');
    const textDescripcion = document.createTextNode(descripcion.value)
    const textTipo = document.createTextNode(tipo.value)
    const textImporte = document.createTextNode(importe.value)
    nuevoTdDescripcion.appendChild(textDescripcion)
    nuevoTdTipo.appendChild(textTipo);
    nuevoTdImporte.appendChild(textImporte);
    row.appendChild(nuevoTdDescripcion);
    row.appendChild(nuevoTdTipo);
    row.appendChild(nuevoTdImporte);
    if (tipo.value == 'ingreso') {
        nuevoTdDescripcion.classList.add('fondo-ingreso');
        nuevoTdImporte.classList.add('fondo-ingreso');
        nuevoTdTipo.classList.add('fondo-ingreso');
        total += Number(importe.value);
    } else {
        nuevoTdDescripcion.classList.add('fondo-egreso');
        nuevoTdImporte.classList.add('fondo-egreso');
        nuevoTdTipo.classList.add('fondo-egreso');
        total -= Number(importe.value);
    }
    const value = document.createTextNode(`$${total}`);
    importeTotal.removeChild(importeTotal.firstChild);
    importeTotal.appendChild(value);
    agregarLocalStorage();
})
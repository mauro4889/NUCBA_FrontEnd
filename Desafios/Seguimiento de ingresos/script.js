const descripcion = document.getElementById('descripcion');
const importe = document.getElementById('importe');
const tipo = document.getElementById("menu");
const aceptar = document.getElementById('btn-aceptar');
const tdDescripcion = document.getElementById('td-descripcion');
const tdTipo = document.getElementById('td-tipo');
const tdImporte = document.getElementById('td-importe');
const importeTotal = document.getElementById('td-total');
let total;


aceptar.addEventListener('click', () => {
    if (tipo.value == 'ingreso' || tipo.value == 'egreso') {
        const nuevoTdDescripcion = document.createElement('td');
        const nuevoTdTipo = document.createElement('td');
        const nuevoTdImporte = document.createElement('td');
        const textDescripcion = document.createTextNode(descripcion.value)
        const textTipo = document.createTextNode(tipo.value)
        const textImporte = document.createTextNode(importe.value)
        nuevoTdDescripcion.appendChild(textDescripcion)
        nuevoTdTipo.appendChild(textTipo);
        nuevoTdImporte.appendChild(textImporte);
        tdDescripcion.appendChild(nuevoTdDescripcion);
        tdTipo.appendChild(nuevoTdTipo);
        tdImporte.appendChild(nuevoTdImporte);
        if (tipo.value == 'ingreso') {
            tdDescripcion.classList.add('fondo-ingreso')
            tdTipo.classList.add('fondo-ingreso')
            tdImporte.classList.add('fondo-ingreso')
            total += Number(importe.value);
            importeTotal.innerText = `$${total}`;
        } else {
            tdDescripcion.classList.add('fondo-egreso')
            tdTipo.classList.add('fondo-egreso')
            tdImporte.classList.add('fondo-egreso')
            total -= Number(importe.value);
            importeTotal.innerText = `$${total}`;
        }
    }
})
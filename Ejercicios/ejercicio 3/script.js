const Pizza = [{
        ID: 1,
        nombre: 'Muzzarella',
        ingradientes: ["Muzzarella", "Salsa de tomate", "Aceituna", "Oregano"],
        precio: 540,
    },
    {
        ID: 2,
        nombre: 'Napolitana',
        ingradientes: ["Muzzarella", "Salsa de tomate", "Tomate", "Jamon"],
        precio: 580,
    },
    {
        ID: 3,
        nombre: 'Calabresa',
        ingradientes: ["Muzzarella", "Longaniza", "Provolone", "Aceituna"],
        precio: 600,
    },
    {
        ID: 4,
        nombre: '4 Queso',
        ingradientes: ["Muzzarella", "Roquefort", "Parmesano", "Gruyer"],
        precio: 620,
    },
    {
        ID: 5,
        nombre: 'Panceta',
        ingradientes: ["Muzzarella", "Panceta", "Huevo frito", "Aceituna"],
        precio: 670,
    },
    {
        ID: 6,
        nombre: 'Jamon crudo',
        ingradientes: ["Muzzarella", "Jamon crudo", "Aceituna negras", "Rucula"],
        precio: 700,
    }
]


let boton = document.getElementById('submit')
let nombrePizza = document.getElementById('nombrePizza');
let precioPizza = document.getElementById('precioPizza');
let numero = document.getElementById('valor')

const limpiarTexto = () => {
    while (nombrePizza.firstChild && precioPizza.firstChild) {
        nombrePizza.removeChild(nombrePizza.firstChild);
        precioPizza.removeChild(precioPizza.firstChild);
    }
}

boton.addEventListener('click', (e) => {
    let pizzaSeleccion = numero.value;

    limpiarTexto();

    let encontrado = Pizza.find(e => e.ID == pizzaSeleccion)

    if (encontrado != undefined) {
        let textoNombre = document.createTextNode(encontrado.nombre);
        let textoPrecio = document.createTextNode(encontrado.precio);
        nombrePizza.appendChild(textoNombre);
        precioPizza.appendChild(textoPrecio);
    } else {
        alert('No se encontro la Pizza')
    }



})
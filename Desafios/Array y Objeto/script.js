let dias = "lunes, martes, miércoles, jueves, viernes";

console.log(`La longitud del string es: ${dias.length}`);
console.log(dias.toUpperCase());
console.log(dias.replaceAll(",", "-"));

let semana = dias.split(",");
console.log(semana);

const mes1 = ["enero", "febrero", "marzo", "abril", "mayo", "junio"];
const mes2 = ["agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const año = mes1.concat(mes2);
console.log(año);
console.log(mes1.slice(1, 4));

let mayor = [];

for (let i = 0; i < mes1.length; i++) {
    if (mes1[i].length > 4) {
        mayor.push(mes1[i]);
    }
}

console.log(`Los meses con mas de 4 caracteres son: ${mayor}`);

let arrZapatillas = [];

class Zapatillas {
    constructor(Marca, color, talle) {
        this.Marca = Marca,
            this.color = color,
            this.talle = talle
    }
}

const Nike = new Zapatillas('Nike', 'blanca', 41);
const Reebok = new Zapatillas('Reebok', 'negras', 40);
const Puma = new Zapatillas('Puma', 'rojas', 42);
const NewBalance = new Zapatillas('New Balance', 'azul', 39);
const Adidas = new Zapatillas('Adidas', 'verde', 43);

arrZapatillas.push(Nike);
arrZapatillas.push(Reebok);
console.log(arrZapatillas);
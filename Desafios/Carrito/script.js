class Carrito {
    constructor(importeTotal, usuario) {
        this.productos = [];
        this.importeTotal = importeTotal;
        this.usuario = usuario;
    }
    agregar = (producto) => {
        this.productos.push(producto);
        this.importeTotal = this.importeTotal + producto.Precio;
    }
    quitar = (producto) => {
        let i = this.productos.indexOf(producto);
        if (i !== -1) {
            this.productos.splice(i, 1);
            this.importeTotal = this.importeTotal - producto.Precio;
        }
    }
}
class Producto {
    constructor(Precio, Nombre, id) {
        this.Precio = Precio;
        this.Nombre = Nombre;
        this.ID = id;
    }
}

const Carrito1 = new Carrito(0, "Mauro");

const Producto1 = new Producto(100, 'Mayonesa', 1);
const Producto2 = new Producto(90, 'Tomate', 4);
const Producto3 = new Producto(80, 'Arrroz', 5);

Carrito1.agregar(Producto1);
Carrito1.agregar(Producto2);
Carrito1.agregar(Producto3);
Carrito1.quitar(Producto1);
console.log(Carrito1)
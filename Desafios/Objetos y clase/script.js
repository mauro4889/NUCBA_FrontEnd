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

const tuZapatilla = (marca) => {
    console.log(`La marca que elegiste es: "${marca.Marca}". El color es "${marca.color}" y es talle "${marca.talle}"`)
}
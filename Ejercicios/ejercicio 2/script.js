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


for (const sabor of Pizza) {
    if (sabor.ID % 2 != 0) {
        console.log(`La pizza con un ID impar es: ${sabor.nombre}`);
    }
}
for (const menor of Pizza) {
    if (menor.precio < 600) {
        console.log(`La pizza que valen menos de $600 es: ${menor.nombre}`);
    }
}

for (key in Pizza) {
    console.log(`Nuestro sabores son: ${(Pizza[key].nombre)}`);
}
for (key in Pizza) {
    console.log(`Nuestro precios son: ${(Pizza[key].precio)}`);
}

for (key in Pizza) {
    console.log(`La pizza: ${(Pizza[key].nombre)} vale: ${(Pizza[key].precio)}`);
}
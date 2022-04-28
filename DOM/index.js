// Declarar un array de USUARIOS  vacio.

// Crear un campo de texto USERNAME, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

// Crear un campo de texto PASSWORD, detectar cuando ocurre un cambio y mostrar en consola el texto ingresado.

// Crear un botón de REGISTRARSE que, cuando lo toco, cree un usuario con la estructura {username, password} y lo guarde en el array usuarios.

//Crear un boton que diga LOGIN, que cuando lo toco tome los valores de username y password, valide si existe un usuario con ese username en mi array de usuarios. Si existe, validar que la contraseña coincida con el usuario, si la contraseña es incorrecta mostrar en pantalla La contraseña ingresada es incorrecta.  Si no existe, escribir en pantalla El usuario ignresado es invalido y limpiar los campos de texto.

//Si el usuario y la contrasenia son correctas, limpiar el HTML de input y botones y mostrar el texto Hola {username}, junto con un input que detecte en tiempo real los cambios e im


const USUARIOS = [];

let nomUsuario = document.getElementById('USERNAME');

nomUsuario.addEventListener(onchange, (e) => {
    USUARIOS.push(e.value);
    console.log(USUARIOS);
})
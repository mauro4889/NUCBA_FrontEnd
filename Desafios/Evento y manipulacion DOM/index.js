const texto = document.getElementById('texto');
const titulo = document.getElementById('titulo');

window.onload = () => {
    setTimeout(() => {
        texto.innerHTML = ('Se ha modificado el texto');
        titulo.classList.add('modificar');
    }, 3000);
}
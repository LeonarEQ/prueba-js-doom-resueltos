window.onload = function() {
    document.querySelector('#agregarCuadrado').addEventListener('click', agregarCuadrado);

    setInterval(cambiarAleatoriamenteColor, 1000);
}

function agregarCuadrado() {
    let cuadrado = document.createElement('div');
    cuadrado.classList.add('cuadrado');
    cuadrado.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    document.querySelector('.matriz').appendChild(cuadrado);
}

function cambiarAleatoriamenteColor() {
    let cuadrados = document.querySelectorAll('.cuadrado');

    cuadrados.forEach((c) => {
        c.style.backgroundColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    });
}

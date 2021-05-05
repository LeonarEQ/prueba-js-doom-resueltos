function subrayar() {
    let contenido = document.querySelector('#contenido').textContent;

    let palabras = contenido.match(/\b(\w|')+\b/gim).filter(p => p.length > 5);
    let reemplazadas = [];

    palabras.forEach((p) => {
        if (reemplazadas.indexOf(p) === -1) {
            contenido = contenido.replaceAll(p, `<span style="text-decoration: underline">${p}</span>`);
            reemplazadas.push(p);
        }
    });

    document.querySelector('#contenido').innerHTML = contenido;
}

subrayar();

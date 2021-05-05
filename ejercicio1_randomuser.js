async function obtenerUsuarios(cantidadUsuarios = 10) {
    if (typeof cantidadUsuarios != 'number' || !Number.isInteger(cantidadUsuarios)) {
        throw TypeError('El argumento debe ser un número entero.')
    }

    const API_URL = `https://randomuser.me/api?results=${cantidadUsuarios}&format=json`;

    let resultado = [];

    await fetch(API_URL).then((response) => response.json()).then((data) => {
        let users = data.results;

        return users.forEach(u => {
            resultado.push({
                username: u.login.username,
                nombre: u.name.first,
                apellido: u.name.last,
                sexo: u.gender,
                pais: u.location.country,
                email: u.email,
                foto: u.picture.medium
            });
        });
    });

    return resultado;
}

async function iniciar() {

    let cantidadUsuarios = 10;

    let usuarios = await obtenerUsuarios(cantidadUsuarios);

    usuarios.forEach(u => {
        console.log(u);
    })
}

iniciar();

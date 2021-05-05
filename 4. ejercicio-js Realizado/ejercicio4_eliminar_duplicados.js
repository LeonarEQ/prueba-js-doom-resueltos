function eliminarDuplicados(datos) {
    let resultado = [];

    datos.forEach(d => {
        if (resultado.indexOf(d) === -1) {
            resultado.push(d);
        }
    });

    return resultado;
}

const names = ['A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

console.log('Contenido:')
console.log(names)
console.log('Cantidad de elementos:', names.length)

console.log();

let resultado = eliminarDuplicados(names);
console.log('Contenido de resultado:')
console.log(resultado)
console.log('Cantidad de elementos en resultado:', resultado.length);

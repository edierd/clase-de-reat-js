const persona = {
    nombre: 'edierd',
    apellido: 'ospina',
    edad: 42,
    direccion: {
        ciudad: 'cartago',
        barrio: 'alpes',
    }
};
//console.log(persona);


const persona2 = {
    nombre: 'emma isabella',
    apellido: 'ospina giraldo',
    edad: 4,
    direccion: {
        ciudad: 'cartago',
        barrio: 'alpes',
    }
}

const persona3 = {...persona};
persona3.nombre = 'juan';

console.table(persona);
console.table(persona2);
console.table(persona3);
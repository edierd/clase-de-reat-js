// funciones
console.table("funciones");

const saludar = function(nombre) {
    return `hola, ${ nombre }`;
}

const saludar2 = (nombre) => {
    return `hola, ${ nombre }`;
}

const saludar3 = (nombre) => `hola, ${ nombre }`;
const saludar4 = (nombre) => `hola todos`;

console.table(saludar('edierd'));
console.table(saludar2('isabella'));
console.table(saludar3('juan'));
console.table(saludar4());

const getUser = () => ({
        uid: 'ABC123',
        username: 'el_papi'
});

const user = getUser();
console.table(user);

/* tarea 
1. Transforme a una funcion de flecha
2. Tiene que retornar un objeto especifico
3. Pruebas
*/
const getUsuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
});
      
const usuarioActivo = getUsuarioActivo('edierd');
console.table(usuarioActivo);

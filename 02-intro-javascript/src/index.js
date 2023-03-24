// desestructuracion
//Asignacion desetructurante

const persona = {
    nombre: 'edierd',
    edad: 42,
    clave: 'radiohead'
};

const retornaPersona =({nombre, edad, clave, rango = 'guitarra'}) => {

    console.table(nombre, edad, clave, rango);
    return{
        nombreClave: clave,
        anios: edad
    }
}

retornaPersona(persona);
/*
console.table(nombre);
console.table(edad);
console.table(clave);
*/


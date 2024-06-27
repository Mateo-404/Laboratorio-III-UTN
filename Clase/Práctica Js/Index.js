//  EJERCICIOS DE CLASE
/*
//* <-- Ejercicio 1 -->
let x = 10;
let y = 20;
function devolverMayor(num1, num2) {
    if (num1 > num2) {
        return num1;
    }else{
        return num2;
    }
}
//  Resultado
console.log("EJERCICIO 1");
console.log("El mayor número es: " + devolverMayor(x, y));

//* <--  Ejercicio 2 -->
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function sumarElementosArray(array) {
    let sumatoria = 0;
    for (let index = 0; index < array.length; index++) {
        sumatoria += array[index];
    }
    return sumatoria;
}
//  Resultado
console.log("EJERCICIO 2")
console.log("La suma de todos los elementos del array es: " + sumarElementosArray(array));

//* <--  Ejercicio 3 -->
console.log("EJERCICIO 3");
const nombre = "Mateo";
const vocales = ["a", "e", "i", "o", "u"];
function contarVocales(nombre) {
    let sumatoria = 0;
    nombre = nombre.toLowerCase();
    //  Recorre Letras del Nombre
    for (let index = 0; index < nombre.length; index++) {
        // Recorre lista de Vocales
        for (let j = 0; j < array.length; j++) {
            if (nombre[index] === vocales[j]) {
                sumatoria++;
                //  Deja de controlar si es alguna de las variables
                break;
            }
        }
    }
    return sumatoria;
}
//  Resultado
console.log("La cantidad de Vocales de: " + contarVocales(nombre));

//* <-- Ejercicio 4 -->
console.log("EJERCICIO 4")
//? Test
const lista = ["Toma", "Cebolla", "Pepino", "Calabaza", "Auto", "Manzana"];
function longitudMay5(_listaStrg) {
    let _resultado = [];
    for (let i = 0; i < _listaStrg.length; i++) {
        //  Si la longitud del str es >= 5, concatena a _resultado
        if (_listaStrg[i].length >= 5) {
            _resultado.push(_listaStrg[i]);
        }
    }
    return _resultado;
}
//  Resultado
console.log("Los arrays con igual o mayor a 5 longitud: " + longitudMay5(lista).toString());

//* <-- Ejercicio 5 -->
console.log("EJERCICIO 5");
function esPar(numero) {
    return ((numero % 2) === 0).toString();
}
*/

//  CODEWARS
//  Ejercicio 1
/*
function toNumberArray(stringarray){
    return stringarray.map((num) => eval(num));
}

const array = ["1", "2", "3"];
console.log(toNumberArray(array));
//  Ejercicio 2
const countBits = n => n.toString(2).split('0').join('').length;
console.log(countBits(1234));
//  Ejercicio 3
const filter_list = l => l.filter(Number.isInteger);

const array = ["1", "2", "3", "a", "b", "c", 8, 99, 100];
console.log(filter_list(array));
//  Ejercicio 4
const findShort = (list) => Math.min(...list.map(x => x.length));

console.log(findShort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
// Ejercicio 5
const likes = names => {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}
// Ejercicio 6
const isSquare = num => Number.isInteger(Math.sqrt(num));

console.log(isSquare());
*/
//  Ejercicio 7
const removeUnique = str =>  [...str].filter((char) => str.count(char) > 1);

console.log("abccdefee");
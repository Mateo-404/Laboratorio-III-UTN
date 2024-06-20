let numeros = document.getElementById("pantalla");
numeros.value = "";

// Funciones de Botones Físicos
document.addEventListener('keypress', function(event) {
    let evento = event.key.toUpperCase();

    if (evento === 'C' || evento === '') limpiar();
    if (evento === 'Enter') calcular();
    if (evento === '+' || evento === '-' || evento === '*' || evento === '/') agregarCaracter(evento);
    if (evento >= '0' && evento <= '9') agregarCaracter(evento);
});


// Funciones de Botones Virtuales
const limpiar = () => numeros.value = "";

const agregarCaracter = (caracter) => numeros.value += caracter;

const calcular = () => {
    try {
        numeros.value = eval(numeros.value);
    } catch (error) {
        numeros.value = error;
    }
}
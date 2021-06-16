console.log("Hola mundo")

const bonafont = "Agua";
console.log(bonafont);


// CONDICIONALES
/**
 * Son las opciones que tiene el programa para ejecutarse
 * dependiendo de una expresion.
 * 
 */


// LO QUE ESTA ADENTRO DEL PARENTESIS SE LE CONOCE COMO EXPRESION
// LO QUE SE VA A EVALUAR ES SI ES VERDADERO O FALSO
// SI ES VERDADERO, EJECUTA LO QUE ESTA EN LAS LLAVES
// SI ES FALSO, NO LO EJECUTA Y SIGUE EL PROGRAMA

// VERDADERO

if (1 < 2) {
    console.log("Si. Uno es menor que dos");
}


// FALSO

if (1<2) {
    console.log("Esto nunca se ejecuta");
}

// A ESTE IGUAL SE LE CONOCE COMO ASIGNACION

const teacher = "Mike";

// A ESTE IGUAL IGUAL SE LE CONOCE COMO COMPARACION
// "MIKE" VS "MIKE" => SON IGUALES. EJECUTA EL IF

if(teacher == "Mike") {
    console.log("Mi teacher es Mike")
} else {
    console.log("Mi teacher no es Mike")
}

// CONDICIONALES DE HORARIOS
/**
 * Van a construir un bloque de codigo que verifique una
 * hora en una variable y:
 * a. si es de 0000 - 1159 - Buenos dias
 * b. si es de 1200 - 1759 - Buenas tardes
 * c. si es de 1800 - 2399 - Buenas noches
 * BONUS si no coincide nngun rango, generar un mensaje: "Hora no valida"
 */

let hora = 1010;

if (hora < 1200) {
    console.log('Buenos dias, la hora es ', hora, '.');
} else if (1159 < hora < 1800) {
    console.log('Buenas tardes, la hora es ', hora, '.');
} else if (1800 < hora < 2399) {
    console.log('Buenas noches, la hora es ', hora, '.');
} else {
    console.log('Hora no valida');
}

console.log("Hola mundo")
// FUNCIONES
// Permiten reutilizar bloques de código las veces necesarias. 
// 1. DECLARACIÓN
//         PARÁMETROS 
function suma(x, y) {
    return x + y
}
// 2. INVOCACIÓN
//              ARGUMENTOS
const suma1 = suma(4, 5) // => 9
console.log(suma1)
const suma2 = suma(1436, 5876)
console.log(suma2)
/**
 * CREAR UNA FUNCIÓN QUE DEPENDIENDO EL IDIOMA QUE PIDAMOS, SALUDE DE UNA MANERA DISTINTA.
 * 
 * LOS IDIOMAS DISPONIBLES SON INGLÉS, ESPAÑOL ALEMÁN, CHINO
 * 
 */
function saludar(idioma) {
    let frase = ""
    switch (idioma) {
        case "spanish":
            frase = "Hola, ¿cómo estás?"
            break
        case "english":
            frase = "Hi. How are you?"
            break
        case "german":
            frase = "Hallo. Wie geht's die?"
            break
        case "chinese":
            frase = "Ni hao. Ni hue shuo hang yu ma?"
            break
        default:
            console.log("No contamos con ese idioma.")
    }
    return "Greetings in " + idioma + ": " + frase
}
// OPCIÓN A. CON CONSOLE.LOG DIRECTO
console.log(saludar("spanish"))
// OPCIÓN B. ASIGNANDO A VARIABLE E IMPRIMIENDO LA VARIABLE
const aleman = saludar("german")
console.log(aleman)


/**
 * 
 * 
 * TIPOS DE FUNCIONES
 */
// A. FUNCIÓN DE DECLARACIÓN
function saltar(){
    console.log("saltando")
}
saltar()
// B. FUNCIÓN DE EXPRESIÓN
const correr = function () {
    console.log("Corriendo")
}
correr()
    // B1. VERSIÓN MODERNA - ES6+
    const caminar = () => {
        console.log("caminar")
    }
    caminar()
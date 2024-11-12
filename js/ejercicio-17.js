// /*Realiza un script que muestre la posición de la primera vocal de un texto
// introducido por teclado.
// Ejemplo:
// Input: Hola mundo Output: la vocal ‘o’ está en la posición
// 1*/

const frase = prompt('ingrese una frase');

// hola mundo

for (let i = 0; i < frase.length; i++){
    if (frase.charAt(i)==='a' || frase.charAt(i)==='e' || frase.charAt(i)==='i' || frase.charAt(i)==='o' || frase.charAt(i)==='u' ){
        document.write(`la vocal ${frase.charAt(i)} esta en la posicion ${i}`)
        i=frase.length;
    }
}
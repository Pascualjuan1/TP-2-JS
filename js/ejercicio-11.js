/*Realiza un script que pida por teclado 3 edades y 3 nombres e indique el
nombre del mayor. *
Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp*/

const edad1 = prompt('ingrese edad 1');
const nombre1 = prompt('ingrese nombre 1');
const edad2 = prompt('ingrese edad 2');
const nombre2 = prompt('ingrese nombre 2');
const edad3 = prompt('ingrese edad 3');
const nombre3 = prompt('ingrese nombre 3');

var x = Math.max(edad1, edad2, edad3);

 if ( x == edad2 ) {
 document.write('el mayor es ' + nombre2);
} else if ( x == edad1){ 
        document.write('el mayor es ' + nombre1);
        } else {
         document.write('el mayor es ' + nombre3);
}
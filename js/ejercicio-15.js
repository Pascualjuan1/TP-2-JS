/*Realiza un script que cuente el número de vocales que tiene un texto*/

const cadena = prompt();
 var contador = 0;
for ( var i = 0; i <= cadena.length; i++ ){
    if ( cadena.charAt(i) == "a" || cadena.charAt(i) == "u" || cadena.charAt(i) == "o" || cadena.charAt(i) == "i" || cadena.charAt(i) == "e"  ){
        contador ++;

    }
}
 document.write(contador + ' vocales tiene la cadena.');

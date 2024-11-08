/*Realiza un script que pida una cadena de texto y lo muestre poniendo el signo
– entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué
tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/

var cadena = prompt();  
let i = 0;
while (i < cadena.length){
    document.write(cadena.charAt(i) + '-');
    i ++;
}
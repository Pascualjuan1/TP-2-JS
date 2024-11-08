/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir,
si tecleo “hola que tal” deberá mostrar “lat euq aloh*/

const cadena = prompt();
for ( var i = cadena.length; i >= 0; i--){
    document.write(cadena.charAt(i));

}
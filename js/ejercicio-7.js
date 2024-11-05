/*Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).*/

var i, j;

for (i = 30; i >= 1; i--){
    for (j = 1; j <= i; j++){
        
        document.write(i);
    }
    document.write('<br>');
}
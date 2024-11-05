/*Crea script para generar pirámide siguiente con los números del 1 al número
que indique el usuario (no mayor de 50)
11
2
123
1234
12345
123456*/
const num = parseInt(prompt());
var i, j;

for (i = 1; i <= num; i++){
    for (j = 1; j <= i; j++){
        
        document.write(j);
        
    }
    document.write('<br>');
}
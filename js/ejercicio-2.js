/*Escribir un programa que solicite una nota (número) de 0 a 10. Luego mostrar
la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje
de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje
“Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido*/

const nota = parseInt(prompt('escriba su nota:'));
    if (nota >= 0 ){ 
        switch (nota){
        case 0:
        case 1:
        case 2: document.write('Muy deficiente');
         break;
        case 3:
        case 4: document.write('insuficiente');
          break;
        case 5:
        case 6: document.write('sufuciente');
          break;
        case 7:document.write('bien');
           break;
        case 8: 
        case 9:document.write('notable');
            break;
        case 10: document.write('sobresaliente'); 
            break;
        default:    document.write('nota erronea');    
    }
        }else{
    document.write('digito invalido');
    }
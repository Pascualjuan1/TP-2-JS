/*
Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un
mensaje que ya puede conducir, si la edad ingresada no es un número válido
indicarlo en un mensaje
 */
const edad = parseInt(prompt('ingrese una edad por favor'));

if (edad >= 18 ){
    document.write('tiene la edad suficiente para poder conducir');

    }else if (edad < 18 && edad >= 0) {
        document.write('no esta en edad de conducir');
        
    } else {
        document.write('el valor ingresado es invalido');
    }


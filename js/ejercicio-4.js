/*Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con
“cancelar” deberá indicarse la suma total de los números introducidos.*/

let suma = 0
do {
    let contador = parseInt(prompt('ingrese un numero'));
    if  (contador >= 0 ) {
    
     suma = suma + contador;
    
    }else{
        alert('ingrese un numero por favor');
    }
}while (confirm() !== false);
    document.write(suma);
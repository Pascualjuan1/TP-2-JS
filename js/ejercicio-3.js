/*Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un
guión -*/

            
    do{
    let cadena = prompt('ingrese una cadena');
    document.write(cadena + '-');
    }while(confirm() !== false)
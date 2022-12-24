/* condicionales */ 
/* sentencia if else */

var casado = false;

if (casado) {
    console.log('estas casado');
} else{
    console.log('Abre tinder');
}


/* if (casado == false) {
    console.log('Abre tinder');
} */

var calificacion = 10;
if (calificacion > 5) {
    console.log('aprobaste el examen');
}else{
    console.log('reprobaste el examen');
}

/* Crear un algoritmo con lo siguiente:
Evaluar la edad del cliente 
si es mayor de 50 lo dejas entrar  
si tiene menos de 50 no lo dejas pasar aunque 
tenga mas de 18 años */

var dinero = 100;
var edad = 15; 
if (dinero >= 50 && edad >= 18) {
    console.log('Puedes entrar');
} else{
    console.log('Regresa despues');
}
/* Condicionales 
sentencia else if */

/* Crear un algoritmo con lo siguiente:
Evaluar la edad del cliente 
si es mayor de 50 lo dejas entrar  
si eres menor de edad te dara un mensaje diferente de cuando 
no tienes dinero 
si tiene menos de 50 no lo dejas pasar aunque 
tenga mas de 18 años */

var dinero = 100;
var edad = 15; 
if (dinero >= 50 && edad >= 18) {
    console.log('Puedes entrar');
} else if (edad >= 18 && dinero < 50){
    console.log('Vete de aqui pobreton');
} else{
    console.log('Vete a tu casa niño');
}

/* Crear un algoritmo
    si el cliente pide una cerveza le cobramos 50 pesos 
    si el cliente pide un shot de tequila le cobremos 80 pesos 
    si el cliente pide unas papas 60 pesos 
    si el cliente pide agua no le cobramos nada */

var cliente = 'tequila';
var cerveza = 50;
var tequila = 80;
var papas = 60;
if (cliente == 'cerveza') {
    console.log('En total son ' + cerveza + ' pesos');
}else if (cliente == 'tequila') {
    console.log('En total son ' + tequila + ' pesos');
}else if (cliente == 'papas'){
    console.log('En total son ' + papas + ' pesos');
}
else{
    console.log('Es gratis');
}

/* caress */
var producto = 'cerveza';
if (producto == 'cerveza' || producto == 'Cerveza') {
    console.log('Son 50 pesos');
}else if (producto == 'tequila' || producto == 'Tequila') {
    console.log('Son 80 pesos');
}else if (producto == 'papas' || producto == 'Papas') {
    console.log('Son 60 pesos');
}else if (producto == 'agua' || producto == 'Agua'){
    console.log('Es gratis el agua');
}else{
    console.log('Escribe bien');
}

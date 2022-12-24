/* sentencias 
switch-case */

var calificacion = 10;
switch (calificacion) {
    case 10:
        console.log('Tuviste una calificacion perfecta');
        break
    case 5:
        console.log('Reprobaste');
        break;
    case 9:
        console.log('Casi, te falto un poco');
        break;
    case 6:
        console.log('Apenas y pasaste');
        break;
    default:
        console.log('Pon un valor correcto');
        break;
}
/* Crear un algoritmo 
dame un numero del 1-10 
si el numero es 7 ganaste 
si no perdiste 
si el numero es 3 ganaste la mitad  */

var numero = 7; 
switch (numero) {
    case 7:
        console.log('Ganaste felicidades');
        break;
    case 3:
        console.log('Ganaste la mitad del premio');
        break;
    default:
        console.log('Lo sentimos mucho perdiste');
        break;
}
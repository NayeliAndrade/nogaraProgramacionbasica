/* clase 11 
condicionales sentencias if */
/* var mayordeedad = 20;
if(mayordeedad >18){
    console.log('es mayor de edad');
}

var crush = true;
if(crush == true){
    console.log('quieres ser mi novia?');
}


if (crush == false) {
    console.log('no');
}
 */

/* Crear un algoritmo con lo siguiente: 
examen con 100 preguntas 
100 = 10
90 = 9
60 = 6
< 60 = 5
 */

var examen = 100;
if (examen == 100) {
    console.log('10');
}
if (examen == 90) {
    console.log('9');
}
if (examen == 60) {
    console.log('6');
}
if (examen < 60) {
    console.log('5');
}

if (aciertos == 90 || 80 ) {
    console.log('Aciertos' + aciertos);
    console.log('Tienes 9 de calificacion');
}
if (aciertos == 60 || 70) {
    console.log('aciertos' + aciertos);
    console.log('Tienes 6 de calificacion');
}
if (aciertos < 60) {
    console.log('aciertos' + aciertos);
    console.log('Estas reprobado');
}
/* caress */
var aciertos = 68; 

if (aciertos == 100){
    console.log('aciertos' + aciertos);
    console.log('Tienes 10 de calificacion');
}
if (aciertos < 100 && aciertos >= 90 ) {
    console.log('Aciertos' + aciertos);
    console.log('Tienes 9 de calificacion');
}
if (aciertos == 60) {
    console.log('aciertos' + aciertos);
    console.log('Tienes 6 de calificacion');
}
if (aciertos < 60) {
    console.log('aciertos' + aciertos);
    console.log('Estas reprobado');
}
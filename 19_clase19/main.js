/* bucles anidados */

/*  crear un algoritmo que pinte una lista de la siguiente forma: 
10 temas con 5 subtemas a la vez 
1.1
1.2
1.3
1.4
1.5
2.1
2.2
2.3
2.4
2.5*/

for (let index2 = 1; index2 < 3; index2++) {
    for (let index = 1; index <= 5; index++) {
        console.log(index2 + '.' + index); 
    }
    
}

/* var index = 1;
var index2 = 1;
while (index <=2 ) {
    console.log(index);
    index = index -3;
    while (index2 <=5) {
        console.log(index + '.' + index2);
        index = index = -5;
    }
} */
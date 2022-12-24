/* condicionales 
sentencias anidadas */

var forma = 'circulo';
var color = 'cafe';
/* if (forma == 'circulo' && color == 'naranja') {
    console.log('Estas describiendo una naranja');
}else if(forma == 'circulo' && color == 'cafe'){
    console.log('un coco');
}else if (forma == 'ovalo' && color == 'amarillo'){
    console.log('una piña');
}else if (forma == 'ovalo' && color == 'verde'){
    console.log('es sandia');
}else{
    console.log('me rindo no se que es');
} */

if (forma == 'circulo') {

    if (color == 'naranja') {
     console.log('Puede que sea una naranja');   
    }else if (color = 'cafe'){
    console.log('Puede que sea un coco');
    }else{
        console.log('No se que fruta sea');
    }
}else if (forma == 'ovalo'){
    if (color = 'amarillo') {
        console.log('Puede que sea una piña');
    }else if (color = 'verde') {
        console.log('Puede que sea una sandia');
    }else{
        console.log('No se que fruta sea');
    }
}else{
    console.log('No pusiste una forma correcta');
}
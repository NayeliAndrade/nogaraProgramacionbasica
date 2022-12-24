/* 3 chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: 
los preciso no estan al lado de cada estante con su respectivo helado. 
ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que.. veamos 
como podemos ayudarlos
roberto tiene 1.5 usd
pedro tiene 1.7 usd 
cofla tiene 3 usd 

los precios de helado son los siguientes: 

palito de helado de agua 0.6 usd 
palito de helado de crema 1 usd 
bombon helado marca heladix 1.6 
= heladovich 1.7 
= helardo 1.8 usd 
potecito de helado con confites 2.9 usd 
pote de 1/4kg 2.9 usd  */

/* crear un algoritmo 
pedirles que ingresen el monto que tienen y mostrar el helado mas caro que puedan comprar 
si hay 2 o mas con el mismo precio, mostrar ambos 
confla quiere saber cuanto es el vuelto */

dineroDeRoberto = prompt('Cuanto dinero tienes Roberto'); 
dineroDeRoberto = parseFloat(dineroDeRoberto);

dineroDePedro = prompt('Cuanto dinero tienes Pedro'); 
dineroDePedro = parseFloat(dineroDePedro); 

dineroDeCofla = prompt('Cuanto dinero tiene Cofla');
dineroDeCofla = parseFloat(dineroDeCofla);

if (dineroDeRoberto >= 0.6 && dineroDeRoberto < 1){
    alert('Roberto Compra el helado de agua'); 
}else if (dineroDeRoberto >= 1 && dineroDeRoberto < 1.6){
    alert('Roberto Compra el helado de crema');
}else if (dineroDeRoberto >= 1.6 && dineroDeRoberto < 1.7){
    alert('Roberto Comprate el heladix');
}else if (dineroDeRoberto >= 1.7 && dineroDeRoberto < 1.8){
    alert('Roberto comprate heladovich');
}else if (dineroDeRoberto >= 1.8 && dineroDeRoberto < 2.9){
    alert('Roberto Comprate helardo');
}else if (dineroDeRoberto >= 2.9){
    alert('Roberto comprate confites o pote'); 
}else{
    alert('Roberto regresa pronto no te alcanza'); 
}

if (dineroDePedro >= 0.6 && dineroDePedro < 1){
    alert('Pedro Compra el helado de agua'); 
}else if (dineroDePedro >= 1 && dineroDePedro < 1.6){
    alert('Pedro Compra el helado de crema');
}else if (dineroDePedro >= 1.6 && dineroDePedro < 1.7){
    alert('Pedro Comprate el heladix');
}else if (dineroDePedro >= 1.7 && dineroDePedro < 1.8){
    alert('Pedro comprate heladovich');
}else if (dineroDePedro >= 1.8 && dineroDePedro < 2.9){
    alert('Pedro Comprate helardo');
}else if (dineroDePedro >= 2.9){
    alert('Pedro comprate confites o pote'); 
}else{
    alert('Pedro regresa pronto no te alcanza'); 
}

if (dineroDeCofla >= 0.6 && dineroDeCofla < 1){
    alert('Cofla Compra el helado de agua'); 
}else if (dineroDeCofla >= 1 && dineroDeCofla < 1.6){
    alert('Cofla Compra el helado de crema');
}else if (dineroDeCofla >= 1.6 && dineroDeCofla < 1.7){
    alert('Cofla Comprate el heladix');
}else if (dineroDeCofla >= 1.7 && dineroDeCofla < 1.8){
    alert('Cofla comprate heladovich');
}else if (dineroDeCofla >= 1.8 && dineroDeCofla < 2.9){
    alert('Cofla Comprate helardo');
}else if (dineroDeCofla >= 2.9){
    alert('Cofla comprate confites o pote'); 
}else{
    alert('Cofla regresa pronto no te alcanza'); 
}



/* var montoDeDineroTienen = prompt('Ingresa el monto de dinero que tienes:'); 
montoDeDineroTienen = parseFloat(montoDeDineroTienen); 
var palitoDeHeladoAgua = 0.6; 
var palitoDeHeladoCrema = 1; 
var bHHeladix = 1.6; 
var bHHeladovich = 1.7; 
var bHHelardo = 1.8; 
var potecitoHeladoConfites = 2.9; 
var pote = 2.9; 


if (montoDeDineroTienen === 1.5){
    document.write('Puedes comprar: ' + 'palito De Helado de Crema, cuesta: '+ palitoDeHeladoCrema);
}else if (montoDeDineroTienen === 1.7){
    document.write('Puedes comprar: ' + 'bHHeladovich, cuesta: ' + bHHeladovich);
}else if (montoDeDineroTienen === 3){
    document.write('Puedes comprar: ' + 'pote, cuesta: ' + pote + ' o Puedes comprar: ' + 'potecitoHeladoConfites, cuesta: ' + potecitoHeladoConfites);
}else{
    document.write('Vuelve mas tarde');
} */








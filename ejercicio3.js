//Factorial de un número
let numero= parseInt(prompt("Ingrese un número para calcular el factorial: ")); //9
let factorial=1;

//10! 
//1*2*3*4*5*6*7*8*9*10
for(let i=1;i<=numero;i++){
	factorial*=i;
}
console.log("El factorial de "+numero+" es: "+factorial);


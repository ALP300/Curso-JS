//LA SUMA DE LOS PRIMEROS NUMEROS IMPARES DEL BUCLE
//Inicializamos la variable para la suma
let n= parseInt(prompt("Ingrese un número para calcular la suma de impares: ")); //80
let sumaImpares=0;
let i=1;
//1,3,5,7,9,11,13,15,17,19


//Mientras
while(i<=n){
    sumaImpares+=i; 
    i+=2;
}
console.log("La suma de los impares es: "+sumaImpares);
//

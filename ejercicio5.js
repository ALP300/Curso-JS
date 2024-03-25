//SUMA DE DÍGITOS
//12123123213 =21  456
let n= parseInt(prompt("Ingrese un número para calcular la suma de digitos: "));
let sumaDigitos=0;

while(n!=0){
    sumaDigitos+=n%10;
    n= Math.floor(n/10);
}
console.log("La suma de los digitos es: "+sumaDigitos);

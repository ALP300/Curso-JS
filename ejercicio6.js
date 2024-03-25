let contadorPositivos = 0;
let contadorNegativos = 0;
let numero;

do {
  
  numero = parseInt(prompt("Ingrese un número (0 para salir):")); //60 70 80

  if (numero > 0) {
    contadorPositivos++;
  } else if (numero < 0) {
    contadorNegativos++;
  }
} while (numero != 0);

console.log("Cantidad de números positivos: " + contadorPositivos);
console.log("Cantidad de números negativos: " + contadorNegativos);
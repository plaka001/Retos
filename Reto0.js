/*
 * Reto #0
 * EL FAMOSO "FIZZ BUZZ"
 * Enunciado: Escribe un programa que muestre por consola (con un print) los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let index = 0; index < 100; index++) {
  let Multiple3 = index % 3;
  let Multiple5 = index % 5;

  if (Multiple3 == 0 && Multiple5 == 0) {
    console.log("fizzbuzz", index);
  } else if (Multiple3 == 0) {
    console.log("fizz", index);
  } else if (Multiple5 == 0) {
    console.log("buzz", index);
  } else {
    console.log(index);
  }
}

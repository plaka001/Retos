/*
 * Enunciado: Dado un array de enteros ordenado y sin repetidos,
 * crea una función que calcule y retorne todos los que faltan entre
 * el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 */

const dataIn = [5, 10, 20];
const dataOut = [];

let initNumdataIn = dataIn[0];

let finishtNumdataIn = dataIn[dataIn.length - 1];

let error = false;

for (let index = 0; index < dataIn.length; index++) {
  if (dataIn[index] >= dataIn[index + 1] || dataIn.length == 1) {
    error = true;
  }
}

if (!error) {
  for (let index = initNumdataIn + 1; index < finishtNumdataIn; index++) {
    if (!dataIn.find((Element) => Element === index)) {
      dataOut.push(index);
    }
  }
  console.log(dataOut);
} else {
  console.log("error");
}

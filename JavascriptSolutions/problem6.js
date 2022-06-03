/**
 * Problem 6: Sum square difference
 *
 *
 */
function addSquares(range) {
  return range.reduce((a, b) => a + b ** 2);
}

function squareAdd(range) {
  return range.reduce((a, b) => a + b) ** 2;
}

function sumSquareDifference(min, max) {
  const data = {
    rango: [],
  };

  for (let i = min; i <= max; i++) {
    data["rango"].push(i);
  }
  //console.log(data.rango)

  //suma de los cuadrados
  data.addSquares = addSquares(data.rango);
  // cuadrado de la suma
  data.squareAdd = squareAdd(data.rango);

  data.difference = data.squareAdd - data.addSquares;
  return `La diferencia es ${data.difference}`
}

console.log(sumSquareDifference(1, 100));

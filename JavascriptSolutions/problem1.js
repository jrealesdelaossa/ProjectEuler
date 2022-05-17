/**
 * Problem 1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */

// The function receives two parameters.
// limit: is an integer that indicates how far the factors are searched.
// multiple: the indicator with which the factors will be searched

function sumOfMultiples(limit, multiple) {
  // numbers that are multiples are validated
  let numbersMultiples = [];
  for (let i = 1; i < limit; i++) {
    if (i * multiple < limit) {
      numbersMultiples.push(i * multiple);
    } else {
      break;
    }
  }
  console.log(numbersMultiples);
  // the sum of all the multiples added to the array is returned |numbersMultiples|
  return numbersMultiples.reduce((a, b) => a + b);
}

/**
 * Problem answer
 */

console.log(sumOfMultiples(1000, 3) + sumOfMultiples(1000, 5)); // 266333

/*
  for (let i = 1; i < limit; i++) {
    if ((i / multiple) % 1 == 0) {
      numbersMultiples.push(i);
    }
  }
  */

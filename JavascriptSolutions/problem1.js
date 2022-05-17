/**
 * Problem 1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */

// Find all numbers that are multiples of |multiple| below |limit|,
// and are grouped into an array which is returned by the |multipleNumbers| function.
function multipleNumbers(limit, multiple) {
  // numbers that are multiples are validated
  let numbersMultiples = [];
  for (let i = 1; i < limit; i++) {
    if (i * multiple < limit) {
      numbersMultiples.push(i * multiple);
    } else {
      break;
    }
  }
  return numbersMultiples;
}

// This function receives two arrays and checks that there are no duplicate values.
// Returns the sum of the values ​​of the first array plus the non-repeating values
// ​​of the second array.
function sumOfMultiples(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    // console.log(arr1.indexOf(arr2[i]));
    if (arr1.indexOf(arr2[i]) == -1) {
      arr1.push(arr2[i]);
    }
  }
  return arr1.reduce((a, b) => a + b);
}

/**
 * Problem answer
 */

console.log(sumOfMultiples(multipleNumbers(1000, 3), multipleNumbers(1000, 5))); // 233168

/**
 * Problem 2
 * Each new term in the Fibonacci sequence is generated by adding the previous two terms.
 * By starting with 1 and 2, the first 10 terms will be:
 * 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
 * By considering the terms in the Fibonacci sequence whose values do not exceed four million,
 * find the sum of the even-valued terms.
 */

/**
 * The Fibonacci series is obtained up to the nth term defined by the |nTerm| parameter.
 * @param {*} nTerm
 * @returns Complete series up to the nth term.
 */
function fibonacci(nTerm) {
  let fibonacciNumber = [0, 1];
  for (let i = 2; i < nTerm; i++) {
    fibonacciNumber[i] = fibonacciNumber[i - 2] + fibonacciNumber[i - 1];
  }
  return fibonacciNumber;
}

/**
 *
 * @param {*} arr Array containing the Fibonacci series.
 * @returns The sum of the even numbers in the array.
 */
function sumOfPairs(arr) {
  let arrPairs = [];
  for (let index in arr) {
    if (arr[index] % 2 == 0) arrPairs.push(arr[index]);
  }
  return arrPairs.reduce((a, b) => a + b);
}

/**
 * Problem answer.
 *
 * The 34th term of the Fibonacci series is the last term less than four million,
 * therefore it is the parameter that is passed to the function |fibonacci|.
 */
console.log(sumOfPairs(fibonacci(34))); // 4613732

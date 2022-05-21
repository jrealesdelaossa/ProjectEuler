/**
 * Problem 5: Smallest multiple
 *
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10
 * without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/**
 *
 * @param {number} number any number.
 * @param {number} maxDiv the maximum number by which you want to divide.
 * @returns true if the |number| is divisible by the numbers 1 to |maxDiv| otherwise return false.
 */
function isDivide(number, maxDiv) {
  for (let i = 1; i <= maxDiv; i++) {
    if ((number / i) % 1 != 0) {
      return false;
    }
  }
  return true;
}


function smallMultiple(limit, maxDiv) {
  for (let i = 1; i <= limit; i++) {
    if (isDivide(i, maxDiv)) return i;
  }
  return NaN;
}

/**
 * Problem answer
 *
 * the required range is between 999999999, 20
 */

console.log(smallMultiple(999999999, 20));

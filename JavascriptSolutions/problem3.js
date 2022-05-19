/**
 * Problem 3
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */

/**
 * Find the prime factors of a number n.
 * @param n
 * @returns An array with the prime factors of n.
 */
function primeFactors(n) {
  let factors = [];
  let divider = 2;
  while (n > 1) {
    if ((n / divider) % 1 == 0) {
      n = n / divider;
      factors.push(divider);
    } else {
      divider += 1;
    }
  }
  return factors;
}

/**
 * Selection of the largest prime factor.
 * @param factors An array with prime factors.
 * @returns The largest prime factor.
 */
function greatestPrimeFactor(factors) {
  let largestPrimeFactor = factors[0];
  for (let i in factors) {
    if (factors[i] >= largestPrimeFactor) {
      largestPrimeFactor = factors[i];
    }
  }
  return largestPrimeFactor;
}

/**
 * Problem answer
 */
console.log(greatestPrimeFactor(primeFactors(600851475143))); // 6857

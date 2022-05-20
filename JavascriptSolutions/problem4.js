/**
 * Problem 4: Largest palindrome product
 *
 * A palindromic number reads the same both ways.
 * The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

/**
 *
 * @param number any number
 * @returns returns true or false if the number is a palindrome or not respectively.
 */
function isPalindrome(number) {
  let arrNumber = number.toString();
  arrNumber = arrNumber.split("");

  let arrNumberReverse = [...arrNumber];
  arrNumberReverse = arrNumberReverse.reverse();

  for (let i in arrNumber) {
    if (arrNumber[i] != arrNumberReverse[i]) {
      return false;
    }
  }

  return true;
}

/**
 * The following function receives a range of numbers defined between its two parameters,
 * then does the multiplication of all the values ​​in that range.
 * @param  min minimum value
 * @param  max maximum value
 * @returns The largest palindromic number located in that range of numbers
 */
function majorPalindrome(min, max) {
  // |numbers| contains the multiplications of the numbers in the range.
  let numbers = [];
  for (let i = min; i <= max; i++) {
    for (let j = min; j <= max; j++) {
      numbers.push(i * j);
    }
  }

  // All the palindromic numbers that may be in the obtained list are searched.
  let numbersPalindrome = [];
  for (let i in numbers) {
    let is = isPalindrome(numbers[i]);
    if (is == true) {
      numbersPalindrome.push(numbers[i]);
    }
  }

  // Get the largest palindrome.
  let palindromeLength = 0;
  for (let i in numbersPalindrome) {
    if (numbersPalindrome[i] >= palindromeLength) {
      palindromeLength = numbersPalindrome[i];
    }
  }

  return palindromeLength;
}

/**
 * Problem answer
 *
 * the required range is between 900 and 999
 */
console.log(majorPalindrome(900, 999)); // 906609

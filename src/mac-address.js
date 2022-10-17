const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let canContain = ['-' ,'A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let isAdress = true;
  for (let char of n) {
    if (canContain.indexOf(char) < 0) isAdress = false;
  }
  return isAdress;
  //let digits = n.split('-');
  // for (let digit of digits) {
  //   let match = digit.con
  //   if (!parseInt(digit, 16)) return false;
  // }
  // return true;


  // digits.array.forEach(element => {
  //   for (let i = 0; i < element.length; i++) {
  //     if (!canContain.indexOf(element[i])) isAdress = false;
  //   }
  // });
}
module.exports = {
  isMAC48Address
};

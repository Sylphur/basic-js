const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // let res = n.toString().slice(1);
  // return + res;
  let nStr = n.toString();
  let max = 0;
  for (let i = 0; i < nStr.length; i++) {
    let variable = +nStr.replace(nStr[i], '');
    if (variable > max) max = variable;
  }
  return max;
}

module.exports = {
  deleteDigit
};

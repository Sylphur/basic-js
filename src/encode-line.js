const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currCharCounter = 1;
  let res = '';

  // let res = str.split('').reduce(function(prev, curr, index, array) {
  //   if (curr === prev) {
  //     currCharCounter++; 
  //   }
    
  // })
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      currCharCounter++;
    }
    else if (currCharCounter > 1) {
      res += currCharCounter + str[i];
      currCharCounter = 1;
    }
    else res += str[i];
  }
  return res;
}

module.exports = {
  encodeLine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str);
  let add = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let sep = options.hasOwnProperty('separator') ? String(options.separator) : '+';
  let addSep = options.hasOwnProperty('additionSeparator') ? String(options.additionSeparator) : '|';
  let times = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let addTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;
  let oneRepeat = [];
  let res = [];

  oneRepeat.push(string);
  for (let i = 0; i < addTimes; i++) {
    if (i == addTimes - 1) {
      oneRepeat.push(add)
    }
    else {
      oneRepeat.push(add + addSep);
    }
  }
  for (let i = 0; i < times; i++) {
    if (i == times - 1) {
      res.push(oneRepeat.join(''));
    }
    else {
      res.push(oneRepeat.join('') + sep);
    }
  }
  return res.join('');
}



module.exports = {
  repeater
};

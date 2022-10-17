const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNum = Math.pow(2, disksNumber) - 1; // 2 ^ disksNum - 1
  let turnsPerSecond = turnsSpeed / 3600;
  let secondsOverall = Math.floor (turnsNum / turnsPerSecond); // why not round?
  // console.log(`turnsNum: ${turnsNum} turns per second: ${turnsPerSecond} overall: ${secondsOverall}ms`);
  const result = {
    'turns' : turnsNum,
    'seconds' : secondsOverall
  }
  // console.log(result);
  return result;
}
calculateHanoi(9, 4308);

module.exports = {
  calculateHanoi
};

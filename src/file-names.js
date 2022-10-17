const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let res = [];
  let repeatCounter = 0;
  for (let i = 0; i < names.length; i++) {
    if (res.includes(names[i])) {
      for (let j = 0; j < i; j++) {
        if (names[j] === names[i]) repeatCounter++;
      }
      if (repeatCounter === 0) res.push(`${names[i]}(${repeatCounter + 1})`);
      else {
        res.push(`${names[i]}(${repeatCounter})`);
        repeatCounter = 0; }
    }
    // else if (repeatCounter > 0) {
    //   res.push(`${name}(${repeatCounter})`);
    //   repeatCounter = 0;
    // }
    else {
      res.push(names[i]);
    }
  }
  return res;
}

module.exports = {
  renameFiles
};

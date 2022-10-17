const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr : [],

  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    if (value === undefined) this.chainArr.push(' ');
    this.chainArr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || 
        position <= 0 || 
        position > this.chainArr.length) {
        this.chainArr = [];
        throw new Error ('You can\'t remove incorrect link!'); 
      }

    this.chainArr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let res = "";
    for (let chain of this.chainArr) {
      res += `( ${chain} )~~`
    }
    this.chainArr = [];
    return res.slice(0, -2);
  }
};

module.exports = {
  chainMaker
};

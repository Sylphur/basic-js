const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let dns = {};

  for (let elem of domains) {
    let singleDomain = '';
    let domains = elem.split('.').reverse(); //ru yandex code

    for (let part of domains) {
      singleDomain += '.' + part; //`.${part}`;
      if (dns.hasOwnProperty(singleDomain)) {
        dns[singleDomain]++;
      } else {
        dns[singleDomain] = 1;
      }
    }
  }

return dns;
}

module.exports = {
  getDNSStats
};

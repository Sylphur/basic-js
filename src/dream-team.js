const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let res = '';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string' || members[i] instanceof String) {
      let name = members[i];
      name = name.trim();
      name = name.split(' ').join('');
      name = name.toUpperCase();
      let slice = name.slice(0, 1);
      res += slice;
    }
  }
  
  res = res.split('').sort().join('');
  console.log(res);
  return res;
}
createDreamTeam ([
  '   William Alston ',
  ' Paul Benacerraf',
  '  Ross Cameron',
  '       Gilles Deleuze',
  '  Arda Denkel ',
  '  Michael Devitt',
  '  Kit Fine',
  ' Nelson Goodman',
  'David Kolb',
  '   Saul Kripke',
  '  Trenton Merricks',
  '  Jay Rosenberg',
]);
module.exports = {
  createDreamTeam
};

const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((cats, arr) => {
    arr.forEach((el) => {
      el === "^^" ? (cats += 1) : (cats += 0);
    });
    return cats;
  }, 0);
}

module.exports = {
  countCats,
};

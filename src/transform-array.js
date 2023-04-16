const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  const controlSequences = arr.reduce((arr, el, i) => {
    if (typeof el === "string" && el.startsWith("--")) {
      arr.push([el, i]);
    }
    return arr;
  }, []);

  let result = [...arr];

  controlSequences.forEach((element) => {
    const [sequence, index] = element;

    if (sequence === "--double-next") {
      if (arr[index + 1]) {
        result.splice(index, 1, arr[index + 1]);
      } else {
        result.splice(index, 1);
      }
    }

    if (sequence === "--discard-prev") {
      if (index - 1 > 0) {
        result.splice(index - 1, 2);
      } else {
        result.splice(index, 1);
      }
    }

    if (sequence === "--discard-next") {
      if (index !== arr.length - 1) {
        result.splice(index, 2);
      } else {
        result.splice(index, 1);
      }
    }

    if (sequence === "--double-prev") {
      if (index - 1 > 0) {
        result.splice(index, 1, arr[index - 1]);
      } else {
        result.splice(index, 1);
      }
    }
  });

  return result;
}

module.exports = {
  transform,
};

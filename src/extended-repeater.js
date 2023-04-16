const { NotImplementedError } = require("../extensions/index.js");

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
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let additionString;
  let result = String(str);

  if (typeof addition !== "undefined") {
    additionString = String(addition);

    if (additionRepeatTimes) {
      let additionArr = [];

      for (let i = 0; i < additionRepeatTimes; i++) {
        additionArr.push(additionString);
      }
      additionString = additionArr.join(`${additionSeparator}`);
    }

    result += additionString;
  }

  if (repeatTimes) {
    let resultArr = [];

    for (let i = 0; i < repeatTimes; i++) {
      resultArr.push(result);
    }
    result = resultArr.join(`${separator}`);
  }

  return result;
}

module.exports = {
  repeater,
};

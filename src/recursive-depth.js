const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;

    function recursive(a) {
      a.forEach((element) => {
        if (Array.isArray(element)) {
          recursive(element);
          count += 1;
        }
      });
    }
    recursive(arr);
    return count;
  }
}
const depthCalc = new DepthCalculator();

console.log(
  depthCalc.calculateDepth([
    1,
    [8, [[]]],
    [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]],
                      [],
                    ],
                  ],
                ],
              ],
            ],
          ],
        ],
      ],
    ],
    2,
    3,
    [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]],
    [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]],
    4,
    5,
    ["6575", ["adas", ["dfg", [0]]]],
  ])
);

module.exports = {
  DepthCalculator,
};

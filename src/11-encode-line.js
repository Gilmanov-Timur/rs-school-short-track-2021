/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let counter = 0;

  [...str.split(''), ''].forEach((_, i) => {
    if (i === 0) {
      counter++;
      return;
    }
    if (str[i - 1] === str[i]) {
      counter++;
    } else {
      result += counter > 1 ? counter.toString() + str[i - 1] : str[i - 1];
      counter = 1;
    }
  });

  return result;
}

module.exports = encodeLine;

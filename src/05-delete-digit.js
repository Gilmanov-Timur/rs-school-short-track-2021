/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = n.toString().split('').map((_, index) => {
    const num = n.toString().split('');
    num.splice(index, 1);
    return num.join('');
  });
  return Math.max(...result);
}

module.exports = deleteDigit;

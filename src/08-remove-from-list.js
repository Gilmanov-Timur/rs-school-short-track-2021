/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function ListNode(x) {
  this.value = x;
  this.next = null;
}
function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
function removeKFromList(l, k) {
  const extractNumber = (list, arr = []) => {
    if (list.next) {
      arr.push(list.value);
      return extractNumber(list.next, arr);
    }
    arr.push(list.value);
    return arr;
  };
  const list = JSON.parse(JSON.stringify(l));
  const arr = extractNumber(list).filter((num) => num !== k);
  return convertArrayToList(arr);
}

module.exports = removeKFromList;

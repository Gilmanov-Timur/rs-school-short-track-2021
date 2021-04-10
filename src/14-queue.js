const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.top = null;
  }

  get size() {
    let counter = 0;

    if (this.top) {
      let child = this.top.next;
      counter++;

      if (child) {
        counter++;
        while (child.next) {
          child = child.next;
          counter++;
        }
      }
    }

    return counter;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (!this.top) {
      this.top = node;
    } else if (this.top.next) {
      let child = this.top.next;

      while (child.next) {
        child = child.next;
      }

      child.next = node;
    } else {
      this.top.next = node;
    }
  }

  dequeue() {
    let value = null;

    if (this.top) {
      value = this.top.value;
      if (this.top.next) {
        this.top = this.top.next;
      } else {
        this.top = null;
      }
    }

    return value;
  }
}

module.exports = Queue;

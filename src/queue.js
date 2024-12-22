const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.myQueue = [];
  }

  getUnderlyingList() {
    const createElem = (index) => {
      const res = {
        value: this.myQueue[index] ? this.myQueue[index] : null,
        next: this.myQueue[index + 1] ? createElem(index + 1) : null,
      };

      index++;

      return res;
    }

    return createElem(0);
  }

  enqueue(value) {
    this.myQueue.push(value);
  }

  dequeue() {
    return this.myQueue.shift();
  }
}

module.exports = {
  Queue,
};

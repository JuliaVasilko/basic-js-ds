const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currNode = this.rootNode;

    while (currNode) {
      if (newNode.data < currNode.data) {
        if (!currNode.left) {
          currNode.left = newNode;
          return;
        }

        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          currNode.right = newNode;
          return;
        }
        currNode = currNode.right;
      }
    }
  }

  has(data) {
    if (data === this.rootNode.data) {
      return true;
    }

    let currNode = this.rootNode;

    while (data !== currNode.data) {
      if (data < currNode.data) {
        if (!currNode.left) {
          return false;
        }

        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          return false;
        }

        currNode = currNode.right;
      }
    }

    return true;
  }

  find(data) {
    if (data === this.rootNode.data) {
      return this.rootNode;
    }

    let currNode = this.rootNode;

    while (data !== currNode.data) {
      if (data < currNode.data) {
        if (!currNode.left) {
          return null;
        }

        currNode = currNode.left;
      } else {
        if (!currNode.right) {
          return null;
        }

        currNode = currNode.right;
      }
    }

    return currNode;
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

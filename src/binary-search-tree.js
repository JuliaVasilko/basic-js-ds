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

  remove(data) {

    const removeNode = function(node, data) {

      if (node === null) {
        return null;
      }

      if (data === node.data) {
        if (node.left === null && node.right === null) {
          return null;
        }
        if (node.left === null) {
          return node.right
        }
        if (node.right == null) {
          return node.left;
        }

        let temporaryNode = node.right;

        while (temporaryNode.left !== null) {
          temporaryNode = temporaryNode.left;
        }

        node.data = temporaryNode.data;
        node.right = removeNode (node.right, temporaryNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode (node.left, data);
          return node;
        } else {
          node.right = removeNode (node.right, data);
          return node;
        }
      }
      this.rootNode = removeNode (this.rootNode, data);
    }

  min() {
    let currNode = this.rootNode;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    let currNode = this.rootNode;
    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};

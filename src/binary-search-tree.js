const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree
  }

  add(data) {
    const node = new Node(data);

    if (!this.tree) {
      this.tree = node;
      return;
    }

    let currentNode = this.tree;

    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          return;
        }
        currentNode = currentNode.left;

      } else {
        if (!currentNode.right) {
          currentNode.right = node;
          return;
        }
        currentNode = currentNode.right;
      } 
    }
  }

  has(data) {
    let currentNode = this.tree;

    while (currentNode) {
      if (currentNode.data === data) {
        return true;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.tree;

    while (currentNode) {
      if (currentNode.data === data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return null;
  }

  remove(data) {
    let currentNode = this.tree;
    let parentNode = null;

    while (currentNode) {
      if (currentNode.data === data) {
        
        if (!currentNode.left && !currentNode.right) {
          if (parentNode.left === currentNode) {
            parentNode.left = null;
            return;
          } else {
            parentNode.right = null;
            return;
          }
        } else if (currentNode.left && !currentNode.right) {
          
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.left;
            
            return;
          } else {
            parentNode.right = currentNode.left;
            return;
          }
        } else if (!currentNode.left && currentNode.right) {
          if (parentNode.left === currentNode) {
            parentNode.left = currentNode.right;
            
            return;
          } else {
            parentNode.right = currentNode.right;
            return;
          }
        } else {
          let replace = currentNode.left;
          let replaceParent = currentNode;

          while (replace.right) {
            replaceParent = replace;
            replace = replace.right;
          }
          currentNode.data = replace.data;

          if (replaceParent.left === replace) {
            replaceParent.left = replace.left;
            return;
          } else {
            replaceParent.right = replace.left;
            return;
          }
        }
      } else if (data < currentNode.data) {
        parentNode = currentNode;
        currentNode = currentNode.left;
        
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
  }

  min() {
    let currentNode = this.tree;
    if (!currentNode) {
      return null;
    } else {
      while (currentNode.left) {
        currentNode = currentNode.left;
      }

      return currentNode.data;
    }
  }

  max() {
    let currentNode = this.tree;
    if (!currentNode) {
      return null;
    } else {
      while (currentNode.right) {
        currentNode = currentNode.right;
      }

      return currentNode.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};
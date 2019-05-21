class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

//      10
//   5     13
// 2  7  11  16

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

/** insert method with recursive solution
 * insert(value){
    var newNode = new Node(value);
    if (traverse(this.root)) this.root = newNode;

    function traverse(current){
        if (current === null) return true;

        if (newNode.value > current.value) {
            if (traverse(current.right)) current.right = newNode;
        } else if (newNode.value < current.value) {
            if (traverse(current.left)) current.left = newNode;
        }

        return false;
    }

    return this;
}
 */

/** find method with recursive solution
 * find(val, node = this.root) {
        if (!node) return null;
        if (val !== node.val) {
            let branch = val > node.val ? "right" : "left";
            node = node[branch];
            return this.find(val, node)
        } else {
            return node;
        }
    }

    // solution #2
    find(val){
        // let result;
        const helper = (curNode)=>{
            if(curNode.val === val){
                return true;
            } else {
                if(val > curNode.val && curNode.right){
                    return helper(curNode.right)
                } else if (val < curNode.val && curNode.left){
                    return helper(curNode.left)
                } else {
                    return false;
                }
            }
        }

        if(!this.root) return false;
        return helper(this.root);

    }
 */

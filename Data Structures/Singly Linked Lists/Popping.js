/**
 * ! Poping pseudocode
 * 1. if there are no nodes in the list, return undefined
 * 2. Loop through the list until you reach the tail
 * 3. set the next property of the 2nd to last node to be null
 * 4. set the tail to be the 2nd to last node
 * 5. decrement the length of the list by 1
 * 6. return the value of the node removed
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // traverse() {
  //   let current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }
  pop() {
    if (this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

const list = new SinglyLinkedList();

console.log(list.push('Hello'));
console.log(list.push('Goodbye'));
console.log(list.push('99'));
console.log(list.pop());

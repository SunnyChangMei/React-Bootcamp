/**
 * ! Pushing pseudocode
 * 1. This function should accept a value
 * 2. Create a new node using the value passed to the function
 * 3. If there is no head property on list, set the head and tail to be the newly create node
 * 4. Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly creat node
 * 5. Increment the length by one
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
}

const list = new SinglyLinkedList();
console.log(list.push('Hello'));
console.log(list.push('Goodbye'));
console.log(list.push('99'));

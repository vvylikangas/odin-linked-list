class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    let node = new Node(value);
    let current;

    if (this.head == null) this.head = node;
    else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }

      current.nextNode = node;
    }
    this.size++;
  }

  prepend(value) {
    let node = new Node(value);
    node.nextNode = this.head;
    this.head = node;
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    if (!this.head) return null;
    let current;
    current = this.head;
    while (current.nextNode) current = current.nextNode;
    return current.value;
  }
}

let list = new LinkedList();
list.append(20);
list.append(30);
list.prepend(10);

// testing
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());

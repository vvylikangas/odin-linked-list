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

    if (!this.head) this.head = node;
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
    let current = this.head;
    while (current.nextNode) current = current.nextNode;
    return current.value;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) return null;

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) return current.value;
      current = current.nextNode;
      count++;
    }
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.nextNode) {
      let value = this.head.value;
      this.head = null;
      this.size--;
      return value;
    }

    let current = this.head;
    let prev = null;

    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null;
    this.size--;

    return current.value;
  }

  contains(value) {
    if (!this.head) return false;

    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    if (!this.head) return null;
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) return count;
      current = current.nextNode;
      count++;
    }
    return null;
  }

  toString() {
    if (!this.head) return 'null';

    let list = '';
    let current = this.head;

    while (current) {
      list += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    list += ' null';
    return list;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size)
      return `Index out of range. Please use index between 0 and ${this.size}`;

    if (index === 0) {
      this.prepend(value);
      return `inserted ${value} at index 0`;
    }

    let count = 0;
    let current = this.head;
    let prev = null;

    while (count < index) {
      prev = current;
      current = current.nextNode;
      count++;
    }

    let node = new Node(value);

    prev.nextNode = node;
    node.nextNode = current;

    this.size++;

    return `inserted ${value} at index ${index}`;
  }

  removeAt(index) {
    if (this.size === 0) {
      return 'The list is empty. No node to remove.';
    }

    if (index < 0 || index >= this.size)
      return `Index out of range. Please use index between 0 and ${
        this.size - 1
      }`;

    let current = this.head;
    let prev = null;

    if (index === 0) {
      this.head = current.nextNode;
    } else {
      let count = 0;
      while (count < index) {
        prev = current;
        current = current.nextNode;
        count++;
      }
      prev.nextNode = current.nextNode;
    }

    this.size--;
    return `Deleted ${current.value} at index ${index}`;
  }
}

let list = new LinkedList();
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.prepend(10);

// testing
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getAt(1));
console.log(list.pop());
console.log(list.contains(10));
console.log(list.find(30));
console.log(list.toString());
console.log(list.insertAt(60, 4));
console.log(list.toString());
console.log(list.removeAt(1));
console.log(list.toString());

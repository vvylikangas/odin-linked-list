class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
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
    return `List size is: ${this.size}`;
  }

  getHead() {
    return this.head ? `First value is: ${this.head.value}` : 'List is empty.';
  }

  getTail() {
    if (!this.head) return 'List is empty.';
    let current = this.head;
    while (current.nextNode) current = current.nextNode;
    return `Last value is: ${current.value}`;
  }

  getAt(index) {
    if (index < 0 || index >= this.size)
      return `Index out of range. Please use index between 0 and ${
        this.size - 1
      }`;

    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index)
        return `Value at index ${index} is: ${current.value}`;
      current = current.nextNode;
      count++;
    }
  }

  pop() {
    if (!this.head) return 'List is empty.';

    if (!this.head.nextNode) {
      let value = this.head.value;
      this.head = null;
      this.size--;
      return `${value} deleted`;
    }

    let current = this.head;
    let prev = null;

    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = null;
    this.size--;

    return `${current.value} deleted`;
  }

  contains(value) {
    if (!this.head) return 'List is empty.';

    let current = this.head;
    while (current) {
      if (current.value === value) return `${value} found: true`;
      current = current.nextNode;
    }
    return `${value} found: false`;
  }

  find(value) {
    if (!this.head) return 'List is empty.';
    let current = this.head;
    let count = 0;

    while (current) {
      if (current.value === value) return `${value} found at index: ${count}`;
      current = current.nextNode;
      count++;
    }
    return `${value} not found.`;
  }

  toString() {
    if (!this.head) return 'List is empty.';

    let list = '';
    let current = this.head;

    while (current) {
      list += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return (list += ' null');
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

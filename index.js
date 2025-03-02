import { LinkedList } from './linkedlist.js';

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.prepend('turtle');

// testing
console.log(list.getSize());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.getAt(6));
console.log(list.pop());
console.log(list.contains('turtle'));
console.log(list.find('hamster'));
console.log(list.toString());
console.log(list.insertAt('lion', 5));
console.log(list.toString());
console.log(list.removeAt(1));
console.log(list.toString());

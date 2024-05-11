const SinglyCircularLinkedList = require('./singly-circular');

class StackUsingLinkedList {
    constructor(){
        this.list = new SinglyCircularLinkedList();
    };

    push(value) {
        this.list.addNodeAtFirstPos(value);
    };

    pop(){
        return this.list.deleteAtFirstPos();
    };

    peek(){
        return this.list.head.value;
    };

    isEmpty(){
        return this.list.isEmpty();
    };

    getSize(){
        return this.list.getSize();
    };

    printList(){
        return this.list.printList();
    };
};

const stack = new StackUsingLinkedList();
stack.push(40);
stack.push(30);
stack.push(20);
stack.push(10);
stack.printList();
console.log('size? ', stack.getSize());

stack.pop();
stack.printList();
console.log('size? ', stack.getSize());

console.log(stack.peek());

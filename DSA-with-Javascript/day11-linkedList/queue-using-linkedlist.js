const SinglyCircularLinkedList = require('./singly-circular');

class QueueUsingLinkedList {
    constructor(){
        this.list = new SinglyCircularLinkedList();
    };

    enqueue(value) {
        this.list.addNodeAtLastPos(value);
    };

    dequeue(){
        return this.list.deleteAtFirstPos();
    };

    front(){
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

const queue = new QueueUsingLinkedList();
queue.enqueue(40);
queue.enqueue(30);
queue.enqueue(20);
queue.enqueue(10);
queue.printList();
console.log('size? ', queue.getSize());

queue.dequeue();
queue.printList();
console.log('size? ', queue.getSize());

console.log(queue.front());

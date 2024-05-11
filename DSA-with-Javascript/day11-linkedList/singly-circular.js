//Singly Circular List


class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    };
};

class SinglyCircularLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    };

    isEmpty(){
        return this.size === 0;
    };

    getSize(){
        if(this.isEmpty()){
            console.log('List is empty!');
            return null;
        };
        return this.size;
    };

    addNodeAtFirstPos(value){
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;

        }else {
            newNode.next = this.head;
            this.head = newNode;
        };
        this.size++;
    };

    addNodeAtLastPos(value){
        let newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;

        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        };
        this.size++;
    };

    deleteAtFirstPos(){
        if (this.isEmpty()) {
            console.log('List is empty');
            return null;
        }else{
            let prev = this.head;
            this.head = this.head.next;
            prev = null;
        };
        this.size--;
    };

    deleteAtLastPos(){
        if (this.isEmpty()) {
            console.log('List is empty');
            return null;
        }
        if (this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let prev = this.head;
            while (prev.next !== this.tail) {
                prev = prev.next;
            };
            prev.next = null;
            this.tail = prev;
        };
        this.size--;
    };

    printList(){
        if(this.isEmpty()){
            console.log('List is empty!');
            return null;
        };
        let list = '';
        let curr = this.head;
        while (curr) {
            list += `${curr.value}`;
            curr = curr.next;
        };
        console.log(list);
    };
};

const singlyCircularList = new SinglyCircularLinkedList();
console.log('list is empty? ', singlyCircularList.isEmpty());
console.log('size? ', singlyCircularList.getSize());
singlyCircularList.addNodeAtFirstPos(10);
singlyCircularList.printList();
singlyCircularList.addNodeAtFirstPos(20);
singlyCircularList.printList();
singlyCircularList.addNodeAtFirstPos(30);
singlyCircularList.printList();
singlyCircularList.addNodeAtFirstPos(40);
singlyCircularList.printList();
console.log('size? ', singlyCircularList.getSize());

singlyCircularList.deleteAtFirstPos();
singlyCircularList.printList();
console.log('size? ', singlyCircularList.getSize());

singlyCircularList.deleteAtLastPos();
singlyCircularList.printList();
console.log('size? ', singlyCircularList.getSize());


module.exports = SinglyCircularLinkedList;